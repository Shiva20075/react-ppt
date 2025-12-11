import "../../styles/magneticSep/slide2.css";

export const MagneticSepSlide5 = () => {
  return (
    <section data-slide="2">
      <div className="slide-container relative h-screen overflow-hidden">

        {/* Background */}
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header */}
        <div className="px-16 pt-40 pb-4 relative z-10">
          <h1 className="section-title text-4xl text-blue-200 font-bold">
            Copper Extraction Process
          </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex w-full pl-64 px-16 pt-48 gap-10 items-start relative z-10">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-5 max-w-[650px]">

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                Concentration of ore by froth flotation.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                Roasting of concentrated ore.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                Smelting in a blast furnace.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                Blister copper formation (98% pure).
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                Electrolytic refining for 99.9% purity.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                At cathode: Cu²⁺ + 2e⁻ → Cu
              </p>
            </div>

          </div>

          {/* IMAGE */}
          <div className="flex-none w-[220px] flex items-start justify-center pl-48 pt-8">
            <img
              src="/assets/s5.png"
              alt="Magnetic Separation"
              className="rounded-lg shadow-lg w-[220px] h-[220px] object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
