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
           Eddy Current Separation – Principle
          </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex justify-start w-full px-16 pt-32 pl-32 z-10">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
                Based on the electromagnetic induction principle.
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
                A rapidly rotating magnetic rotor generates eddy currents in conductive metals.
              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
                Induced currents create opposing magnetic fields causing metal repulsion.
              </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
                Non-conductive materials remain unaffected.
              </p>
            </div>

            <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
                Effective for separating aluminium, copper, and brass from plastics or glass.
              </p>
            </div>

           

          </div>
           <div className="w-1/3 flex justify-center border-8 -mt-8 ml-32 ">
            <img
              src="/assets/eddy.png"
              alt="E-waste Components"
              className="rounded-lg shadow-lg opacity-90 max-h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
