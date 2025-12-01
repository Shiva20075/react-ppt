import "../../styles/DensitySep/slide3.css";

export function DensitySep3() {
  return (
    <section data-slide="3">
      <div className="slide-container">

        {/* Background */}
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header */}
        <div className="px-16 pt-12 relative z-10">
          <h1 className="section-title text-4xl mb-2 text-blue-200 pt-32 font-bold">
            Density-Based Methods – Equipment
          </h1>
        </div>

        {/* Points + Image */}
        <div className="flex px-24 pt-12 pb-10 gap-10 justify-between pt-48 pr-64 pl-48 items-start relative z-10">

          {/* LEFT POINTS */}
          <div className="grid grid-cols-1 gap-6 w-[60%]">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
                Hydrocyclones use centrifugal force for density segregation.
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
                Shaking tables separate via stratification under vibration.
              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
                Air classifiers sort particles in an upward air stream.
              </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
                Flotation tanks assist in recovering light polymers or metals.
              </p>
            </div>

            <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
                Optimized for particle size and density range in e-waste.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-center justify-center w-[30%] -mt-20 ml-32">
            <img
              src="/assets/den2.png"
              alt="Hydrocyclone and Air Classifier"
              className="rounded-lg shadow-xl w-128 h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
