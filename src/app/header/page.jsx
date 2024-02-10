import { Enter, LenguageSelect, Search, SelectCity } from '@/components'
import Image from 'next/image'
import Logo from '../../images/logo.svg'
import styles from './header.module.css'


export default function Header() {
    return (
        <div className={styles.header_container}>
            <div className={styles.logo_part}>
                <Image src={Logo} alt='logo' className={styles.logo_img} />
                <SelectCity />
            </div>

            <Search />
            <div className={styles.enter_part}>
                <LenguageSelect />
                <Enter />
            </div>
        </div>
    )
}