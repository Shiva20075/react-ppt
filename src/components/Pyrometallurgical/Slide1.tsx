import "../../styles/Eddy/slide3.css";

export const Eddy1 = () => {
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
            Introduction to Pyrometallurgical Methods
          </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex w-full px-16 pt-32 z-10 justify-center items-center">

          {/* LEFT SIDE – TEXT */}
          <div className="w-1/2 max-w-3xl grid grid-cols-1 gap-6">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
                Pyrometallurgy involves the extraction of metals using high temperatures.
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
                Heat induces physical and chemical changes in ores.
              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
                Used for metals like iron, copper, zinc, and lead.
              </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
                Includes roasting, smelting, and refining.
              </p>
            </div>

            <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
                Widely applied in large-scale metal industries.
              </p>
            </div>

            <div className="advantage-card delay-600">
              <p className="text-gray-300 text-xl">
                Forms the backbone of traditional metallurgical extraction.
              </p>
            </div>

          </div>

         

        </div>
      </div>
    </section>
  );
};
