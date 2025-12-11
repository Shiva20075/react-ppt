import "../../styles/Eddy/slide3.css";

export const Eddy2 = () => {
  return (
    <section data-slide="3">
      <div className="slide-container">

        {/* Background */}
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* HEADER */}
        <div className=" pt-48 pb-6 z-10 pr-96">
          <h1 className="section-title text-4xl text-blue-200 pl-64 font-bold">
            Main Pyrometallurgical Processes
          </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex justify-center item-start relative w-full pt-32 px-16 pl-32 z-10">

          {/* LEFT CONTENT */}
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
                Key processes: roasting, smelting, refining.
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
                Roasting converts sulfide ores into oxides.
              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
                Smelting separates metal from impurities using heat.
              </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
                Refining purifies molten metals.
              </p>
            </div>

            

            <div className="advantage-card delay-600">
              <p className="text-gray-300 text-xl">
                Each step improves extraction efficiency.
              </p>
            </div>
          </div>

          {/* IMAGE — now absolute so it does NOT affect layout */}
         

        </div>
      </div>
    </section>
  );
};
