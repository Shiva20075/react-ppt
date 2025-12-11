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
        <h1 className="section-title pt-32 text-5xl font-bold mb-12">
          Metallurgical Processes
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 pt-20 w-max-5xl px-64">

          <div className="advantage-card p-6 delay-100">
            <h3 className="font-semibold text-xl mb-2">Hydrometallurgy</h3>
            <p>Extraction of metals using aqueous solutions through leaching and precipitation.</p>
          </div>

          <div className="advantage-card p-6 delay-200">
            <h3 className="font-semibold text-xl mb-2">Pyrometallurgy</h3>
            <p>High-temperature processes such as roasting, smelting, and refining.</p>
          </div>

          <div className="advantage-card p-6 delay-300">
            <h3 className="font-semibold text-xl mb-2">Gold Extraction</h3>
            <p>Commonly involves cyanidation, leaching, and electro-winning processes.</p>
          </div>

          <div className="advantage-card p-6 delay-400">
            <h3 className="font-semibold text-xl mb-2">Copper Extraction</h3>
            <p>Includes crushing, froth flotation, smelting, and electrolytic refining.</p>
          </div>

        </div>
      </div>
    </section>
  );
};
