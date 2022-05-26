import styles from './styles/Global.module.css'
import Header from "./components/Header"
import Products from './components/Products'


function App() {
  
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Header/>
        <Products />
      </div>
    </div>
  )
}

export default App
