import dp2 from '../assets/dp3.PNG';

import { Mail } from 'lucide-react';
import { Download } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";


function HomePage() {
    const socialMedia = [
        {
            id: 'linkedin',
            Icon: Linkedin,
            url: 'https://www.linkedin.com/in/olusola-somorin-b1212b230/',
            color: 'bg-[#0072b5] font-extrabold text-white'
        },
        {
            id: 'github',
            Icon: FaGithub,
            url: 'https://github.com/olusolasomorin',
            color: 'bg-black font-extrabold text-white'
        },
        {
            id: 'twitter',
            Icon: FaXTwitter,
            url: 'https://x.com/only1_sola',
            color: 'bg-black text-white font-bold'
        },
        {
            id: 'whatsapp',
            Icon: FaWhatsapp,
            url: 'https://wa.me/+2349130411877',
            color: 'bg-green-700 text-white font-extrabold'
        }
    ]

    // const cv = "/Olusola_CV.pdf"

    return (
        <div>
            <div className='hidden md:flex max-w-7xl mx-auto justify-between items-center px-4 my-25'>
                <div className='py-10 flex flex-col w-1/2'>
                    <div className='flex justify-center'>
                        <img src={dp2} alt="Profile image" className='rounded-full w-60 h-60 '/>
                    </div>

                    <h1 className='text-white pt-4 text-5xl text-center font-bold font-primary'>
                        Olusola Somorin
                    </h1>

                    <p className='text-center pt-3 text-gray-300 font-medium text-xl'>
                        AI Developer | Full-stack Developer
                    </p>

                    <p className='flex gap-2 justify-center pt-8 text-gray-300'>
                        <span className='text-cyan-400'> <Mail/> </span>
                        somorinolusola1@gmail.com
                    </p>

                    
                    <a 
                        href="/Olusola_CV.pdf"
                        // download="Olusola_Somorin_CV.pdf"
                        target="_blank"
                        className='flex gap-2 justify-center bg-cyan-400 py-5 text-xl font-semibold rounded-xl mx-5 mt-10 hover:bg-cyan-300 cursor-pointer hover:scale-105 transition-all duration-1000'
                    >
                        <Download/>
                        Download Resume
                    </a>
                    

                    <button className='text-cyan-400 py-5 mx-5 mt-4 text-xl font-semibold border-2 border-cyan-400 rounded-xl hover:bg-cyan-300 hover:text-black cursor-pointer hover:border-0 hover:scale-105 transition-all duration-1000'>
                        Preview Resume
                    </button>
                </div>

                <div className='flex flex-col w-1/2'>
                    <div className="ml-4">
                        <div className="px-5 rounded-lg shadow-lg">

                            <h2 className="text-7xl text-white font-primary font-bold mb-5">
                                Hi, I'm <span className="text-cyan-400">Olusola</span>
                            </h2>
            
                            <p className="text-[18px]">
                                <span className="text-blue-400">class</span> 
                                <span className="text-[#07c777] pl-2">OlusolaSomorin</span>
                                <span className="text-white">:</span>
                            </p>

                            <p className="text-[18px] pl-10">
                                <span className="text-blue-400">def</span> 
                                <span className="text-[#e2db79] pl-2">__init__</span>
                                <span className="text-[#FFD700]">(</span>
                                <span className="text-[#73aae9]">self</span>
                                <span className="text-white pr-2">,</span>
                                <span className="text-[#73aae9]">stack</span>
                                <span className="text-white pr-2">,</span>
                                <span className="text-[#73aae9]">interest</span>
                                <span className="text-[#FFD700]">)</span>
                                <span className="text-white">:</span>
                            </p>

                            <p className="text-[18px] text-[#73aae9] pl-20">
                                self
                                <span className="text-white">.</span>
                                stack 
                                <span className="text-white"> = </span>
                                stack
                            </p>

                            <p className="text-[18px] text-[#73aae9] pl-20">
                                self
                                <span className="text-white">.</span>
                                interest 
                                <span className="text-white"> = </span>
                                interest
                            </p>

                            <p className="h-6"></p>

                            <p className="text-[18px] text-blue-400 pl-10">
                                <span className="text-blue-400">def</span> 
                                <span className="text-[#e2db79] pl-2">display_stack</span>
                                <span className="text-[#FFD700]">(</span>
                                <span className="text-[#73aae9]">self</span>
                                <span className="text-[#FFD700]">)</span>
                                <span className="text-white">:</span>
                            </p>

                            <p className="text-[18px] text-[#e2db79] pl-20">
                                print
                                <span className="text-[#FFD700]">(</span>
                                <span className="text-orange-400">f</span>
                                <span className="text-[#bd856e]">"I specialize in </span>
                                <span className="text-[#8400b8]">{"{"}</span>
                                <span className="text-[#73aae9]">self</span>
                                <span className="text-white">.</span>
                                <span className="text-[#73aae9]">stack</span>
                                <span className="text-[#8400b8]">{"}"}</span>
                                <span className="text-[#bd856e]">"</span>
                                <span className="text-[#FFD700]">)</span>
                            </p>

                            <p className="h-6"></p>

                            <p className="text-[18px] text-blue-400 pl-10">
                                <span className="text-blue-400">def</span> 
                                <span className="text-[#e2db79] pl-2">display_interest</span>
                                <span className="text-[#FFD700]">(</span>
                                <span className="text-[#73aae9]">self</span>
                                <span className="text-[#FFD700]">)</span>
                                <span className="text-white">:</span>
                            </p>

                            <p className="text-[18px] text-[#e2db79] pl-20">
                                print
                                <span className="text-[#FFD700]">(</span>
                                <span className="text-orange-400">f</span>
                                <span className="text-[#bd856e]">"I have interest in </span>
                                <span className="text-[#8400b8]">{"{"}</span>
                                <span className="text-[#73aae9]">self</span>
                                <span className="text-white">.</span>
                                <span className="text-[#73aae9]">interest</span>
                                <span className="text-[#8400b8]">{"}"}</span>
                                <span className="text-[#bd856e]">"</span>
                                <span className="text-[#FFD700]">)</span>
                            </p>

                            <p className="h-6"></p>

                            <p className="text-[18px]">
                                <span className="text-[#73aae9]">olusola</span>
                                <span className="text-white"> = </span>
                                <span className="text-[#07c777]">OlusolaSomorin</span>
                                <span className="text-[#FFD700]">(</span>
                                <span className="text-white">[</span>
                                <span className="text-[#bd856e]">"Full stack"</span>
                                <span className="text-white">, </span>
                                <span className="text-[#bd856e]">"Web development"</span>
                                <span className="text-white">, </span>
                                <span className="text-[#bd856e]">"AI Development"</span>
                                <span className="text-white">]</span>
                                <span className="text-white">, </span>
                                <span className="text-white">[</span>
                                <span className="text-[#bd856e]">"AI"</span>
                                <span className="text-white">, </span>
                                <span className="text-[#bd856e]">"Tech"</span>
                                <span className="text-white">, </span>
                                <span className="text-[#bd856e]">"Education"</span>
                                <span className="text-white">, </span>
                                <span className="text-[#bd856e]">"Problem Solving"</span>
                                <span className="text-white">]</span>
                                <span className="text-[#FFD700]">)</span>
                            </p>

                            <p className="h-6"></p>

                            <p className="text-[18px]">
                                <span className="text-[#73aae9]">olusola</span>
                                <span className="text-white">.</span>
                                <span className="text-[#e2db79]">display_stack</span>
                                <span className="text-[#FFD700]">()</span>
                            </p>

                            <p className="text-[18px]">
                                <span className="text-[#73aae9]">olusola</span>
                                <span className="text-white">.</span>
                                <span className="text-[#e2db79]">display_interest</span>
                                <span className="text-[#FFD700]">()</span>
                            </p>

                        </div>

                        <div className='flex gap-4 my-6 ml-4'>
                            {socialMedia.map(({ id, Icon, url, color }) =>(
                                <a 
                                    key={id} 
                                    href={url}
                                    target='_blank'
                                    aria-label={`Link to ${id}`}
                                    // className={color}
                                >
                                    <Icon 
                                        size={45}
                                        className={`text-black ${color} px-2 py-2 rounded-lg hover:scale-110 transition-all duration-700`}
                                    />
                                </a>
                            ))}
                        </div>

                        
                    </div>
                </div>
            </div>

            {/* mobile view */}

            <div className='md:hidden flex flex-col mx-auto justify-center px-4 my-20'>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <img src={dp2} alt="Profile image" className='rounded-full w-50 h-50 '/>
                    </div>

                    <h1 className='text-white pt-4 text-3xl text-center font-bold font-primary'>
                        Olusola Somorin
                    </h1>

                    <p className='text-center pt-3 text-gray-300 font-medium text-lg'>
                        AI Developer | Full-stack Developer
                    </p>

                    <p className='flex gap-2 justify-center pt-8 text-gray-300'>
                        <span className='text-cyan-400'> <Mail/> </span>
                        somorinolusola1@gmail.com
                    </p>

                    <button className='flex gap-2 justify-center bg-cyan-400 py-5 text-xl font-semibold rounded-xl mx-9 mt-10 hover:bg-cyan-300 cursor-pointer hover:scale-105 transition-all duration-1000'>
                        <span> <Download/> </span>
                        Download Resume
                    </button>

                    <div className='flex justify-center gap-4 my-8'>
                        {socialMedia.map(({ id, Icon, url, color }) =>(
                            <a 
                                key={id} 
                                href={url}
                                target='_blank'
                                aria-label={`Link to ${id}`}
                            >
                                <Icon 
                                    size={45}
                                    className={`text-black ${color} px-2 py-2 rounded-lg hover:scale-110 transition-all duration-700`}
                                />
                            </a>
                        ))}
                    </div>

                </div>

                <div className='flex flex-col'>
                    <div className="ml-4">
                        <div className="px-5 rounded-lg shadow-lg">

                            <h2 className="text-4xl text-center text-white font-primary font-bold my-10">
                                Hi, I'm <span className="text-cyan-400">Olusola</span>
                            </h2>
            
                            <p className="text-[18px]">
                                <span className="text-blue-400">class</span> 
                                <span className="text-[#07c777] pl-2">OlusolaSomorin</span>
                                <span className="text-white">:</span>
                            </p>

                            <p className="text-[18px] pl-10">
                                <span className="text-blue-400">def</span> 
                                <span className="text-[#e2db79] pl-2">__init__</span>
                                <span className="text-[#FFD700]">(</span>
                                <span className="text-[#73aae9]">self</span>
                                <span className="text-white pr-2">,</span>
                                <span className="text-[#73aae9]">stack</span>
                                <span className="text-white pr-2">,</span>
                                <span className="text-[#73aae9]">interest</span>
                                <span className="text-[#FFD700]">)</span>
                                <span className="text-white">:</span>
                            </p>

                            <p className="text-[18px] text-[#73aae9] pl-20">
                                self
                                <span className="text-white">.</span>
                                stack 
                                <span className="text-white"> = </span>
                                stack
                            </p>

                            <p className="text-[18px] text-[#73aae9] pl-20">
                                self
                                <span className="text-white">.</span>
                                interest 
                                <span className="text-white"> = </span>
                                interest
                            </p>

                            <p className="h-6"></p>

                            <p className="text-[18px] text-blue-400 pl-10">
                                <span className="text-blue-400">def</span> 
                                <span className="text-[#e2db79] pl-2">display_stack</span>
                                <span className="text-[#FFD700]">(</span>
                                <span className="text-[#73aae9]">self</span>
                                <span className="text-[#FFD700]">)</span>
                                <span className="text-white">:</span>
                            </p>

                            <p className="text-[18px] text-[#e2db79] pl-20">
                                print
                                <span className="text-[#FFD700]">(</span>
                                <span className="text-orange-400">f</span>
                                <span className="text-[#bd856e]">"I specialize in </span>
                                <span className="text-[#8400b8]">{"{"}</span>
                                <span className="text-[#73aae9]">self</span>
                                <span className="text-white">.</span>
                                <span className="text-[#73aae9]">stack</span>
                                <span className="text-[#8400b8]">{"}"}</span>
                                <span className="text-[#bd856e]">"</span>
                                <span className="text-[#FFD700]">)</span>
                            </p>

                            <p className="h-6"></p>

                            <p className="text-[18px] text-blue-400 pl-10">
                                <span className="text-blue-400">def</span> 
                                <span className="text-[#e2db79] pl-2">display_interest</span>
                                <span className="text-[#FFD700]">(</span>
                                <span className="text-[#73aae9]">self</span>
                                <span className="text-[#FFD700]">)</span>
                                <span className="text-white">:</span>
                            </p>

                            <p className="text-[18px] text-[#e2db79] pl-20">
                                print
                                <span className="text-[#FFD700]">(</span>
                                <span className="text-orange-400">f</span>
                                <span className="text-[#bd856e]">"I have interest in </span>
                                <span className="text-[#8400b8]">{"{"}</span>
                                <span className="text-[#73aae9]">self</span>
                                <span className="text-white">.</span>
                                <span className="text-[#73aae9]">interest</span>
                                <span className="text-[#8400b8]">{"}"}</span>
                                <span className="text-[#bd856e]">"</span>
                                <span className="text-[#FFD700]">)</span>
                            </p>

                            <p className="h-6"></p>

                            <p className="text-[18px]">
                                <span className="text-[#73aae9]">olusola</span>
                                <span className="text-white"> = </span>
                                <span className="text-[#07c777]">OlusolaSomorin</span>
                                <span className="text-[#FFD700]">(</span>
                                <span className="text-white">[</span>
                                <span className="text-[#bd856e]">"Full stack"</span>
                                <span className="text-white">, </span>
                                <span className="text-[#bd856e]">"Web development"</span>
                                <span className="text-white">, </span>
                                <span className="text-[#bd856e]">"AI Development"</span>
                                <span className="text-white">]</span>
                                <span className="text-white">, </span>
                                <span className="text-white">[</span>
                                <span className="text-[#bd856e]">"AI"</span>
                                <span className="text-white">, </span>
                                <span className="text-[#bd856e]">"Tech"</span>
                                <span className="text-white">, </span>
                                <span className="text-[#bd856e]">"Education"</span>
                                <span className="text-white">, </span>
                                <span className="text-[#bd856e]">"Problem Solving"</span>
                                <span className="text-white">]</span>
                                <span className="text-[#FFD700]">)</span>
                            </p>

                            <p className="h-6"></p>

                            <p className="text-[18px]">
                                <span className="text-[#73aae9]">olusola</span>
                                <span className="text-white">.</span>
                                <span className="text-[#e2db79]">display_stack</span>
                                <span className="text-[#FFD700]">()</span>
                            </p>

                            <p className="text-[18px]">
                                <span className="text-[#73aae9]">olusola</span>
                                <span className="text-white">.</span>
                                <span className="text-[#e2db79]">display_interest</span>
                                <span className="text-[#FFD700]">()</span>
                            </p>

                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;