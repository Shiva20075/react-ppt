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
import { MagneticSepSlide1 } from "./components/ExtractionOfGoldAndCopper/Slide1";
import { MagneticSepSlide2} from "./components/ExtractionOfGoldAndCopper/Slide2";
import { MagneticSepSlide3 } from "./components/ExtractionOfGoldAndCopper/Slide3";
import {MagneticSepSlide4} from "./components/ExtractionOfGoldAndCopper/Slide4";
import { MagneticSepSlide5 } from "./components/ExtractionOfGoldAndCopper/Slide5";
import {MagneticSepSlide6} from "./components/ExtractionOfGoldAndCopper/Slide6";

// Eddy Current Separator Slides
import { Eddy1 } from "./components/Pyrometallurgical/Slide1";
import { Eddy2 } from "./components/Pyrometallurgical/Slide2";
import { Eddy3 } from "./components/Pyrometallurgical/Slide3";
import { Eddy4 } from "./components/Pyrometallurgical/Slide4";
import { Eddy5 } from "./components/Pyrometallurgical/Slide5";
import { Eddy6 } from "./components/Pyrometallurgical/Slide6";
import { Eddy7 } from "./components/Pyrometallurgical/Slide7.tsx";
import { Eddy8 } from "./components/Pyrometallurgical/Objective.tsx";
import { Eddy9 } from "./components/Pyrometallurgical/Types.tsx";
import { Eddy10 } from "./components/Pyrometallurgical/imp.tsx";
import { Eddy11 } from "./components/Pyrometallurgical/Smelt.tsx";
import { Eddy12 } from "./components/Pyrometallurgical/ref.tsx";
import { Eddy13 } from "./components/Pyrometallurgical/refAdv.tsx";
import { Eddy14 } from "./components/Pyrometallurgical/res.tsx";
import { Eddy15 } from "./components/Pyrometallurgical/final.tsx";







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
        {/* <IntroSlide5 /> */}
        <IntroSlide6 />
        <IntroSlide7 />

        {/* Magnetic Separator Slides */}


        
        {/* QLED Slides */}
        <Eddy1 />
        <Eddy2 />
        <Eddy3 />
        <Eddy8 />
        <Eddy9 />
        <Eddy10/>
        <Eddy4 />
        <Eddy11 />
        <Eddy5 />
        <Eddy12/>
        <Eddy15/>
        <Eddy6 />
        <Eddy14/>

        {/* <MagneticSepSlide1 />
        <MagneticSepSlide2 />
        <MagneticSepSlide3 />
        <MagneticSepSlide4 />
        <MagneticSepSlide5/>
        <MagneticSepSlide6/>
         */}

        <Optical1/>
        <Optical2/>
        <Optical3/>

        {/* Density Separation Slides */}
        <DensitySep1 />
        <DensitySep2 />
        <DensitySep3 />

        {/* <Conclusion1 />
        <Conclusion2 />
        <Conclusion4 />
        <Conclusion5 />
        <Conclusion6 />
        <Conclusion7 /> */}
      </RevealProvider>
    </div>
  );
}

export default App;
