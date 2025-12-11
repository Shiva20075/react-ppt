import "../../styles/DensitySep/slide3.css";

export function DensitySep3() {
    return (
        <section data-slide="2">
            <div className="slide-container relative">

                {/* Background */}
                <div className="background-overlay"></div>

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
                                    <th>Hydrometallurgical Method</th>
                                    <th>Recovery %</th>
                                    <th>Research Paper</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Gold (Au)</td>
                                    <td>Cyanide Leaching (CIL/CIP)</td>
                                    <td>90–97%</td>
                                    <td>Marsden & House (2006)</td>
                                </tr>

                                <tr>
                                    <td>Gold (Au)</td>
                                    <td>Thiosulfate Leaching</td>
                                    <td>70–90%</td>
                                    <td>Xu et al., Hydromet. (2019)</td>
                                </tr>

                                <tr>
                                    <td>Copper (Cu)</td>
                                    <td>Acid Leaching (Oxide Ores)</td>
                                    <td>85–95%</td>
                                    <td>Habashi, Copper Metallurgy (2011)</td>
                                </tr>

                                <tr>
                                    <td>Copper (Cu)</td>
                                    <td>Ammoniacal Leaching</td>
                                    <td>60–80%</td>
                                    <td>Gupta & Mukherjee (1990)</td>
                                </tr>

                                <tr>
                                    <td>Silver (Ag)</td>
                                    <td>Cyanide Leaching of Silver Ores</td>
                                    <td>75–95%</td>
                                    <td>K. Osseo-Asare (1991)</td>
                                </tr>

                                <tr>
                                    <td>Nickel (Ni)</td>
                                    <td>HPAL (Laterite Ores)</td>
                                    <td>92–98%</td>
                                    <td>Dalvi et al., HPAL Review (2004)</td>
                                </tr>

                                <tr>
                                    <td>Cobalt (Co)</td>
                                    <td>HPAL / Acid Leaching</td>
                                    <td>85–95%</td>
                                    <td>Habashi, EM Review (2010)</td>
                                </tr>

                                <tr>
                                    <td>Zinc (Zn)</td>
                                    <td>Acid Leaching of Sphalerite</td>
                                    <td>90–98%</td>
                                    <td>Crundwell et al. (2011)</td>
                                </tr>

                                <tr>
                                    <td>Uranium (U)</td>
                                    <td>Acid or Alkaline Leaching</td>
                                    <td>85–95%</td>
                                    <td>IAEA Report (2008)</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
}
