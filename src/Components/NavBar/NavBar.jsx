import { useEffect } from 'react';
import { useState } from 'react';
import DropDown from '../Ui/DropDown';
import styles from './NavBar.module.css';

const NavBar = props => {
    const [showMenu,setShowMenu] = useState(false);
    const navLabels = ['Shirts','T-Shirts','About','Log-In','Sign-Up','Cart'];

    useEffect(() => {
        const handleResize = () => {
            if((window.innerWidth > 720) && showMenu) {
                setShowMenu(false);
            }
        }

        window.addEventListener('resize', handleResize)
    })

    return (
        <div>
            <nav>
                <div className={styles.logo}>anselgretel</div>
                <div>
                    <svg viewBox="0 0 100 80" width="40" height="40" className={`${styles.burger} ${showMenu ? styles.modal : ''}`} onClick={() => setShowMenu(prev => !prev)}>
                        <rect width="100" height="20" rx="8"></rect>
                        <rect y="30" width="100" height="20" rx="8"></rect>
                        <rect y="60" width="100" height="20" rx="8"></rect>
                    </svg>
                </div>
                <ul className={styles.items}>
                    {navLabels.map(item => <li key={item}>{item}</li>)}
                </ul>
            </nav>
            {showMenu && <div className={styles.drop}>
                                <DropDown items={navLabels} className={styles.menu}/>
                            </div>
            }
        </div>
    )
}

export default NavBar;