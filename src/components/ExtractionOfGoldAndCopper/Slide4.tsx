import "../../styles/magneticSep/slide2.css";

export const MagneticSepSlide4 = () => {
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
          Principle of Copper Extraction
          </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex w-full pl-48 px-16 pt-48 gap-10 items-start relative z-10">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-5 max-w-[650px]">

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
               Copper mainly extracted from sulfide ores like CuFeS■.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                Roasting converts sulfides to oxides.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
               Smelting reduces copper oxide to metal.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
               Purification by electrolysis.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
               Impurities settle as anode mud.
              </p>
            </div>
            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
              Reaction: CuO + C → Cu + CO
              </p>
            </div>
          </div>
         <div className="flex-none w-[220px] flex items-start justify-center pl-48 pt-8">
  <img
    src="/assets/s4.png"
    alt="Magnetic Separation"
    className="rounded-lg shadow-lg w-[220px] h-[220px] object-contain"
  />
</div>





        </div>

      </div>
    </section>
  );
};
