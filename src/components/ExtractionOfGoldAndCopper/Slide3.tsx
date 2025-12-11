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
Gold Extraction Process       </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex justify-start w-full px-16 pt-32 justify-center z-10">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
                Crushing and grinding of ore.
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
               Cyanidation dissolves gold into solution.
              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
                Addition of zinc for displacement.
              </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
                Filtration to separate solid gold.
              </p>
            </div>

            <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
                Melting to obtain pure gold.
              </p>
            </div>

            <div className="advantage-card delay-600">
              <p className="text-gray-300 text-xl italic">
               Zn + 2[Au(CN)■]■ → [Zn(CN)■]²■ + 2Au
              </p>
            </div>

          </div>
           <div className="rounded-lg delay-600 w-[40%]  flex  flex-col  items-center  justify-center p-16 pb-16">
            <img
              src="/assets/s3.png"
              alt="Magnetic Separation"
              className="rounded-lg shadow-lg opacity-90 max-h-[400px]"
            />  
          </div>
        </div>

      </div>
    </section>
  );
};
