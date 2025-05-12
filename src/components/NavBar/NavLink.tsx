import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import "./NavLink.css"
type NavLinkProps = { 
    name: string
    open?: boolean
    toggleMenu?: () => void

}

export const map: Record<string, string> = {
  "ਘਰ": "/",
  "ਬਾਰੇ": "/about",
  "ਗਾਈਡ": "/guide",
  "ਜਾਇਦਾਦਾਂ": "/properties",
  "ਸੰਪਰਕ": "/contact",
}

export default function NavLink({ name, open, toggleMenu }: NavLinkProps ) {
    const navigate = useNavigate();
  const { language } = useLanguage()
  const isEnglish = language === "EN";
  return (
    <div className={`nav-link-container ${open ? "nav-link-mobile" : "body-text"}`} >
      <p className={`${open ? "nav-link-mobile" : "body-text"} nav-link `} onClick={() => {
        if (open && toggleMenu) {
            toggleMenu()
        }
        if (!isEnglish) {
          navigate(map[name])
          return
        }
        navigate(`/${name== "Home" ? "" : name.toLocaleLowerCase()}`)
        }}>
        {name
        }</p>
    </div>
  );
}
