import "../../styles/Optical/slide1.css";

export const Optical1 = () => {
  return (
    <section data-slide="4">
      <div className="slide-container flex flex-col h-screen relative">

        {/* Background */}
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header */}
        <div className="px-16 pt-16">
          <h1 className="section-title text-4xl pt-16 text-blue-200 font-bold">
            Introduction to Hydrometallurgical Extraction
          </h1>
        </div>

        {/* Main Points Section */}
        <div className="flex flex-1 items-center">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl ml-24">

            <div className="advantage-card p-6 rounded-lg delay-100 w-[90%]">
              <p className="text-gray-300 text-xl">
                Hydrometallurgy is a method of extracting metals using water-based chemical solutions.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-200 w-[90%]">
              <p className="text-gray-300 text-xl">
                It is part of extractive metallurgy and an alternative to pyrometallurgy, which relies on high temperatures.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-300 w-[90%]">
              <p className="text-gray-300 text-xl">
                Metal-containing minerals are dissolved using selected chemical reagents .
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-400 w-[90%]">
              <p className="text-gray-300 text-xl">
                The dissolved metals are later purified and separated from the solution through processes like solvent extraction and precipitation.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-500 w-[90%]">
              <p className="text-gray-300 text-xl">
                Hydrometallurgy is effective for low-grade and complex ores where metals occur in small amounts or mixed forms.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-600 w-[90%]">
              <p className="text-gray-300 text-xl">
                It consumes less energy, produces fewer emissions, and is considered environmentally friendly.
              </p>
            </div>

          </div>

          <div className="w-1/3 flex justify-center border-8 border-blue-900 -mt-8 ml-32">
            <img
              src="/assets/h2.png"
              alt="Hydrometallurgy"
              className="rounded-lg shadow-lg opacity-90 max-h-[400px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
