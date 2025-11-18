import "./App.css";
import { RevealProvider } from "./providers/Reveal";

import { IntroSlide1 } from "./components/Introduction/Slide1";
import { IntroSlide2 } from "./components/Introduction/Slide2";
import { IntroSlide3 } from "./components/Introduction/Slide3";
import { IntroSlide4 } from "./components/Introduction/Slide4";
import { IntroSlide5 } from "./components/Introduction/Slide5";
import { IntroSlide6 } from "./components/Introduction/Slide6";
import { IntroSlide7 } from "./components/Introduction/Slide7";

// Magnetic Separator (OLED naming kept same pattern)
import { MagneticSepSlide1 } from "./components/magneticSep/Slide1";
import { MagneticSepSlide2} from "./components/magneticSep/Slide2";
import { MagneticSepSlide3 } from "./components/magneticSep/Slide3";


// Eddy Current Separator Slides
import { Eddy1 } from "./components/Eddy/Slide1";
import { Eddy2 } from "./components/Eddy/Slide2";
import { Eddy3 } from "./components/Eddy/Slide3";

// Optical Sorter Slides

import { Optical1 } from "./components/Optical/Slide1";
import { Optical2 } from "./components/Optical/Slide2";
import { Optical3 } from "./components/Optical/Slide3";

// Desity Separation Slides
import { DensitySep1 } from "./components/DensitySep/Slide1";
import { DensitySep2 } from "./components/DensitySep/Slide2";
import { DensitySep3 } from "./components/DensitySep/Slide3";



function App() {
  return (
    <div className="app">
      <RevealProvider>
        {/* Introduction Slides */}
        <IntroSlide1 />
        <IntroSlide2 />
        <IntroSlide3 />
        <IntroSlide4 />
        <IntroSlide5 />
        <IntroSlide6 />
        <IntroSlide7 />

        {/* Magnetic Separator Slides */}
        <MagneticSepSlide1 />
        <MagneticSepSlide2 />
        <MagneticSepSlide3 />

        
        {/* QLED Slides */}
        <Eddy1 />
        <Eddy2 />
        <Eddy3 />

        <Optical1/>
        <Optical2/>
        <Optical3/>

        {/* Density Separation Slides */}
        <DensitySep1 />
        <DensitySep2 />
        <DensitySep3 />
      </RevealProvider>
    </div>
  );
}

export default App;
