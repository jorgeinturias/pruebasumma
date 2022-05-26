import styles from '../styles/Loader.module.css'

const Loader = ({isLoading}) => {
    
  return (
    <>
        {isLoading && (
            <div className={styles.iconSpinner}></div>
        )}
    </>
  )
}

export default Loader