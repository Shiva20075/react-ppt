import "../../styles/magneticSep/slide1.css";

export const MagneticSepSlide1 = () => {
  return (
    <section data-slide="1">
      <div className="slide-container flex flex-col h-screen relative">

        {/* Background */}
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header */}
        <div className="px-16 pt-16">
          <h1 className="section-title text-4xl pt-16 text-blue-200 font-bold">
            Introduction to Extraction of Gold & Copper
          </h1>
        </div>

        {/* Content Row */}
        <div className="flex flex-1 items-center justify-between px-16">

          {/* Points */}
          <div className="grid grid-cols-1 gap-6 max-w-4xl ml-16">
            <div className="advantage-card p-6 rounded-lg delay-100 w-[90%]">
              <p className="text-gray-300 text-xl">
                Metals are extracted from ores using chemical and physical methods.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-200 w-[90%]">
              <p className="text-gray-300 text-xl">
               Gold is usually found in native or free state.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-300 w-[90%]">
              <p className="text-gray-300 text-xl">
                Copper occurs as sulfide, oxide, or carbonate ores.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-400 w-[90%]">
              <p className="text-gray-300 text-xl">
               Extraction process depends on ore type.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-500 w-[90%]">
              <p className="text-gray-300 text-xl">
                Both involve reduction and purification steps.
              </p>
            </div>
            <div className="advantage-card p-6 rounded-lg delay-500 w-[90%]">
              <p className="text-gray-300 text-xl">
               Reactions are used to separate metal from impurities.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-lg delay-600 w-[40%]  flex  flex-col  items-center  justify-center pb-16">
            <img
              src="/assets/s1.png"
              alt="Magnetic Separation"
              className="rounded-lg shadow-lg opacity-90 max-h-[400px]"
            />
            <img
              src="/assets/s12.png"
              alt="Magnetic Separation"
              className="rounded-lg shadow-lg opacity-90 max-h-[400px]"
            />
            
          </div>
          
          

        </div>

      </div>
    </section>
  );
};
