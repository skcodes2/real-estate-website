import { useEffect, useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { PERSONAL_INFO } from '../constants'; // Adjust the path as necessary
import { useLanguage } from '../hooks/useLanguage';
import { footerTranslations } from '../constants';

type ContactFlexProps = {
    vGap?: number;
    hGap?: number;
};

export default function ContactFlex({ vGap = 2, hGap = 4 }: ContactFlexProps) {
    const [adjustedHGap, setAdjustedHGap] = useState(hGap);
    const { language } = useLanguage();
    const translations = footerTranslations[language];

    useEffect(() => {
        const updateGap = () => {
            if (window.innerWidth < 630) {
                setAdjustedHGap(hGap - 9); // reduce gap by 1rem when window < 630px
            } else {
                setAdjustedHGap(hGap);
            }
        };

        updateGap(); // run initially
        window.addEventListener('resize', updateGap);
        return () => window.removeEventListener('resize', updateGap);
    }, [hGap]);

    return (
        <div className="footer-content-contact" style={{ gap: `${adjustedHGap}rem` }}>
            <div className="footer-content-box" style={{ gap: `${vGap}rem` }}>
        <div className="footer-content-flex-content">
                    <a href="#" className="contact-icon" target="_blank" rel="noopener noreferrer">
                        <MailOutlineIcon
                            className="contact-icon"
                            sx={{
                                color: 'var(--text-color)',
                                fontSize: '4rem',
                                '&:hover': { color: 'var(--secondary-color)' },
                            }}
                        />
                    </a>
                    <div className="footer-content-info-container">
                        <p className="footer-content-info-title title-sm">{translations.footerEmail}</p>
                        <p className="footer-content-info body-text">{PERSONAL_INFO.email}</p>
                    </div>
        </div>

        <div className="footer-content-flex-content">
                    <a href="#" className="contact-icon" target="_blank" rel="noopener noreferrer">
                        <PhoneOutlinedIcon
                            className="contact-icon"
                            sx={{
                                color: 'var(--text-color)',
                                fontSize: '4rem',
                                '&:hover': { color: 'var(--secondary-color)' },
                            }}
                        />
                    </a>
                    <div className="footer-content-info-container">
                        <p className="footer-content-info-title title-sm">{translations.footerPhone}</p>
                        <p className="footer-content-info body-text">{PERSONAL_INFO.phone}</p>
                    </div>
        </div>
            </div>

            <div className="footer-content-box" style={{ gap: `${vGap}rem` }}>
        <div className="footer-content-flex-content">
                    <a href="#" className="contact-icon" target="_blank" rel="noopener noreferrer">
                        <QueryBuilderOutlinedIcon
                            className="contact-icon"
                            sx={{
                                color: 'var(--text-color)',
                                fontSize: '4rem',
                                '&:hover': { color: 'var(--secondary-color)' },
                            }}
                        />
                    </a>
                    <div className="footer-content-info-container">
                        <p className="footer-content-info-title title-sm">{translations.OpenHours}</p>
                        <p className="footer-content-info body-text">{translations.AlwaysOpen}</p>
                    </div>
        </div>

        <div className="footer-content-flex-content">
                    <a href="#" className="contact-icon" target="_blank" rel="noopener noreferrer">
                        <LocationOnOutlinedIcon
                            className="contact-icon"
                            sx={{
                                color: 'var(--text-color)',
                                fontSize: '4rem',
                                '&:hover': { color: 'var(--secondary-color)' },
                            }}
                        />
                    </a>
                    <div className="footer-content-info-container">
                        <p className="footer-content-info-title title-sm">{translations.footerLoco}</p>
                        <p className="footer-content-info body-text">{translations.footerLocation}</p>
                    </div>
        </div>
            </div>
        </div>
    );
}
