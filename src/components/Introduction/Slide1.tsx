import "../../styles/introduction/slide1.css";

export function IntroSlide1() {
  return (
    <section data-slide="1">
      <div className="slide-container relative h-screen">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Top header centered */}
        <div className="absolute top-0 pt-48 left-1/2 transform -translate-x-1/2 max-w-8xl  text-center">
          <h4 className="title-text text-4xl text-blue-400 leading-snug">
           Metal Recovery from E-Waste Using Pyrometallurgy, Hydrometallurgy, and Gold–Copper Extraction Methods
          </h4>
        </div>

        {/* Centered content */}
        <div className="flex items-center justify-center pb-16 relative pt-48 z-10 ">
        <h4 className="text-3xl text-white text-center px-6 leading-snug max-w-5xl">
              The National Institute of Engineering  <span className="text-blue-400"></span>
          </h4>
        </div>
        <h4 className="relative z-10 text-center p-6 text-white text-5xl"><span className="text-blue-400">Presented By :</span></h4>
        <div>
          <ol className="relative z-10 text-center">
            <li className="list-item text-white text-2xl p-1 "> <span className="text-blue-400">LEPAKSHA RAJU</span> - Pyrometallurgical Methods</li>
            <li className="list-item text-white text-2xl p-1"> <span className="text-blue-400">LIKITH KOTHWAL</span> - Gold Extraction & Copper Extraction </li>
             <li className="list-item text-white text-2xl p-1"> <span className="text-blue-400">SHIVA CHARAN</span> - Hydrometallurgical Extraction</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
