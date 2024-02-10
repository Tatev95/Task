import styles from './lenguageSelect.module.css'

export const LenguageSelect = () => {
    return (
        <select className={styles.select_len}>
            <option value="someOption">Հայ</option>
            <option value="otherOption">Eng</option>
        </select>
    )
}

