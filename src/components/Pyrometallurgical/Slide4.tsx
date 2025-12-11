import "../../styles/Eddy/slide3.css";

export const Eddy4 = () => {
  return (
    <section data-slide="3">
      <div className="slide-container">

        {/* Background */}
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* HEADER */}
        <div className="px-16 pr-32 pt-48 pr-32 pb-6 z-10">
          <h1 className="section-title text-4xl text-blue-200 font-bold">
            Smelting – Principle & Function
          </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex w-full px-16 pt-32 z-10 justify-between items-start">

          {/* LEFT SIDE – TEXT CONTENT */}
          <div className="w-2/3 max-w-3xl grid grid-cols-1 gap-6">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
                Smelting is a high-temperature process used to extract metal from its ore by melting it.
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
                The ore is heated in a furnace along with reducing agents like coke or carbon.
              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
                Impurities in the ore combine with flux (like limestone) to form slag.
              </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
                The molten metal settles at the bottom of the furnace because it is heavier.
              </p>
            </div>

            <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
                Slag floats on top and is removed separately.
              </p>
            </div>

            <div className="advantage-card delay-600">
              <p className="text-gray-300 text-xl">
                Smelting removes oxygen from metal oxides to produce pure metal (reduction process).
              </p>
            </div>

          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="w-1/3 flex justify-center  mr-32 ">
            <img
              src="/assets/sp.png"
              alt="Smelting Furnace"
              className="rounded-lg shadow-lg opacity-90 max-h-[380px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
