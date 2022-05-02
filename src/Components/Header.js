import styles from './Header.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    return(
        <div className={styles.Header}>
            <div className={styles.backgroundIcon} />
            <div className={styles.navBar}>
                <p className={styles.barItem}>Find Work</p>
                <p className={styles.barItem}>Job Board</p>
                <p className={styles.barItem}>Timesheet</p>
            </div>
            <div className={styles.personPin}>
                <AccountCircleIcon style={{fontSize:44,color:'#777'}} />
            </div>
        </div>
    )
}

export default Header;
