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
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm Olusola's AI Assistant. Ask me anything about his skills, experience, or projects!", sender: 'ai' }
    ]);
    const messagesEndRef = useRef(null);

    // Scroll to bottom of chat when new messages appear
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!chatInput.trim()) return;

        // Add User Message
        const newUserMsg = { id: Date.now(), text: chatInput, sender: 'user' };
        setMessages(prev => [...prev, newUserMsg]);
        setChatInput('');

        // Simulate AI Response (Mock logic)
        setTimeout(() => {
        let aiResponse = "That's a great question! Olusola is specialized in full-stack development and AI solutions.";
        
        const lowerInput = newUserMsg.text.toLowerCase();
        if (lowerInput.includes('contact') || lowerInput.includes('email')) {
            aiResponse = "You can reach Olusola at somorinolusola1@gmail.com.";
        } else if (lowerInput.includes('skill') || lowerInput.includes('stack')) {
            aiResponse = "Olusola is proficient in Python, React, AI Development, and Web Development.";
        } else if (lowerInput.includes('project')) {
            aiResponse = "He has worked on various AI-integrated web applications. Check out the Projects section!";
        }

        setMessages(prev => [...prev, { id: Date.now() + 1, text: aiResponse, sender: 'ai' }]);
        }, 1000);
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
                className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
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
                        <div className="bg-white/ backdrop-blur-xl border-b-1 border-gray-700 p-4 flex justify-between items-center flex-shrink-0">
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
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Chat Input Area */}
                        <form onSubmit={handleSendMessage} className="p-3 bg-white/ backdrop-blur-xl border-t border-gray-700 flex gap-2 flex-shrink-0">
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