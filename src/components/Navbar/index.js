import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className={styles.navBar}>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <br />
      <Link to='/profile'>
        <button>Profile</button>
      </Link>
      <br />
      <Link to='/following'>
        <button>Following</button>
      </Link>
      <br />
    </div>
  )
}

export default Navbar