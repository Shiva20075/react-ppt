import "../../styles/magneticSep/slide2.css";

export const MagneticSepSlide2 = () => {
  return (
    <section data-slide="2">
      <div className="slide-container">

        {/* Background */}
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* HEADER */}
        <div className="px-16 pt-48 pb-6 z-10">
          <h1 className="section-title text-4xl text-blue-200 font-bold">
           Magnetic Separation – Equipment and Process
          </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex justify-start w-full px-16  pt-32 z-10">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
                Drum and belt magnetic separators are used.
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
                Adjustable magnetic field strength improves separation efficiency.
              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
                Removes ferrous metals like Fe, Ni, and Co from mixed waste streams.
              </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
                Increases purity of the non-magnetic material fraction.
              </p>
            </div>

            <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
                Reduces contamination and prepares material for next-stage processing.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
