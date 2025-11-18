import "../../styles/introduction/slide7.css";

export const IntroSlide7 = () => {
  return (
    <section data-slide="7">
      <div className="slide-container px-16 py-20">
        <div className="background-overlay"></div>

        {/* Tech circles */}
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Title */}
        <h1 className="section-title text-5xl font-bold mb-12">
          Mechanical Separation Techniques
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 pt-20 w-max-5xl px-64">
          <div className="advantage-card p-6 delay-100">
            <h3 className="font-semibold text-xl mb-2">Magnetic Separation</h3>
            <p>Uses magnetic properties to separate ferromagnetic and non-magnetic parts.</p>
          </div>

          <div className="advantage-card p-6 delay-200">
            <h3 className="font-semibold text-xl mb-2">Eddy Current Method</h3>
            <p>Separates conductive metals using induced currents.</p>
          </div>

          <div className="advantage-card p-6 delay-300">
            <h3 className="font-semibold text-xl mb-2">Density-Based Sorting</h3>
            <p>Uses differences in material density for effective separation.</p>
          </div>

          <div className="advantage-card p-6 delay-400">
            <h3 className="font-semibold text-xl mb-2">Optical Sorting</h3>
            <p>Color / reflectivity-based material recognition and separation.</p>
          </div>

          <div className="advantage-card p-6 delay-500">
            <h3 className="font-semibold text-xl mb-2">Eco-Friendly</h3>
            <p>Uses non-chemical methods, safe for environment & operators.</p>
          </div>

          <div className="advantage-card p-6 delay-600">
            <h3 className="font-semibold text-xl mb-2">Cost-Effective & Scalable</h3>
            <p>Suitable for large-scale preprocessing before metallurgical recovery.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
