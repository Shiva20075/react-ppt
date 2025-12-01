import "../../styles/introduction/slide6.css";

export function IntroSlide6() {
  return (
    <section data-slide="6">
      <div className="slide-container flex flex-col h-screen">
        {/* Background */}
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header */}
        <div className="px-16 pt-32">
          <h1 className="section-title text-4xl mb-2 text-blue-200 font-bold">
Recycling Process Overview          </h1>
        </div>

        {/* Points Section */}
        <div className="flex justify-left px-32 pt-48 pb-10 ">
          <div className="grid grid-cols-1 gap-6 w-full max-w-5xl">

            <div className="advantage-card p-5 rounded-lg delay-100">
              <p className="text-gray-300 text-xl">
               Collection and transportation
              </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-200">
              <p className="text-gray-300 text-xl">
                Manual dismantling and segregation
              </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-300">
              <p className="text-gray-300 text-xl">
                Size reduction – shredding and crushing
              </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-400">
              <p className="text-gray-300 text-xl">
                Mechanical/physical separation
              </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-500">
              <p className="text-gray-300 text-xl">
                 Recovery of metals and reuse
              </p>
            </div>
 
          </div>
            <div className="w-1/2 flex justify-end relative -mt-64 -ml-32">
            <div className="absolute right-0 top-1/20 -translate-y-1/2">
              <div className="rounded-xl border-4 border-yellow-400">
                <img
                  src="/assets/flow.png"
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
