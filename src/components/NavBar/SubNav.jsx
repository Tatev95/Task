"use client"

import { getCategory } from '@/request/CategoryRequest';
import React, { useCallback, useEffect, useState } from 'react';
import { CategoryList } from '../CategoryList';
import styles from './navbar.module.css';

export const SubNav = ({ menuData, alias }) => {
    const [id, setId] = useState(0)
    const [categories, setCategories] = useState(null);

    const selectedSubMenu = menuData?.find(menu => menu?.alias === alias);


    if (!selectedSubMenu) {
        return null;
    }
    const subMenus = selectedSubMenu.childs;

    const handleChangeId = ((id) => {
        setId(id)

        const fetchData = async () => {
            try {
                const data = await getCategory(id);
                setCategories(data);
            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchData();
    })

    return (
        <div >

            <div className={styles.sub_menus}>
                {subMenus.map((sub) => (
                    <div
                        key={sub.id}
                        className={styles.sub_item}
                        onClick={() => handleChangeId(sub.id)}
                    >
                        {sub.title}


                    </div>
                ))}


            </div>
            <h2 className={styles.title}> {categories?.meta.meta_title}</h2>
            <CategoryList
                categories={categories?.data}
                subId={id}
            />

        </div>

    );
};
