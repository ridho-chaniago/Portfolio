import CardWork from "../atom/CardWork";

const Casco = () => (
    <CardWork src="https://siva.jsstatic.com/id/47064/images/banner/47064_banner_0_332584.jpg">
        <div>
            <p className="font-bold">PT. Casco Sea - Batam, Indonesia.</p>
            <p>Periode: Nov, 2020 - Jan, 2024</p>
            <p>Position: Operator</p>
        </div>
        {/* <div className="p-5">
            <ul className="list-disc">
                <li>Conducted production machine operations with precision and accuracy in accordance with company procedures</li>
                <li>Shorting material before assembly</li>
                <li>Assembly pcb to housing product</li>
            </ul>
        </div> */}
    </CardWork>
);
const Kemet = () => (
    <CardWork src="https://th.bing.com/th/id/R.f8d705246696219c18ea94e6668b3c8e?rik=E9EoAvt%2fvucZcg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-Qv91ua1iG9Y%2fTzBQoPSH0LI%2fAAAAAAAAANk%2f9eai5TbOHaU%2fs1600%2fKemet%2bLogo.jpg&ehk=%2fdmj6RJIkvDSSrGdcPaMIlW3ISd%2fj7CVPrXL3a3GEH0%3d&risl=&pid=ImgRaw&r=0">
        <div>
            <p className="font-bold">PT. Kemet Charge - Batam, Indonesia.</p>
            <p>Periode: Jun, 2018 - Jun, 2020</p>
            <p>Position: Operator</p>
        </div>
        {/* <div className="p-5">
            <ul className="list-disc">
                <li>Conducted production machine operations with precision and accuracy in accordance with company procedures</li>
                <li>Inspecting periodically manufactured products to ensure their quality meets established standards.</li>
                <li>Reporting any unusual incidents or issues to the supervisor or management for further action.</li>
            </ul>
        </div> */}
    </CardWork>
);
const SatNusa = () => (
    <CardWork src="https://www.rydtooling.com/wp-content/uploads/elementor/thumbs/Sat-Nusapersada-Logo-p7brkhxdcttfaer1it1oklhmjdjhwvvxu55uen41c4.jpg">
        <div>
            <p className="font-bold">PT. Sat Nusa Persada. Tbk - Batam, Indonesia. </p>
            <p>Periode: Mar, 2016 - Mar, 2018</p>
            <p>Position: Jr. Technician</p>
        </div>
        {/* <div className="p-5">
            <ul className="list-disc">
                <li>Performing routine maintenance and cleaning of production machines to ensure optimal performance.</li>
                <li>Monitoring the production process and identifying potential issues that require improvement.</li>
                <li>Participating in process improvement initiatives to enhance efficiency, productivity, or product quality.</li>
            </ul>
        </div> */}
    </CardWork>
);






const Work = () => ({
    Casco, Kemet, SatNusa
});

export default Work;
