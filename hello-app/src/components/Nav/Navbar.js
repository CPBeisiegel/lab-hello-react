import styles from './styles.module.css';
import image from '../../images/ironhack-logo-xs.png'
import images from "../../images/menu-top-xs.png"

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <img src={image} alt="ironhack-logo" />
            <img src={images} alt="toggle-menu"/>
        </nav>
    )
}

export default Navbar;

