import { useState } from 'react';
import { X, Github, ExternalLink } from 'lucide-react'; // Ensure you have lucide-react installed or use standard emojis/icons

function ProjectPage() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projectsData = [
        {
            id: 1,
            title: "Library Management System",
            role: "Frontend",
            image: "https://placehold.co/600x400/1e293b/06b6d4?text=Library+System",
            description: "A clean, modern digital tool designed to manage school library system. This allows student check for available books in the school library online.",
            fullDescription: "This comprehensive system automates the borrowing process, tracks overdue books, and provides a digital catalog for students. It features an admin dashboard for librarians to manage inventory and student records efficiently.",
            tags: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/olusolasomorin/Library-Management-System"
        },
        {
            id: 2,
            title: "TaxWise(AI)",
            role: "Frontend Development & UI/UX Design",
            image: "https://ik.imagekit.io/olusola/taxwise.jpeg",
            description: "TaxWise is an Agentic RAG-powered assistant designed to democratize access to the complex 2024 Nigerian Tax Reform Bills.",
            fullDescription: "As Nigeria undergoes a massive overhaul of its fiscal policies set for implementation in January 2026, this project aims to bridge the gap between dense legal documentation and public understanding using advanced RAG pipelines.",
            tags: ["React", "TailwindCSS", "RAG", "LangChain", "LangGraph", "Python", "OpenAI"],
            link: "https://github.com/dekpo23/Tax-Assistant"
        },
        {
            id: 3,
            title: "MathBot(AI)",
            role: "Personal Project",
            image: "https://placehold.co/600x400/1e293b/06b6d4?text=MathBot",
            description: "AI Powered chatbot that allows students perform any mathematical problems.",
            fullDescription: "MathBot leverages Gemini's capabilities to break down complex calculus and algebra problems into step-by-step explanations, helping students understand the 'why' behind the solution.",
            tags: ["React", "TailwindCSS", "Python", "Google-gemini"],
            link: "https://github.com/olusolasomorin/Mathematics-Chatbot"
        },
        {
            id: 4,
            title: "AwaSabi",
            role: "Frontend Development & UI/UX Design",
            image: "https://ik.imagekit.io/olusola/awasbi.jpeg",
            description: "AwaSabi is a multilingual learning platform designed to help Nigerians and Africans reconnect with their indigenous languages.",
            fullDescription: "Using NLP and community-driven datasets, AwaSabi creates an immersive learning environment for endangered African languages, featuring interactive lessons and voice recognition practice.",
            tags: ["React", "TailwindCss", "Python", "Huggingface", "N-Atlas", "MySQL"],
            link: "https://github.com/AjeeAI/Awarri-hackathon"
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        // Prevent background scrolling when modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        // Restore background scrolling
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="md:flex flex-col items-center max-w-7xl mx-auto my-24 px-4">
            <h2 className="text-white text-4xl font-bold font-secondary text-center mb-12">
                Projects
            </h2>
            
            <div className="grid w-full sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                    // CHANGED: <a> to <div>, added onClick, removed href (link is now in modal)
                    <div 
                        key={project.id} 
                        onClick={() => openModal(project)}
                        className="group cursor-pointer text-white border flex flex-col border-gray-700 bg-white/5 backdrop-blur-xl mx-auto p-8 rounded-xl shadow-2xl hover:scale-105 md:hover:scale-105 transition-all duration-800 hover:border-cyan-400 hover:text-cyan-400"
                    >
                        <div className="font-semibold text-xl mb-5">{project.title}</div>
                        <div className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-3">
                            {project.description}
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="bg-cyan-400 text-xs text-black px-4 py-1 rounded-3xl transition-colors duration-300 group-hover:bg-gray-200 group-hover:text-black">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* --- MODAL IMPLEMENTATION --- */}
            {selectedProject && (
                <div 
                    className="fixed inset-0 z-50 flex justify-center items-center p-4 bg-black/50 backdrop-blur-md"
                    onClick={closeModal} // Close when clicking the background
                >
                    <div 
                        className="bg-back/50 backdrop-blur-md border border-cyan-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative animate-fadeIn"
                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
                    >
                        {/* Modal Header */}
                        <div className="p-6 border-b border-cyan-900 flex justify-between items-center sticky top-0 bg-black/50 backdrop-blur-md z-10">
                            <h3 className="text-2xl font-bold text-cyan-400">{selectedProject.title}</h3>
                            <button onClick={closeModal} className="text-gray-400 hover:text-white cursor-pointer transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-6">
                            
                            {/* Role */}
                            <div>
                                <span className="text-cyan-400 font-medium text-sm">My Role: </span>
                                <span className="text-gray-300 text-sm">{selectedProject.role}</span>
                            </div>

                            {/* Image Banner */}
                            <div className="w-full h-50 sm:h-75 bg-gray-800 rounded-lg overflow-hidden relative group">
                                <img 
                                    src={selectedProject.image} 
                                    alt={selectedProject.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Description</h4>
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                    {selectedProject.fullDescription || selectedProject.description}
                                </p>
                            </div>

                            {/* Action Button */}
                            <a 
                                href={selectedProject.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 px-6 py-2.5 rounded-lg transition-all duration-300 hover:border-cyan-400 group"
                            >
                                <Github size={18} className="group-hover:text-cyan-400" />
                                <span>View on GitHub</span>
                            </a>

                            {/* Tech Stack */}
                            <div>
                                <h4 className="text-cyan-400 font-semibold mb-3 text-sm">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-gray-800 border border-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProjectPage;