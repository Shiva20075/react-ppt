import "../../styles/conclusion/slide7.css";

export function Conclusion7() {
    return (
        <section data-slide="2">
            <div className="slide-container relative">

                {/* Background */}
                <div className="background-overlay"></div>
                <div className="tech-circle tech-circle-1"></div>
                <div className="tech-circle tech-circle-2"></div>

                {/* Header */}
                <div className="px-16 pt-32 relative z-20">
                    <h1 className="section-title text-4xl pt-20 mb-6 text-blue-200 font-bold">
                        Hydrometallurgy Recovery Data
                    </h1>
                </div>

                {/* TABLE CENTERED */}
                <div className="table-wrapper relative z-20">
                    <div className="recovery-table-container">
                        <table className="recovery-table">
                            <thead>
                                <tr>
                                    <th>Metal</th>
                                    <th>Method</th>
                                    <th>Recovery %</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr><td>Gold (Au)</td><td>Cyanide Leaching</td><td>95–98%</td></tr>
                                <tr><td>Gold (Au)</td><td>Thiosulfate</td><td>85–90%</td></tr>
                                <tr><td>Copper (Cu)</td><td>H₂SO₄ Leaching</td><td>80–95%</td></tr>
                                <tr><td>Copper (Cu)</td><td>Ammoniacal</td><td>60–75%</td></tr>
                                <tr><td>Silver (Ag)</td><td>Aqua Regia</td><td>92–98%</td></tr>
                                <tr><td>Palladium (Pd)</td><td>Aqua Regia</td><td>90–95%</td></tr>
                                <tr><td>Nickel (Ni)</td><td>HPAL</td><td>92–98%</td></tr>
                                <tr><td>Cobalt (Co)</td><td>H₂SO₄ Leaching</td><td>80–90%</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
}
