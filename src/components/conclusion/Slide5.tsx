import "../../styles/conclusion/slide5.css";

export function Conclusion5() {
    return (
        <section data-slide="2">
            <div className="slide-container flex flex-col relative">
                <div className="background-overlay"></div>
                <div className="tech-circle tech-circle-1"></div>
                <div className="tech-circle tech-circle-2"></div>

                {/* Header */}
                <div className="px-16 pt-32">
                    <h1 className="section-title text-4xl pt-20 mb-2 text-blue-200 font-bold">
                        Challenges in E-Waste Recycling    </h1>
                </div>

                {/* Points + Right Space */}
                <div className="flex px-24 pt-8 pb-10 gap-10 justify-center">

                    {/* LEFT: Points (width reduced) */}
                    <div className="grid grid-cols-1 gap-6 pt-32 w-[55%]">
                        <div className="advantage-card p-5 rounded-lg delay-100 bg-neutral-900">
                            <p className="text-gray-300 text-xl">
                               Future Developments and Innovations           </p>
                        </div>

                        <div className="advantage-card p-5 rounded-lg delay-200 bg-neutral-900">
                            <p className="text-gray-300 text-xl">
                               Integration of robotics and AI in sorting lines.</p>
                        </div>

                        <div className="advantage-card p-5 rounded-lg delay-300 bg-neutral-900">
                            <p className="text-gray-300 text-xl">
                                Development of smart sensors for real-time composition detection.          </p>
                        </div>

                        <div className="advantage-card p-5 rounded-lg delay-400 bg-neutral-900">
                            <p className="text-gray-300 text-xl">
                                Design for disassembly to improve recyclability.           </p>
                        </div>

                        <div className="advantage-card p-5 rounded-lg delay-500 bg-neutral-900">
                            <p className="text-gray-300 text-xl">

                                Adoption of Industry 4.0 and IoT-enabled recycling systems.         </p>
                        </div>
                        <div className="advantage-card p-5 rounded-lg delay-500 bg-neutral-900">
                            <p className="text-gray-300 text-xl">

                               Enhanced material recovery efficiency with hybrid systems.         </p>
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
