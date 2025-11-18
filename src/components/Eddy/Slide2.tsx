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
        <div className="px-16 pt-48 pb-6 z-10">
          <h1 className="section-title text-4xl text-blue-200 font-bold">
            Eddy Current Separation – Industrial Working
          </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex justify-start w-full pt-32 px-16 z-10">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
                Comprises a conveyor belt, rotating magnetic drum, and rotor shell.
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
                Magnets are arranged in alternating polarity to maximize induction.
              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
                Conductive particles are repelled and separated by trajectory difference.
              </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
                Requires optimized speed and magnetic field strength for efficient performance.
              </p>
            </div>

            <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
                Used post-shredding in e-waste processing lines.
              </p>
            </div>

            <div className="advantage-card delay-600 flex items-center justify-center">
              <p className="text-gray-300 text-xl text-center">
                Insert Diagram: Industrial Eddy Current Separator Schematic
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
