import "../../styles/introduction/slide2.css"; // reuse Slide 2 CSS

export function IntroSlide4() {
  return (
    <section data-slide="4">
      <div className="slide-container flex flex-col h-screen">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header */}
        <div className="px-16 pt-12">
          <h1 className="section-title text-4xl mb-2 text-blue-200 font-bold">
           Classification and Components of E-Waste
          </h1>
        </div>

        {/* Points */}
        <div className="flex px-24 pt-32 py-4">
          <div className="grid grid-cols-1 gap-6 max-w-5xl" >
            <div className="advantage-card p-5 rounded-lg delay-100 bg-neutral-900 ">
              <p className="text-gray-300 text-xl ">
                Major sources: consumer electronics, IT equipment, appliances.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-200 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                Components: metals, plastics, glass, ceramics, and composites.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-300 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                Metals are divided into ferrous and non-ferrous categories.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-400 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                Complex mixtures make direct recycling difficult.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-500 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                Mechanical, magnetic, and density-based separations are commonly used.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-600 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                Accurate sorting improves recovery efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
