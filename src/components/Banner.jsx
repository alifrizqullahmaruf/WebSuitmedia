const Banner = () => {
  return (
    <div className="w-full h-1/3 text-white flex flex-col relative">
      <img src="./src/assets/image/image_banner.png" alt="" className="object-fill w-full h-2/4"/>
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-5xl text-center">
          Ideas
          <span className="text-xl block">Where all our great things begin</span>
        </h1>
      </div>
    </div>
  )
}

export default Banner
