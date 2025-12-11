import "../../styles/Eddy/slide3.css";

export const Eddy6 = () => {
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
Advantages & Uses of Pyrometallurgy       </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex justify-center w-full px-16 pt-32 pl-32 z-10">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
               Best suited for high-grade ores.
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
              Applicable to many types of metals.
              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
                Well-developed and widely practiced.
              </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
               Handles complex and mixed ores efficiently.
              </p>
            </div>

            <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
              Produces molten metal directly.
              </p>
            </div>
 <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
               Ideal for large-scale metallurgical operations.
              </p>
            </div>
           

          </div>
        </div>
      </div>
    </section>
  );
};
