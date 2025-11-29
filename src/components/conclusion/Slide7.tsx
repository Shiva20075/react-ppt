import "../../styles/conclusion/slide7.css";

export function Conclusion7() {
    return (
        <section data-slide="2">
            <div className="slide-container flex flex-col relative">
                <div className="background-overlay"></div>
                <div className="tech-circle tech-circle-1"></div>
                <div className="tech-circle tech-circle-2"></div>

                {/* Header */}
                <div className="px-16 pt-32">
                    <h1 className="section-title text-4xl pt-20 mb-2 text-blue-200 font-bold">
                        Conclusion and References   </h1>
                </div>

                {/* Points + Right Space */}
                <div className="flex px-24 pt-8 pb-10 gap-10 justify-center">

                    {/* LEFT: Points (width reduced) */}
                    <div className="grid grid-cols-1 gap-6 pt-32 w-[55%]">
                        <div className="advantage-card p-5 rounded-lg delay-100 bg-neutral-900">
                            <p className="text-gray-300 text-xl">
                                Efficient separation is key to sustainable e-waste recycling.          </p>
                        </div>

                        <div className="advantage-card p-5 rounded-lg delay-200 bg-neutral-900">
                            <p className="text-gray-300 text-xl">
                                Each method offers unique benefits depending on material type.</p>
                        </div>

                        <div className="advantage-card p-5 rounded-lg delay-300 bg-neutral-900">
                            <p className="text-gray-300 text-xl">
                               Integration of technologies improves recovery rate and quality.      </p>
                        </div>

                        <div className="advantage-card p-5 rounded-lg delay-400 bg-neutral-900">
                            <p className="text-gray-300 text-xl">
                               Ongoing R&D enhances automation and precision.         </p>
                        </div>

                        <div className="advantage-card p-5 rounded-lg delay-500 bg-neutral-900">
                            <p className="text-gray-300 text-xl">

                                Recycling conserves resources and protects the environment.         </p>
                        </div>


                    </div>

                    {/* RIGHT: Image Area (empty for now) */}
                    <div className="w-[35%] h-full pt-32 flex items-center justify-center">
                        {/* Add image later here */}
                        {/* <img src="/assets/LCD.webp" className="w-80 rounded-lg shadow-xl" /> */}
                    </div>

                </div>
            </div>
        </section>
    );
}
