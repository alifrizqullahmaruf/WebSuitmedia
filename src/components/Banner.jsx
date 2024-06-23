import { useEffect, useRef } from 'react';
import banner from '../assets/image/image_banner.png';


const Banner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const banner = bannerRef.current;
        const scrollPos = window.scrollY;
        banner.style.transform = `translateY(${scrollPos * 0.4}px)`; // Adjust the parallax effect here
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden text-white h-1/3">
      <img
        src={banner}
        alt=""
        className="object-cover w-full h-1/4"
        ref={bannerRef}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center">
          <h1 className="font-bold text-7xl" >
            Ideas
            <span className="block text-2xl">Where all our great things begin</span>
          </h1>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-8 pointer-events-none bg-gradient-to-t from-transparent to-black"></div>
    </div>
  );
};

export default Banner;
