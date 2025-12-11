import "../../styles/Eddy/slide3.css";

export const Eddy7 = () => {
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
Calcination - Pyrometallurgical Method      </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex justify-center w-full px-16 pt-32 pl-32 z-10">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
              Calcination is the heating of ore in the absence or limited supply of air.
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
It removes volatile impurities such as moisture and organic matter.              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
                Carbonate ores decompose to form metal oxides and release CO■.
              </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
               The ore becomes porous, making further reduction easier
              </p>
            </div>

            <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
             It is commonly used for ores like carbonates and hydrated oxides
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
