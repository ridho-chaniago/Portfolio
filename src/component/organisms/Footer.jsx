
import { BrowserRouter as Router } from 'react-router-dom';
import LinkNavbar from "../molecules/LinkNavbar"
import { useContext } from 'react';
import Themes from '../../ReactContext/Themes';
import { HashLink } from 'react-router-hash-link';
import { Link } from '../atom/Link';
import { Discord, Ig, Fb, Github, In, Email } from '../../../public/svg/icon';
import BtnSosmed from '../atom/BtnSosmed';

const Footer = () => {
    const { bg } = useContext(Themes)
    return (
        <Router>
            <div className={`${bg} p-10 flex flex-col items-center gap-8`}>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='font-bold text-4xl text-white'>Ridho Chaniago</h2>
                    <div className=' flex flex-col items-center'>
                        <h3 className='text-white text-2xl'>FrontEnd Developer</h3>

                    </div>

                </div>
                <div className="md:flex md:flex-row items-center md:justify-around flex flex-col md:w-[50%] ">
                    {/* <LinkNavbar /> */}
                    <HashLink to={"#home"} smooth>
                        <Link className={`text-white`}>Home</Link>
                    </HashLink>
                    <HashLink to={"#about"} smooth>
                        <Link href={"About"} className={`text-white`}>About</Link>
                    </HashLink>
                    <HashLink to={"#skills"} smooth>
                        <Link className={`text-white`}>MySkill</Link>
                    </HashLink>
                    <HashLink to={"#Education"} smooth>
                        <Link className={`text-white`}>Education</Link>
                    </HashLink>
                    <HashLink to={"#Portfolio"} smooth>
                        <Link className={`text-white`}>Portfolio</Link>
                    </HashLink>
                    <HashLink to={"#Contact"} smooth>
                        <Link className={`text-white`}>Contact</Link>
                    </HashLink>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <BtnSosmed link={"https://discord.com/users/ridhochaniago"}><Discord /></BtnSosmed>
                    <BtnSosmed link={"https://www.facebook.com/ridho12c"}><Fb /></BtnSosmed>
                    <BtnSosmed link={"https://instagram.com/ridho_chaniago?igshid=MzNlNGNkZWQ4Mg=="}><Ig /></BtnSosmed>
                    <BtnSosmed link={"https://github.com/ridho-chaniago"}><Github /></BtnSosmed>
                    <BtnSosmed link={"https://www.linkedin.com/in/ridho-chaniago"}><In /></BtnSosmed>
                    <BtnSosmed link={"https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=ridho12c.rc@gmail.com"}><Email /></BtnSosmed>

                </div>
                <p className='text-white font-mono font-semibold'>© 2024 Created by Ridho Chaniago. All right reserved</p>
            </div>
        </Router>
    )
}
export default Footer