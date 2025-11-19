import styles from './SideMenu.module.css';
import SideMenuItem from './SideMenuItem';

import { SideMenuHelper } from '../../data/SideMenuHelper';
import { SideMenuItemModel } from '../../data/models/SideMenuItemModel';
import menuIcon from '../../assets/menu-icon.svg';

import { useState, useEffect } from 'react';

type SideMenuProps = {
    isOpen: boolean,
    selectedTab: string,
    onMenuTap: (title: string) => void
}

const items: SideMenuItemModel[] = SideMenuHelper.getMenuItems();

function SideMenu({isOpen, selectedTab, onMenuTap}: SideMenuProps) {
    console.log("SideMenu rendered : " + selectedTab)

    const [menuItems, setMenuItems] = useState<SideMenuItemModel[]>(items);

    useEffect(() => {
        console.log("SideMenu useEffect rendered : " + selectedTab)
        if(selectedTab === '') return;
        console.log("SideMenu useEffect rendered after return : ")

        setMenuItems((prev) =>
            prev.map((it) =>
                new SideMenuItemModel(it.title, it.title === selectedTab, it.isEnabled, it.isHidden, it.icon)
            )
        );

    }, [selectedTab])

    return (
        <aside className={`${styles["side-menu"]} transform transition-all duration-300 ${ isOpen ? "w-64 opacity-100" : "w-0 opacity-0 overflow-hidden"}`}>            
            <div className={styles["side-menu-header"]}>
                <img src={menuIcon} alt='Menu icon' className={styles['side-menu-icon']}/>
                <h5 className={styles["side-menu-title"]}>
                    Shopping App
                </h5>
            </div>
                <nav className={styles["side-menu-nav"]}>
                    {
                        menuItems.map((item) => {
                            item.isSelected = item.title === selectedTab
                            return <SideMenuItem key={item.title} item={item} onClick={ () => onMenuTap(item.title)}/>
                        })
                    }
                </nav>
        </aside>);
}

export default SideMenu;
