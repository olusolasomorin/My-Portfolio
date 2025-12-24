import vid from './bg_video.mp4'
import vid2 from './Bg_Video.webm'
const BackgroundVid = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Element */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        poster="/path-to-your-poster.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/portfolio-bg.webm" type="video/webm" />
        <source src="/videos/portfolio-bg.mp4" type="video/mp4" />
      </video> */}

      <video autoPlay muted loop playsInline className='bg-black fixed w-full h-full top-0 bottom-0 left-0 -z-10 object-cover brightness-[.15]'>
            <source src={vid2} type='video/webm' />
            <source src={vid} type="video/mp4" />
        </video>
    </div>
  );
};

export default BackgroundVid;