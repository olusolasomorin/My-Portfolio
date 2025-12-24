import { useRef, useState, useEffect } from "react";
import{
    BotMessageSquare, 
    X, 
    Send, 
    Bot  
} from 'lucide-react'

function Ai() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatInput, setChatInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId] = useState(() => Math.random().toString(36).substring(7));
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm Olusola's AI Assistant. Ask me anything about his skills, experience, or projects!", sender: 'ai' }
    ]);
    const messagesEndRef = useRef(null);

    // Scroll to bottom of chat when new messages appear
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!chatInput.trim() || isLoading) return;

        // Add User Message
        const userText = chatInput; // Save text to variable
        const newUserMsg = { id: Date.now(), text: userText, sender: 'user' };
        
        setMessages(prev => [...prev, newUserMsg]);
        setChatInput('');
        setIsLoading(true); // Start loading

        try {
            const response = await fetch("http://127.0.0.1:8000/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    message: userText, 
                    session_id: sessionId // Sending the userID created
                }),
            });

            if (!response.ok) throw new Error("Server error");

            const data = await response.json();

            // 3. Add AI Response to UI
            const newAiMsg = { id: Date.now() + 1, text: data.reply, sender: 'ai' };
            setMessages(prev => [...prev, newAiMsg]);

        } catch (error) {
            console.error("Error connecting to AI:", error);
            // Optional: Show an error message in the chat
            setMessages(prev => [...prev, { 
                id: Date.now(), 
                text: "My brain is offline (Server Error).", 
                sender: 'ai' 
            }]);
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <div>
            <div className="fixed bottom-6 right-6 z-50">
                <button
                onClick={() => setIsChatOpen(true)} // Always opens the modal
                className="w-16 h-16 bg-cyan-400 hover:bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center text-black transition-all hover:scale-110 active:scale-95 cursor-pointer"
                >
                <BotMessageSquare size={38} />
                </button>
            </div>
            
            {/* --- CENTERED AI ASSISTANT MODAL (Full page overlay) --- */}
            {isChatOpen && (
                // Overlay and Centering container. Clicking here closes the modal.
                <div 
                className="fixed inset-0 z-100 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={() => setIsChatOpen(false)} // Close modal when clicking outside
                >
                    
                    {/* Modal Content container */}
                    <div 
                        className="w-full max-w-lg bg-white/ backdrop-blur-xl border border-gray-700 rounded-xl shadow-2xl shadow-gray-500/400 flex flex-col overflow-hidden h-[90vh] md:h-[600px] 
                                animate-in zoom-in-95 fade-in duration-300"
                        // Prevent overlay click from closing the modal when clicking inside the chat box
                        onClick={(e) => e.stopPropagation()}
                    >
                        
                        {/* Chat Header */}
                        <div className="bg-white/ backdrop-blur-xl border-b border-gray-700 p-4 flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-2">
                                <Bot className="text-white" size={20} />
                                <h3 className="font-bold text-cyan-400">Olusola's AI Assistant</h3>
                            </div>
                            {/* Close Button */}
                            <button 
                                onClick={() => setIsChatOpen(false)} 
                                className="text-gray-300 hover:text-white p-1 rounded-full hover:bg-cyan-700 transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Chat Messages Area */}
                        <div className="flex-1 p-4 overflow-y-auto bg-white/2 backdrop-blur-xl flex flex-col gap-3">
                            {messages.map((msg) => (
                                <div 
                                key={msg.id} 
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div 
                                        className={`max-w-[80%] p-3 rounded-xl text-sm shadow-md ${
                                        msg.sender === 'user' 
                                            ? 'bg-cyan-400 text-black rounded-br-none' 
                                            : 'bg-[#364153] text-white rounded-tl-none'
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-start w-full animate-in fade-in duration-300">
                                    <div className="flex max-w-[85%] gap-2 md:gap-3">
                                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-cyan-400 text-white flex items-center justify-center shrink-0 mt-1">
                                            <Bot size={14} className="md:w-4 md:h-4" />
                                        </div>
                                        <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1">
                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Chat Input Area */}
                        <form onSubmit={handleSendMessage} className="p-3 bg-white/ backdrop-blur-xl border-t border-gray-700 flex gap-2 shrink-0">
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                placeholder="Ask about Olusola..."
                                className="flex-1 bg-[#364153] border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyan-500 text-white"
                            />
                            <button 
                                type="submit" 
                                className="bg-cyan-400 hover:bg-cyan-300 text-black p-2 rounded-lg transition-colors duration-500"
                                disabled={!chatInput.trim()}
                            >
                                <Send size={18} />
                            </button>
                        </form>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Ai;