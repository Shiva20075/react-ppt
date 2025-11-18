import "../../styles/magneticSep/slide3.css";

export const MagneticSepSlide3 = () => {
  return (
    <section data-slide="3">
      <div className="slide-container">

        {/* Background */}
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* HEADER */}
        <div className="px-16 pt-48 pb-6 z-10">
          <h1 className="section-title text-4xl text-blue-200 font-bold">
Magnetic Separator – Equipment and Applications          </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex justify-start w-full px-16 pt-32 justify-center z-10">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
                Drum, belt, and pulley separators are commonly used types.
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
                Drum separators efficiently handle large bulk flows.
              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
                Overband magnets remove ferrous contaminants from conveyor lines.
              </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
                Used before shredding and after crushing stages.
              </p>
            </div>

            <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
                Improves accuracy of downstream non-ferrous separation.
              </p>
            </div>

            <div className="advantage-card delay-600">
              <p className="text-gray-300 text-xl italic">
                *Insert diagram: Cross-belt magnetic separator setup*
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
