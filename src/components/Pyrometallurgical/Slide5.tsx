import "../../styles/Eddy/slide3.css";

export const Eddy5 = () => {
  return (
    <section data-slide="3">
      <div className="slide-container">

        {/* Background */}
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* HEADER */}
        <div className="px-16 pt-48 pb-6 z-10">
          <h1 className="section-title text-4xl text-blue-200 font-bold">
Pyrometallurgical Refining – Overview       </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex justify-center item-start w-full px-16 pt-32 p pl-32 z-10">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
             Purifies crude metal after smelting
              </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
              Removes impurities like sulfur, oxygen, carbon, and slag
              </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
Produces high-purity metal for commercial use 
             </p>
            </div>

           

            <div className=" delay-500">
              <p className="text-gray-300 text-3xl font-bold pt-4">
Role of Slag in Pyrometallurgical Refining              </p>
            </div>
             <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
Acts as medium to separate impurities              </p>
            </div>
             <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
              Combines with gangue to form fusible slag
              </p>
            </div>
             <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
              Absorbs oxidized impurities
              </p>
            </div>
             <div className="advantage-card delay-500">
              <p className="text-gray-300 text-xl">
              Protects molten metal from atmospheric oxidation
              </p>
            </div>
 
           

          </div>
           <div className="w-1/3 flex justify-center border-8 -mt-8 ml-32 ">
            <img
              src="/assets/po.png"
              alt="E-waste Components"
              className="rounded-lg shadow-lg opacity-90 max-h-[400px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
