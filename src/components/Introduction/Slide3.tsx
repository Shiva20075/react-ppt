import "../../styles/introduction/slide2.css"; // reuse Slide 2 CSS

export function IntroSlide3() {
  return (
    <section data-slide="2"> {/* reuse slide 2 styles */}
      <div className="slide-container flex flex-col h-screen">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header */}
        <div className="px-16 pt-12">
          <h1 className="section-title text-4xl mb-2 text-blue-200 font-bold">
            Importance of E-Waste Recycling
          </h1>
        </div>

        {/* Points */}
        <div className="flex px-32 pt-32 py-4">
          <div className="grid grid-cols-1 gap-6  ">
            <div className="advantage-card p-5 rounded-lg delay-100 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                Conserves natural resources <span className="text-orange-600">(gold, copper, aluminum)</span>
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-200 bg-neutral-900">
              <p className="text-gray-300 text-2xl">
                Reduces environmental pollution
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-300 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                Prevents hazardous chemical leaching
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-400 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                Saves energy & reduces carbon footprints
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-500 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                Promotes circular economy principles 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
