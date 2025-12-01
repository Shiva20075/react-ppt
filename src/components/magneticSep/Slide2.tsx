import "../../styles/magneticSep/slide2.css";

export const MagneticSepSlide2 = () => {
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
            Magnetic Separation – Equipment and Process
          </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex w-full pl-32 px-16 pt-48 gap-10 items-start relative z-10">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-5 max-w-[650px]">

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                Drum and belt magnetic separators are used.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                Adjustable magnetic field strength improves separation efficiency.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                Removes ferrous metals like Fe, Ni, and Co from mixed waste streams.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                Increases purity of the non-magnetic material fraction.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg">
              <p className="text-gray-300 text-xl">
                Reduces contamination and prepares material for next-stage processing.
              </p>
            </div>
          </div>
         <div className="flex-none w-[220px] flex items-start justify-center ml-12 -mt-12 ">
  <img
    src="/assets/magSep2.png"
    alt="Magnetic Separation"
    className="rounded-lg shadow-lg w-[220px] h-[220px] object-contain"
  />
</div>





        </div>

      </div>
    </section>
  );
};
