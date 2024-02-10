"use client"

import { getMenu } from '@/request/NavBarRequest';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { SubNav } from '.';
import styles from './navbar.module.css';

export const NavBar = () => {
    const [menuData, setMenuData] = useState(null);
    const [alias, setAlias] = useState('entertainment')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMenu();
                setMenuData(data);
            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchData();
    }, []);

    const handleChangeAlias = useCallback((alias) => {
        setAlias(alias)
    }, [])


    return (
        <>
            <div className={styles.nav_container}>
                {menuData && (
                    <ul className={styles.nav_bar}>
                        {menuData?.data.map((menuItem) => (
                            <Link
                                key={menuItem.id}
                                href='/'
                                className={styles.menu_link}
                                onClick={() => handleChangeAlias(menuItem.alias)}
                            >
                                {menuItem.title}
                            </Link>
                        ))}
                    </ul>
                )}
            </div>
            <SubNav menuData={menuData?.data} alias={alias} />

        </>

    );
};
