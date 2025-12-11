import "../../styles/DensitySep/slide2.css";

export function DensitySep2() {
  return (
    <section data-slide="2">
      <div className="slide-container flex flex-col relative">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header */}
        <div className="px-20 pt-32">
          <h1 className="section-title text-4xl pt-20 mb-2 text-blue-200 font-bold">
          Uses / Applications       </h1>
        </div>

        {/* Points + Right Space */}
        <div className="flex px-24 pt-8 pl-4 pb-10 gap-10 justify-center items-center">

          {/* LEFT: Points (width reduced) */}
          <div className="grid grid-cols-1 gap-6 pt-32 pl-32 w-[55%]">
            <div className="advantage-card p-5 rounded-lg delay-100 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                 Used to extract copper, nickel, cobalt, zinc, and more.
                             </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-200 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                 Recovers metals from low-grade ores.
                               </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-300 bg-neutral-900">
              <p className="text-gray-300 text-xl">
            Recycles metals from electronic waste and industrial scraps. 
                 </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-400 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                 Used in production of aluminum and rare-earth elements.          
                    </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-500 bg-neutral-900">
              <p className="text-gray-300 text-xl">
             Applied in sustainable waste resource recovery.
             </p>
            </div>
 <div className="advantage-card p-5 rounded-lg delay-500 bg-neutral-900">
              <p className="text-gray-300 text-xl">
            Supports circular economy by reclaiming metals.
             </p>
            </div>
          
          </div>

      

        </div>
      </div>
    </section>
  );
}
