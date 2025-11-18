import "../../styles/Optical/slide2.css";

export const Optical2 = () => {
  return (
    <section data-slide="4">
      <div className="slide-container">

        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        <div className="px-16 pt-48 pb-6 z-10">
          <h1 className="section-title text-4xl text-blue-200 font-bold">
          Optical Sorting – Equipment & Benefits
          </h1>
        </div>

        <div className="flex justify-start w-full pt-32 px-16 z-10">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
                High-speed conveyor and ejector system.
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
                NIR (Near-Infrared) sensors identify materials.
              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
                Removes impurities and mixed material fractions.
              </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
                Ideal for polymer and plastic-type separation.
              </p>
            </div>

            <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
                Increases recovered material purity significantly.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
