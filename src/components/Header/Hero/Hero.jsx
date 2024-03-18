import './Hero.css';
const Hero = () => {
    return (
        <div className="container mx-auto my-12">
            <div className="carousel w-full rounded-lg min-h-[800px]">
                {/* slide 1 starts here*/}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="slideImage1 h-full w-full">

                    </div>
                    <div>
                        <div className="absolute transform left-0 px-4 py-3 bottom-0 bg-black w-full">
                            <h2 className="text-5xl text-white">Recent Projects : Title</h2>
                            <p className="text-lg text-white">short details : recent Projects</p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                {/* slide 2 starts here*/}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="slideImage2 h-full w-full">

                    </div>
                    <div>
                        <div className="absolute transform left-0 px-4 py-3 bottom-0 bg-black w-full">
                            <h2 className="text-5xl text-white">Recent Projects : Title</h2>
                            <p className="text-lg text-white">short details : recent Projects</p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                {/* slide 3 starts here*/}
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="slideImage3 h-full w-full">

                    </div>
                    <div>
                        <div className="absolute transform left-0 px-4 py-3 bottom-0 bg-black w-full">
                            <h2 className="text-5xl text-white">Recent Projects : Title</h2>
                            <p className="text-lg text-white">short details : recent Projects</p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                {/* slide 4 starts here*/}
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="slideImage4 h-full w-full">

                    </div>
                    <div>
                        <div className="absolute transform left-0 px-4 py-3 bottom-0 bg-black w-full">
                            <h2 className="text-5xl text-white">Recent Projects : Title</h2>
                            <p className="text-lg text-white">short details : recent Projects</p>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;