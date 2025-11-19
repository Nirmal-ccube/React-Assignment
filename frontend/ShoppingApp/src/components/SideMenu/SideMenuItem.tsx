import type { SideMenuItemModel } from '../../data/models/SideMenuItemModel';
import styles from './SideMenuItem.module.css';

type SideMenuItemProps = {
    item: SideMenuItemModel,
    onClick: () => void
}

function SideMenuItem({item, onClick}: SideMenuItemProps) {
    return (
        <div 
            role="button" 
            className={styles['side-menu-item']} 
            onClick={onClick}
            >
            <div className={styles['side-menu-icon-wrapper']}>
                <img src={item.icon} alt='home icon' className={styles['side-menu-icon']}/>
            </div>
            {item.title}
        </div>
    );
}

export default SideMenuItem;