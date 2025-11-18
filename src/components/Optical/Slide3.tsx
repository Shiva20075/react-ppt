import "../../styles/Optical/slide3.css";

export const Optical3 = () => {
  return (
    <section data-slide="5">
      <div className="slide-container">

        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        <div className="px-16 pt-48 pb-6 z-10">
          <h1 className="section-title text-4xl text-blue-200 font-bold">
            Optical Sorting – Equipment and Uses
          </h1>
        </div>

        <div className="flex justify-start w-full justify-center pt-32 px-16 z-10">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
                Components include feed conveyor, optical sensors, and air jet ejectors.
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
                Detects materials using NIR, UV, and RGB sensor technologies.
              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
                Supports high throughput—ideal for automated recycling plants.
              </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
                Improves purity levels of plastic and glass material fractions.
              </p>
            </div>

            <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
                Commonly used after mechanical crushing and shredding operations.
              </p>
            </div>

            <div className="advantage-card delay-600 flex items-center justify-center">
              <p className="text-gray-300 text-xl text-center">
                Insert Diagram: NIR Optical Sorting in E-Waste Recycling
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
