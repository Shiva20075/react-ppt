import "../../styles/DensitySep/slide2.css";

export function DensitySep1() {
  return (
    <section data-slide="2">
      <div className="slide-container flex flex-col relative">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header */}
        <div className="px-16 pt-32">
          <h1 className="section-title text-4xl pt-20 mb-2 text-blue-200 font-bold">
Density-Based Separation – Process Examples       </h1>
        </div>

        {/* Points + Right Space */}
        <div className="flex px-24 pt-8 pb-10 gap-10 justify-between items-start">

          {/* LEFT: Points (width reduced) */}
          <div className="grid grid-cols-1 gap-6 pt-32 w-[55%]">
            <div className="advantage-card p-5 rounded-lg delay-100 bg-neutral-900">
              <p className="text-gray-300 text-xl">
Relies on differences in material density.              </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-200 bg-neutral-900">
              <p className="text-gray-300 text-xl">
Particles are separated in fluids or air medium based on buoyancy or gravity.              </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-300 bg-neutral-900">
              <p className="text-gray-300 text-xl">
Used to separate metals from plastics or foams.              </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-400 bg-neutral-900">
              <p className="text-gray-300 text-xl">
Can be wet (hydro) or dry (air classification) systems.              </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-500 bg-neutral-900">
              <p className="text-gray-300 text-xl">
Insert diagram: Sink-float density separation setup.              </p>
            </div>

          
          </div>

         <div className="w-2/3 flex justify-center border-8 border-blue-900  ml-32 ">
            <img
              src="/assets/den.png"
              alt="E-waste Components"
              className="rounded-lg shadow-lg opacity-90 max-h-[400px] object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
