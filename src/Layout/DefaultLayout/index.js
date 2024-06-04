import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import styles from "./DefaultLayout.module.css"

function DefaultLayout({children}) {
  return (
    <div>
      <Header />
      <div className={styles.dGrid}>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout