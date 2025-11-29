import "../../styles/introduction/slide2.css";

export function IntroSlide2() {
  return (
    <section data-slide="2">
      <div className="slide-container flex flex-col relative">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header */}
        <div className="px-16 pt-32">
          <h1 className="section-title text-4xl mb-2 text-blue-300 font-bold">
            <span className="text-white text-"> Introduction </span> To E-Waste
          </h1>
        </div>

        {/* Points + Image */}
        <div className="flex px-24 pt-16 pb-10 gap-10 justify-between items-start">

          {/* LEFT: Points – SAME LOOK as your original */}
          <div className="grid grid-cols-1 gap-6 pt-32 pl-8 w-[60%] ">
            <div className="advantage-card p-5 rounded-lg delay-100 bg-neutral-900">
              <p className="text-gray-300, text-xl">
                E-waste refers to discarded electrical and electronic equipment (EEE).
              </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-200 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                Rapid urbanization and tech turnover increase e-waste generation.
              </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-300 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                Contains valuable metals like
                <span className="text-orange-700"> copper</span>,
                <span className="text-yellow-500"> gold</span>, silver, palladium.
              </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-400 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                Also includes hazardous materials such as lead, mercury, cadmium.
              </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-500 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                Recycling and recovery minimize environmental hazards and resource loss.
              </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-600 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                Separation methods are crucial for efficient material recovery.
              </p>
            </div>
          </div>


          {/* RIGHT: IMAGES */}
          <div className="flex flex-row gap-5 pt-32">

            {/* First Image */}
            <div className=" rounded-xl ">
              <img
                src="/assets/toxins.png"
                alt="E-Waste Illustration"
                className="w-96 opacity-90 pt-32 px- rounded-lg"
              />
            </div>

            {/* Second Image */}
            <div className="   rounded-xl border-4 border-yellow-400">
              <img
                src="/assets/Ewaste1.png"
                alt="E-Waste Toxins"
                className="w-96 opacity-90 rounded-lg"
              />
            </div>

          </div>



        </div>
      </div>
    </section>
  );
}
