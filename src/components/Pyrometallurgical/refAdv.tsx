import "../../styles/Eddy/slide3.css";

export const Eddy13 = () => {
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
Examples, Advantages & Limitations</h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex justify-start w-full px-16 pt-32 justify-center ">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
Copper: Fire refining → Electrolytic refining</p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
Iron/Steel: Basic oxygen refining             </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
 Lead: Softening → Refining stages             </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
Nickel: Oxidation → Reduction cycles            </p>
            </div>

            <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
Fast process          </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
