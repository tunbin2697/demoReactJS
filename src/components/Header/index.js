import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <div>Logo</div>
      <div className={styles['search-bar']}>
        <input placeholder='Input...' className={styles['search-input']} />
        <button className={styles['search-btn']}>S</button>
      </div>
      <div>Action</div>
    </div>
  )
}

export default Header