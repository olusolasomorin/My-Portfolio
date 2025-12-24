function ProjectPage() {
    const projectsData = [
        {
            id: 1,
            title: "Library Management System",
            description: "A clean, modern digital tool designed to manage school library system. This allows student check for available books in the school library online.",
            tags: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/olusolasomorin/Library-Management-System"
        },
        {
            id: 2,
            title: "Expense Tracker",
            description: "A clean, modern, and responsive React application designed to help you track your daily expenses. This app allows you to add, edit, delete, and filter expenses, all while visualizing your spending habits with a simple and clear dashboard. All currency is formatted for Nigerian Naira (₦).",
            tags: ["React", "MySQL", "CSS"],
            link: "https://github.com/olusolasomorin/Expense-Tracker-with-React"
        },
        {
            id: 3,
            title: "Foodie Website",
            description: "Foodie is a simple web project designed to showcase food-related content with a clean and minimal interface.",
            tags: ["HTML", "CSS"],
            link: "https://github.com/AjeeAI/html_project1"
        },
        {
            id: 4,
            title: "Contact Saver",
            description: "A program that allows you to store peoples information and automatically saves it to a CSV file.",
            tags: ["Python"],
            link: "https://github.com/olusolasomorin/Contact_Saver"
        }
    ];

    return (
        <div className="md:flex flex-col items-center max-w-7xl mx-auto my-24 px-4">
            <h2 className="text-white text-4xl font-bold font-secondary text-center mb-12">
                Projects
            </h2>
            <div className="grid w-full sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                    <a href={project.link} target="_blank" key={project.id} className="text-white border flex flex-col border-gray-700 bg-white/5 backdrop-blur-xl mx-auto p-8 rounded-xl shadow-2xl hover:scale-105 md:hover:scale-110 transition-all duration-800 hover:border-cyan-400 hover:text-cyan-400">
                        <div className="font-semibold text-xl mb-5">{project.title}</div>
                        <div className="text-gray-400 text-sm grow leading-relaxed line-clamp-3 mb-4">{project.description}</div>
                        <div className="flex gap-2 flex-wrap">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="bg-cyan-400 text-black px-4 py-1 rounded-4xl">
                                    {tag}
                                </span>
                            ))}

                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ProjectPage;