import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { Github } from 'lucide-react';
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { SiLangchain, SiGooglecloud, SiFastapi } from "react-icons/si";


function Skills() {
    const skillSections = [
        {
            title: "Frontend",
            skills: [
            { name: "React", icon: FaReact, color: "text-cyan-400" },
            { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-teal-400" },
            ],
        },
        {
            title: "Backend & Database",
            skills: [
            { name: "Firebase", icon: SiFirebase, color: "text-red-600" },
            { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
            { name: "FastAPI", icon: SiFastapi, color: "text-green-500" }
            ],
        },
        {
            title: "Development Tools & Technologies",
            skills: [
            { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
            { name: "GitHub", icon: Github, color: "text-white" },
            { name: "Postman", icon: SiPostman, color: "text-orange-500" },
            { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
            { name: "Vercel", icon: IoLogoVercel, color: "text-black" },
            { name: "LangChain", icon: SiLangchain, color: "text-green-500" },
            { name: "LangGraph", icon: SiLangchain, color: "text-green-500" },
            { name: "Google APIs", icon: SiGooglecloud, color: "text-blue-500" }
            ],
        },
        {
            title: "Languages",
            skills: [
            { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
            { name: "Python", icon: FaPython, color: "text-blue-400" },
            ],
        }
    ];

    return (
        <div className="md:flex flex-col items-center max-w-7xl mx-auto my-30 px-4">
            <h2 className="text-white text-4xl font-bold font-secondary text-center mb-15">
                Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-9">
                {skillSections.map((skill) => (
                    <div key={skill.title} className="text-white border border-gray-700 bg-white/5 backdrop-blur-xl  mx-auto md:max-w-xl w-full p-8 rounded-xl shadow-2xl">
                        <div className="font-semibold text-xl mb-5 text-center text-gray-300">{skill.title}</div>
                        <div className="flex gap-4 flex-wrap justify-center">
                            {skill.skills.map((ski, index) => (
                                <div key={index} className="bg-white/ hover:bg-gray-700 transition-all duration-800 backdrop-blur-xl flex flex-col flex-wrap justify-center text-gray-200 text-[14px] items-center w-full p-4 rounded-2xl">
                                    <div className={ski.color}>
                                        <ski.icon size={30}/>
                                    </div>
                                    <div className="text-center mt-2">
                                        {ski.name}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills;