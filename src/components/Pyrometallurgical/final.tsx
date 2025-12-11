import "../../styles/Eddy/slide3.css";

export const Eddy15 = () => {
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
Advantages of Pyrometallurgical Refining        </h1>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex justify-start w-full px-16 pt-32 justify-center ">
          <div className="grid grid-cols-1 gap-6 w-full max-w-4xl">

            <div className="advantage-card delay-100">
              <p className="text-gray-300 text-xl">
High efficiency in impurity removal             </p>
            </div>

            <div className="advantage-card delay-200">
              <p className="text-gray-300 text-xl">
Suitable for large-scale metal production          </p>
            </div>

            <div className="advantage-card delay-300">
              <p className="text-gray-300 text-xl">
Can handle high■melting■point ores and metals         </p>
            </div>

            <div className="advantage-card delay-400">
              <p className="text-gray-300 text-xl">
Faster reaction rates at elevated temperatures          </p>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};
