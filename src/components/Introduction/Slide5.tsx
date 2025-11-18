import "../../styles/introduction/slide5.css";

export function IntroSlide5() {
  return (
    <section data-slide="5">
      <div className="slide-container flex flex-col h-screen">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header */}
        <div className="px-16 pt-32">
          <h1 className="section-title text-4xl mb-2 text-blue-200 font-bold">
            Need for Separation Techniques
          </h1>
        </div>

        {/* Points */}
        <div className="flex justify-center px-32 pt-32 py-4 ">
          <div className="grid grid-cols-1 gap-6 w-full max-w-5xl">
            <div className="advantage-card p-5 rounded-lg delay-100">
              <p className="text-gray-300 text-xl">
                Mixed composition requires advanced separation technologies.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-200">
              <p className="text-gray-300 text-xl">
                Traditional manual dismantling is time-consuming and inefficient.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-300">
              <p className="text-gray-300 text-xl">
                Physical separation increases purity before metallurgical recovery.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-400">
              <p className="text-gray-300 text-xl">
                Reduces chemical processing load and environmental impact.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-500">
              <p className="text-gray-300 text-xl">
                Improves economic feasibility of recycling plants.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-600">
              <p className="text-gray-300 text-xl">
                Essential for recovering critical and precious metals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
