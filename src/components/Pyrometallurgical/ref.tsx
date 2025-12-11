import "../../styles/Eddy/slide3.css";

export const Eddy12 = () => {
  return (
    <section data-slide="3">
      <div className="slide-container">

        {/* Background */}
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* HEADER */}
        <div className="px-16 -pr-32 pt-48 pb-6 z-10">
          <h1 className="section-title text-4xl text-blue-200 font-bold">
            Major Refining Processes
          </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex w-full px-16 pt-32 z-10 -mr-32 justify-between items-start">

          {/* LEFT SIDE – TEXT CONTENT */}
          <div className="w-2/3 max-w-3xl grid grid-cols-1 gap-6">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
                Liquation: Pure metal melts away from solid impurities
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
                Oxidation Refining: Air/oxygen oxidizes impurities
              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
                Reduction Refining: Carbon, hydrogen, or CO removes oxides
              </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
                Fire Refining: Used mainly for copper (poling process)
              </p>
            </div>

            <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
                Electrolytic Refining: Final purification using electrolysis
              </p>
            </div>

          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="w-1/3 flex justify-center mr-32">
            <img
              src="/assets/mp.png"
              alt="Refining Processes"
              className="rounded-lg shadow-lg opacity-90 max-h-[420px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
