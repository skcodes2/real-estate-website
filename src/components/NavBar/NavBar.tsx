import "./NavBarStyles.css";
import logo from "../../assets/LogoNoText.png"
import flag from "../../assets/CadFlag.png"
import NavLink from "./NavLink";
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useNavigate } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import useMenuToggle from "../../hooks/ToggleBurgerMenu";
import useDarkMode from "../../hooks/ToggleDarkMode";
import useScrolled from "../../hooks/useScrolled";

export default function NavBar() {

    const navigate = useNavigate();
    const { isOpen, isMounted, toggleMenu } = useMenuToggle(false);
    const { darkMode, toggleDarkMode } = useDarkMode(true);
    const { scrolled, scrollUp } = useScrolled(200, darkMode);




    return (
        <div className={`container bg-color ${scrolled ? 'scrolled' : 'at-top'} ${scrollUp ? 'show-nav' : 'hide-nav'}`}>

            <div className="logo-container" onClick={() => navigate("/")}>
                <div className="logo-box"><img src={logo} onClick={() => navigate("/")} alt="Logo" className="logo" /></div>
                <div className="logo-text">
                    <p className="body-text" style={{ textWrap: 'nowrap' }}>Kuldip Kahlon</p>
                </div>

            </div>

            <div className={`links ${isOpen ? 'open' : ""} ${isMounted ? 'animate' : ''}`}>
                <div className="close" onClick={toggleMenu}>
                    <CloseOutlinedIcon
                        fontSize="inherit"
                        sx={{
                            display: `${isOpen ? 'flex' : "none"}`,
                            color: 'var(--text-color)',
                            transition: 'color 0.3s ease',
                            cursor: 'pointer',
                            '&:hover': {
                                color: 'var(--secondary-color)',
                            },
                        }}
                    />
                </div>
                <p className="title-sm" onClick={() => { navigate('/'); toggleMenu() }} style={{ display: `${isOpen ? 'flex' : "none"}` }}>Kuldip Kahlon</p>
                <NavLink name="Home" toggleMenu={toggleMenu} open={isOpen} />
                <NavLink name="About" toggleMenu={toggleMenu} open={isOpen} />
                <NavLink name="Guide" toggleMenu={toggleMenu} open={isOpen} />
                <NavLink name="Properties" toggleMenu={toggleMenu} open={isOpen} />
                <NavLink name="Contact" toggleMenu={toggleMenu} open={isOpen} />
            </div>

            <div className={`burger-menu `} onClick={toggleMenu}>
                <BurgerMenu size={24} color={`${darkMode ? '#fff' : '#000'}`} />
            </div>

            <div className="divider"></div>

            <div className="extras">
                <div className="moon" onClick={() => {
                    toggleDarkMode();
                    if (window.scrollY == 0) {
                        let navBar = document.getElementsByClassName("container")[0];
                        console.log(navBar.classList);
                        navBar.classList.remove("at-top")
                    }

                }}>
                    {darkMode ?
                        <BedtimeOutlinedIcon
                            fontSize="inherit"
                            sx={{
                                color: 'var(--text-color)',
                                transition: 'color 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: 'var(--secondary-color)',
                                },
                            }}
                        />
                        : <LightModeOutlinedIcon
                            fontSize="inherit"
                            sx={{
                                color: 'var(--text-color)',
                                transition: 'color 0.3s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                    color: 'var(--secondary-color)',
                                },
                            }}
                        />}

                </div>
                <div className="language">

                    <p className="body-text">EN</p>
                    <img className="flag" src={flag} alt="" />
                    <ArrowDropDownOutlinedIcon
                        fontSize="large"
                        sx={{
                            color: "var(--text-color)",
                            fontSize: '2rem',
                            transition: 'color 0.3s ease',
                            cursor: 'pointer',
                            '&:hover': {
                                color: 'var(--secondary-color)',
                            },
                        }}
                    />
                </div>

            </div>

        </div>
    )
}
