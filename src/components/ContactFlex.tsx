import { useEffect, useState } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

type ContactFlexProps = {
    vGap?: number;
    hGap?: number;
};

export default function ContactFlex({ vGap = 2, hGap = 4 }: ContactFlexProps) {
    const [adjustedHGap, setAdjustedHGap] = useState(hGap);

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
                        <p className="footer-content-info-title title-sm">Email</p>
                        <p className="footer-content-info body-text">kuldipsandhu1@gmail.com</p>
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
                        <p className="footer-content-info-title title-sm">Phone Number</p>
                        <p className="footer-content-info body-text">(416)-605-4058</p>
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
                        <p className="footer-content-info-title title-sm">Open Hours</p>
                        <p className="footer-content-info body-text">Always Open</p>
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
                        <p className="footer-content-info-title title-sm">Location</p>
                        <p className="footer-content-info body-text">London, Ontario</p>
                    </div>
        </div>
            </div>
        </div>
    );
}
