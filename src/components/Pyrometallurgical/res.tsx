import "../../styles/DensitySep/slide3.css";

export function Eddy14() {
    return (
        <section data-slide="2">   {/* CHANGED from 3 to 2 */}
            <div className="slide-container relative">

                <div className="background-overlay"></div>

                <div className="px-16 pt-32 relative z-20">
                    <h1 className="section-title text-4xl pt-20 mb-6 text-red-200 font-bold">
                        Pyrometallurgy Recovery Data
                    </h1>
                </div>

                <div className="table-wrapper relative z-20">
                    <div className="recovery-table-container">
                        <table className="recovery-table">
                            <thead>
                                <tr>
                                    <th>Metal</th>
                                    <th>Pyrometallurgical Method</th>
                                    <th>Recovery %</th>
                                    <th>Research Paper</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr><td>Gold (Au)</td><td>Smelting → Doré → Refining</td><td>95–99%</td><td>Moosavi-Khoonsari et al. (2024)</td></tr>
                                <tr><td>Copper (Cu)</td><td>Smelting → Converting → Refining</td><td>90–98%</td><td>Habashi (2011)</td></tr>
                                <tr><td>Iron (Fe)</td><td>Blast Furnace / BOF</td><td>90–99%</td><td>Crundwell et al. (2011)</td></tr>
                                <tr><td>Lead (Pb)</td><td>Roasting + Smelting</td><td>85–97%</td><td>Lead Review (2014)</td></tr>
                                <tr><td>Zinc (Zn)</td><td>Roast → Reduction</td><td>80–95%</td><td>Zinc Pyro Review (2010)</td></tr>
                                <tr><td>Nickel (Ni)</td><td>Sulfide Smelting</td><td>85–98%</td><td>Ni Operations Review (2012)</td></tr>
                                <tr><td>Cobalt (Co)</td><td>Matte Smelting</td><td>60–95%</td><td>Cobalt Metallurgy (2010)</td></tr>
                                <tr><td>Silver (Ag)</td><td>Smelting → Refining</td><td>90–99%</td><td>Silver Refining (2013)</td></tr>
                                <tr><td>Tin (Sn)</td><td>Reduction Smelting</td><td>85–98%</td><td>Tin Smelting Study (2015)</td></tr>
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </section>
    );
}
