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
            Optical Sorting – Working Principle
          </h1>
        </div>

        {/* Main Points Section */}
        <div className="flex flex-1 items-center">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl ml-24">

            <div className="advantage-card p-6 rounded-lg delay-100 w-[90%]">
              <p className="text-gray-300 text-xl">
                Based on detection of optical properties like color, transparency, and reflectivity.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-200 w-[90%]">
              <p className="text-gray-300 text-xl">
                Uses high-speed cameras, lasers, and advanced sensors.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-300 w-[90%]">
              <p className="text-gray-300 text-xl">
                AI algorithms classify materials and activate air jets for separation.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-400 w-[90%]">
              <p className="text-gray-300 text-xl">
                A non-contact and highly precise sorting method.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-500 w-[90%]">
              <p className="text-gray-300 text-xl">
                Effective for sorting plastics, PCBs, and various non-metallic materials.
              </p>
            </div>

            <div className="advantage-card p-6 rounded-lg delay-600 w-[90%] flex items-center justify-center">
              <p className="text-gray-300 text-xl text-center">
                Insert Image: Optical Sorting Machine Schematic
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
