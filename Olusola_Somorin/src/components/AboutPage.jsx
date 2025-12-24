import vid from './vid2.mp4'

function AboutPage() {
    return (
        <div>
            <div className="hidden md:flex flex-col my-20 mt-50 max-w-7xl mx-auto px-4">
                <h2 className="text-white text-center font-secondary font-bold text-4xl">
                    About Me
                </h2>
                <div className='flex justify-center items-center gap-10 mt-30'>
                    <video autoPlay muted playsInline loop src={vid} className='w-1/2 opacity-25 rounded-full'></video>
                    <p className='text-white w-1/2 text-lg text-justify'>
                        Hi, I’m <span className='text-cyan-400 font-bold'>Olusola</span> a Mathematics and Education graduate from Olabisi Onabanjo University, now building a career at the intersection of software development and artificial intelligence. My mission is to create simple intelligent systems that solve real problems and make people’s lives easier.
                        I’m passionate about turning ideas into working products, exploring how AI can enhance productivity, learning, decision-making, and everyday experiences. With a strong analytical foundation from mathematics and a developer’s mindset, I approach every project with curiosity, clarity, and the desire to build something meaningful. I love challenges that push my creativity and technical depth, and I’m constantly improving my skills to stay ahead in the fast-growing world of AI-driven development.
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
                            Hi, I’m <span className='text-cyan-400 font-bold'>Olusola</span> a Mathematics and Education graduate from Olabisi Onabanjo University, now building a career at the intersection of software development and artificial intelligence. My mission is to create simple intelligent systems that solve real problems and make people’s lives easier.
                            I’m passionate about turning ideas into working products, exploring how AI can enhance productivity, learning, decision-making, and everyday experiences. With a strong analytical foundation from mathematics and a developer’s mindset, I approach every project with curiosity, clarity, and the desire to build something meaningful. I love challenges that push my creativity and technical depth, and I’m constantly improving my skills to stay ahead in the fast-growing world of AI-driven development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;