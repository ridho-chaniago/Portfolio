import CardWork from "../atom/CardWork";

const Casco = () => (
    <CardWork src="https://siva.jsstatic.com/id/47064/images/banner/47064_banner_0_332584.jpg">
        <div>
            <p className="font-bold">PT. Casco Sea - Batam, Indonesia.</p>
            <p>Periode: Nov, 2020 - Jan, 2024</p>
            <p>Position: Operator</p>
        </div>
    </CardWork>
);
const Kemet = () => (
    <CardWork src="https://th.bing.com/th/id/R.f8d705246696219c18ea94e6668b3c8e?rik=E9EoAvt%2fvucZcg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-Qv91ua1iG9Y%2fTzBQoPSH0LI%2fAAAAAAAAANk%2f9eai5TbOHaU%2fs1600%2fKemet%2bLogo.jpg&ehk=%2fdmj6RJIkvDSSrGdcPaMIlW3ISd%2fj7CVPrXL3a3GEH0%3d&risl=&pid=ImgRaw&r=0">
        <div>
            <p className="font-bold">PT. Kemet Charge - Batam, Indonesia.</p>
            <p>Periode: Jun, 2018 - Jun, 2020</p>
            <p>Position: Operator</p>
        </div>
    </CardWork>
);
const SatNusa = () => (
    <CardWork src="https://www.rydtooling.com/wp-content/uploads/elementor/thumbs/Sat-Nusapersada-Logo-p7brkhxdcttfaer1it1oklhmjdjhwvvxu55uen41c4.jpg">
        <div>
            <p className="font-bold">PT. Sat Nusa Persada. Tbk - Batam, Indonesia. </p>
            <p>Periode: Mar, 2016 - Mar, 2018</p>
            <p>Position: Jr. Technician</p>
        </div>
    </CardWork>
);






const Work = () => ({
    Casco, Kemet, SatNusa
});

export default Work;
