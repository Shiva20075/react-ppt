import "../../styles/DensitySep/slide2.css";

export function DensitySep2() {
  return (
    <section data-slide="2">
      <div className="slide-container flex flex-col relative">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header */}
        <div className="px-16 pt-32">
          <h1 className="section-title text-4xl pt-20 mb-2 text-blue-200 font-bold">
          Density-Based Separation – Process Examples       </h1>
        </div>

        {/* Points + Right Space */}
        <div className="flex px-24 pt-8 pb-10 gap-10 justify-between items-start">

          {/* LEFT: Points (width reduced) */}
          <div className="grid grid-cols-1 gap-6 pt-32 pl-32 w-[55%]">
            <div className="advantage-card p-5 rounded-lg delay-100 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                  Water or air used as fluid medium 
                             </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-200 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                  Heavy fraction: metals and ceramics 
                               </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-300 bg-neutral-900">
              <p className="text-gray-300 text-xl">
            Light fraction: plastics and foams       
                 </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-400 bg-neutral-900">
              <p className="text-gray-300 text-xl">
                  Used post-shredding, pre-metallurgy           
                    </p>
            </div>

            <div className="advantage-card p-5 rounded-lg delay-500 bg-neutral-900">
              <p className="text-gray-300 text-xl">
              Improves recovery efficiency
             </p>
            </div>

          
          </div>

            <div className="w-2/3 flex justify-center border-8 border-blue-900 mt-32  ml-32 ">
            <img
              src="/assets/den3.png"
              alt="E-waste Components"
              className="rounded-lg shadow-lg opacity-90 max-h-[400px] object-cover "
            />
          </div>

        </div>
      </div>
    </section>
  );
}
