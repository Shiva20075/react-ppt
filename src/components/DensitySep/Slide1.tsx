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
Advantages    </h1>
        </div>

        {/* Points + Right Space */}
        <div className="flex px-24 pt-8 pb-10 gap-10 justify-center items-center">

          {/* LEFT: Points (width reduced) */}
          <div className="grid grid-cols-1 gap-6 pt-32 w-[55%]">
            <div className="advantage-card p-5 rounded-lg delay-100 bg-neutral-900">
              <p className="text-gray-300 text-xl">
Lower energy consumption than smelting.             </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-200 bg-neutral-900">
              <p className="text-gray-300 text-xl">
Processes low-grade and complex ores..              </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-300 bg-neutral-900">
              <p className="text-gray-300 text-xl">
Provides high purity through selective separation.             </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-400 bg-neutral-900">
              <p className="text-gray-300 text-xl">
Environmentally cleaner process with fewer emissions.             </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-500 bg-neutral-900">
              <p className="text-gray-300 text-xl">
Useful in recycling electronic waste and catalysts.            </p>
            </div>
 <div className="advantage-card p-5 rounded-lg delay-500 bg-neutral-900">
              <p className="text-gray-300 text-xl">
Effective for metals not suitable for pyrometallurgy.           </p>
            </div>

          
          </div>

       
        </div>
      </div>
    </section>
  );
}
