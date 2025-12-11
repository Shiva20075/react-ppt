import "../../styles/Eddy/slide3.css";

export const Eddy11 = () => {
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
Results      </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex justify-start w-full px-16 pt-32 justify-center ">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">
            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
Smelting is used for metals like iron, copper, lead, zinc, and nickel.             </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
Temperature needed is very high (1000°C–2000°C depending on metal).           </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
Final product: molten metal, which is then cast into ingots or used for further refining.          </p>
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
};
