import "../../styles/magneticSep/slide1.css";

export const MagneticSepSlide1 = () => {
  return (
    <section data-slide="1">
      <div className="slide-container flex flex-col h-screen relative">

        {/* Background */}
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header - moved to top-left */}
        <div className="px-16 pt-16">
          <h1 className="section-title text-4xl pt-16 text-blue-200 font-bold">
            Magnetic Separation
          </h1>
        </div>

        {/* Points Section - centered, shifted left */}
        <div className="flex flex-1 items-center">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl ml-24">

            <div className="advantage-card p-6 rounded-lg delay-100 w-[90%]">
              <p className="text-gray-300 text-xl">
                Utilizes magnetic properties of ferrous materials.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-200 w-[90%]">
              <p className="text-gray-300 text-xl">
                Magnetic field attracts iron, nickel, and steel components.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-300 w-[90%]">
              <p className="text-gray-300 text-xl">
                Non-magnetic materials pass through unaffected.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-400 w-[90%]">
              <p className="text-gray-300 text-xl">
                Low-intensity and high-intensity magnetic separators are used.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-500 w-[90%]">
              <p className="text-gray-300 text-xl">
                Permanent magnets or electromagnets used based on requirement.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-600 w-[90%] flex items-center justify-center">
              <p className="text-gray-300 text-xl text-center">
                Insert Image: Magnetic Separator Process Flow
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
