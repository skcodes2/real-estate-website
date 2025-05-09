import "./NavBarStyles.css";
import logo from "../../assets/LogoNoText.png"
import cadFlag from "../../assets/CadFlag.png"
import indFlag from "../../assets/IndFlag.png"
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
import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { navTranslations } from "../../constants";

export default function NavBar() {

    const navigate = useNavigate();
    const { isOpen, isMounted, toggleMenu } = useMenuToggle(false);
    const { darkMode, toggleDarkMode } = useDarkMode(true);
    const { scrolled, scrollUp } = useScrolled(200, darkMode);
    const [languageOpen, setLanguageOpen] = useState(false);
    const { language, setLanguage } = useLanguage();

    function handleDropDown(lang: "EN" | "PA") {
        setLanguageOpen(false);
        setLanguage(lang);
    }


    return (
        <div className={`container bg-color ${scrolled ? 'scrolled' : 'at-top'} ${scrollUp ? 'show-nav' : 'hide-nav'}`}>

            <div className="logo-container" onClick={() => navigate("/")}>
                <div className="logo-box"><img src={logo} onClick={() => navigate("/")} alt="Logo" className="logo" /></div>
                <div className="logo-text">
                    <p className="body-text" style={{ textWrap: 'nowrap' }}>{navTranslations[language].name}</p>
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
                <NavLink name={navTranslations[language].navHome} toggleMenu={toggleMenu} open={isOpen} />
                <NavLink name={navTranslations[language].navAbout} toggleMenu={toggleMenu} open={isOpen} />
                <NavLink name={navTranslations[language].navGuide} toggleMenu={toggleMenu} open={isOpen} />
                <NavLink name={navTranslations[language].navProperties} toggleMenu={toggleMenu} open={isOpen} />
                <NavLink name={navTranslations[language].navContact} toggleMenu={toggleMenu} open={isOpen} />
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
                    <div className="language-toggle" onClick={() => setLanguageOpen(prev => !prev)}>
                        <p className="body-text">{language}</p>
                        <img className="flag" src={language == "EN" ? cadFlag : indFlag} alt="English" />
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

                    {languageOpen && scrollUp && (
                        <div className="language-dropdown">
                            <div className="language-option" onClick={() => handleDropDown("EN")}>
                                <img className="flag" src={cadFlag} alt="English" />
                                <span className="body-text">{navTranslations[language].navLanguageEnglish}</span>
                            </div>
                            <div className="language-option" onClick={() => handleDropDown("PA")}>
                                <img className="flag" src={indFlag} alt="Punjabi" />
                                <span className="body-text">{navTranslations[language].navLanguagePunjabi}</span>
                            </div>
                        </div>
                    )}
                </div>


            </div>

        </div>
    )
}
