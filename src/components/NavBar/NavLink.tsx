import { useNavigate } from 'react-router-dom';
import "./NavLink.css"
type NavLinkProps = { 
    name: string
    open?: boolean
    toggleMenu?: () => void

}

export default function NavLink({ name, open, toggleMenu }: NavLinkProps ) {
    const navigate = useNavigate();
  return (
    <div className={`nav-link-container ${open ? "nav-link-mobile" : "body-text"}`} >
      <p className={`${open ? "nav-link-mobile" : "body-text"} nav-link `} onClick={() => {
        if (open && toggleMenu) {
            toggleMenu()
        }
        navigate(`/${name== "Home" ? "" : name.toLocaleLowerCase()}`)
        }}>
        {name
        }</p>
    </div>
  );
}
