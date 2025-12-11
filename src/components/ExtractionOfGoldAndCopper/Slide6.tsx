import "../../styles/magneticSep/slide3.css";

export const MagneticSepSlide6 = () => {
  return (
    <section data-slide="3">
      <div className="slide-container">

        {/* Background */}
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* HEADER */}
        <div className="px-16 pt-48 pl-16 pb-6 z-10">
          <h1 className="section-title text-4xl text-blue-200 font-bold">
Uses of Gold and Copper    </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex justify-start w-full px-16 pt-32  z-10">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
               Gold: jewelry and ornaments.
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
               Gold: electronics due to conductivity.
              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
                Gold: dentistry and medical devices.
              </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
                Copper: electrical wires and motors.
              </p>
            </div>

            <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
               Copper: plumbing and alloys (bronze, brass).
              </p>
            </div>

            <div className="advantage-card delay-600">
              <p className="text-gray-300 text-xl italic">
               Copper: reaction forming alloys improves strength.
              </p>
            </div>

          </div>
          <div className="rounded-lg delay-600 w-[40%]  flex  flex-col  items-center  justify-center pl-32 pb-16">
            <img
              src="/assets/s62.png"
              alt="Magnetic Separation"
              className="rounded-lg shadow-lg opacity-90 max-h-[400px]"
            />
           
            
          </div>
        </div>

      </div>
    </section>
  );
};
