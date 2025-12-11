import "../../styles/magneticSep/slide2.css";

export const MagneticSepSlide2 = () => {
  return (
    <section data-slide="2">
      <div className="slide-container relative h-screen overflow-hidden">

        {/* Background */}
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header */}
        <div className="px-16 pt-40 pb-4 relative z-10">
          <h1 className="section-title text-4xl text-blue-200 font-bold">
           Principle of Gold Extraction
          </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex w-full pl-32 px-16 pt-48 gap-10 items-center justify-center  relative z-10">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-5 max-w-[650px]">

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
               Based on reduction of gold from its compounds.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                Cyanide leaching dissolves gold using NaCN.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                Formation of soluble complex [Au(CN)■]■.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                Zinc is used to precipitate gold.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                Gold is separated and purified by smelting.
              </p>
            </div>
            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
               Reaction: 4Au + 8NaCN + O■ + 2H■O → 4Na[Au(CN)■] + 4NaOH
              </p>
            </div>
          </div>
         





        </div>

      </div>
    </section>
  );
};
