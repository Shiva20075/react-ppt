import "../../styles/introduction/slide1.css";

export function IntroSlide1() {
  return (
    <section data-slide="1">
      <div className="slide-container relative h-screen">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Top header centered */}
        <div className="absolute top-0 pt-20 left-1/2 transform -translate-x-1/2 max-w-5xl text-center">
          <h4 className="title-text text-4xl text-blue-200 leading-snug">
            Recycling and Recovery Based on Separation of E-Waste by Eddy Currents, Magnetic, Optical, and Density-Based Methods
          </h4>
        </div>

        {/* Centered content */}
        <div className="flex items-center justify-center pb-16 relative z-10">
        <h4 className="text-3xl text-white text-center px-6 leading-snug max-w-4xl">
              The National Institute of Engineering E-Waste Recycling Presentation – October 2025
          </h4>
        </div>
        <h4 className="relative z-10 text-cente p-6 text-white text-5xl">Presented by</h4>
        <div>
          <ol className="relative z-10 text-center">
            <li className="list-item text-white text-2xl "> Lepaksha </li>
            <li className="list-item text-white text-2xl"> shiva </li>
            <li className="list-item text-white text-2xl"> likith </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
