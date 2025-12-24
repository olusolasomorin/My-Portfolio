import vid from './vid2.mp4'

function AboutPage() {
    return (
        <div>
            <div className="hidden md:flex flex-col my-20 mt-50 max-w-7xl mx-auto px-4">
                <h2 className="text-white text-center font-secondary font-bold text-4xl">
                    About Me
                </h2>
                <div className='flex justify-center items-center gap-5 mt-10'>
                    <video autoPlay muted playsInline loop src={vid} className='w-1/2 opacity-25 rounded-full'></video>
                    <p className='text-white w-1/2 text-lg text-justify'>
                        I’m <span className='text-cyan-400 font-bold'>Olusola</span>, AI-Focused Software Developer & UI/UX Designer with a background
                        in Mathematics. I build full-stack web applications that integrate Large
                        Language Models (LLMs) to solve complex problems. I blend analytical precision with user-centered design to create intuitive, AI-driven
                        software solutions.
                    </p>
                </div>
            </div>

            {/* mobile view */}
            <div>
                <div className="md:hidden flex-col my-5 max-w-7xl mx-auto px-5">
                    <h2 className="text-white text-center font-secondary font-bold text-4xl">
                        About Me
                    </h2>
                    <div className='flex flex-col justify-center gap-10 mt-20'>
                        <video autoPlay muted playsInline loop src={vid} className='opacity-25 rounded-full'></video>
                        <p className='text-white text-lg text-justify'>
                            I’m <span className='text-cyan-400 font-bold'>Olusola</span>, AI-Focused Software Developer & UI/UX Designer with a background
                            in Mathematics. I build full-stack web applications that integrate Large
                            Language Models (LLMs) to solve complex problems. I blend analytical precision with user-centered design to create intuitive, AI-driven
                            software solutions
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;