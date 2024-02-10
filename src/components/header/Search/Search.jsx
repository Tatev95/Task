import SearchIcon from '@/images/Search.svg'
import Image from 'next/image'
import styles from './search.module.css'

export const Search = () => {
    return (
        <span className={styles.search_bar}>
            <Image src={SearchIcon} alt='search' className={styles.search_icon} />
            <input type='text' placeholder="Կինո" className={styles.search}/>

        </span>
    )
}
