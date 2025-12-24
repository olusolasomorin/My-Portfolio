import { useState } from "react";

function Header({ scrollToSection, refs, activeSection }) {
    const [isOpen, setIsOpen] = useState(false);

    const getLinkClass = (sectionName) => {
        const baseClass = "cursor-pointer hover:text-cyan-400 transition duration-500";
        const activeClass = "text-cyan-400 font-bold ";
        
        return activeSection === sectionName ? `${baseClass} ${activeClass}` : baseClass;
    };

    return (
        <nav className="bg-black/40 backdrop-blur-xl sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16 py-4">
                    <div className="flex items-center gap-2">
                        <div className="font-logo flex items-center text-cyan-400 w-9 h-9 bg-transparent rounded-full text-xs p-1 border-2 border-t-cyan-500 border-b-cyan-500 border-l-cyan-500 border-r-transparent">
                            ADOS
                        </div>
                        <div className="flex text-white font-bold text-xl items-center">
                            Olusola Somorin
                        </div>
                    </div>

                    {/* Desktop nav */}
                    <ul className="hidden md:flex items-center gap-8 py-1 text-white">
                        <li 
                            onClick={() => scrollToSection(refs.homeRef)} 
                            className={getLinkClass('home')}
                        >
                            Home
                        </li>

                        <li 
                            onClick={() => scrollToSection(refs.aboutRef)} 
                            className={getLinkClass('about')}
                        >
                            About
                        </li>

                        <li 
                            onClick={() => scrollToSection(refs.projectsRef)} 
                            className={getLinkClass('project')}
                        >
                            Project
                        </li>

                        <li 
                            onClick={() => scrollToSection(refs.skillsRef)} 
                            className={getLinkClass('skills')}
                        >
                            Skills
                        </li>

                        <li 
                            onClick={() => scrollToSection(refs.contactRef)} 
                            className={getLinkClass('contact')}
                        >
                            Contact
                        </li>
                    </ul>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white text-2xl font-bold hover:text-cyan-400 cursor-pointer"
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden py-4 border-t bg-black/40 backdrop-blur-xl">
                        <ul className="flex flex-col gap-4 items-center text-white">
                            <li 
                            onClick={() => scrollToSection(refs.homeRef)} 
                            className={getLinkClass('home')}
                            >
                                Home
                            </li>

                            <li 
                                onClick={() => scrollToSection(refs.aboutRef)} 
                                className={getLinkClass('about')}
                            >
                                About
                            </li>

                            <li 
                                onClick={() => scrollToSection(refs.projectsRef)} 
                                className={getLinkClass('project')}
                            >
                                Project
                            </li>

                            <li 
                                onClick={() => scrollToSection(refs.skillsRef)} 
                                className={getLinkClass('skills')}
                            >
                                Skills
                            </li>

                            <li 
                                onClick={() => scrollToSection(refs.contactRef)} 
                                className={getLinkClass('contact')}
                            >
                                Contact
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Header;