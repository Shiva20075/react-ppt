import "../../styles/introduction/slide2.css";

export function IntroSlide3() {
  return (
    <section data-slide="2">
      <div className="slide-container flex flex-col h-screen relative">
        
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header */}
        <div className="px-16 pt-12">
          <h1 className="section-title text-4xl pt-32 pr-64 mb-2 text-blue-200 font-bold">
            Importance of E-Waste Recycling
          </h1>
        </div>

        {/* CONTENT */}
        <div className="flex flex-row w-full px-32 pt-48 gap-10 pl-64">

          {/* LEFT SIDE POINTS */}
          <div className="grid grid-cols-1 gap-6 w-1/2">
            <div className="advantage-card p-2 rounded-lg bg-neutral-900">
              <p className="text-gray-300 text-xl">
                Conserves natural resources{" "}
                <span className="text-orange-600">(gold, copper, aluminum)</span>
              </p>
            </div>

            <div className="advantage-card p-5 rounded-lg bg-neutral-900">
              <p className="text-gray-300 text-2xl">Reduces environmental pollution</p>
            </div>

            <div className="advantage-card p-5 rounded-lg bg-neutral-900">
              <p className="text-gray-300 text-xl">Prevents hazardous chemical leaching</p>
            </div>

            <div className="advantage-card p-5 rounded-lg bg-neutral-900">
              <p className="text-gray-300 text-xl">Saves energy & reduces carbon footprints</p>
            </div>

            <div className="advantage-card p-5 rounded-lg bg-neutral-900">
              <p className="text-gray-300 text-xl">Promotes circular economy principles</p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE — CENTERED VERTICALLY */}
          <div className="w-1/2 flex justify-end relative -mt-96 -ml-32">
            <div className="absolute right-0 top-1/20 -translate-y-1/2">
              <div className="rounded-xl border-4 border-yellow-400">
                <img
                  src="/assets/impRecycle.png"
                  alt="E-Waste Toxins"
                  className="w-96 opacity-90 rounded-lg "
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
