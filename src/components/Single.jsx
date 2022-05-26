import styles from '../styles/Single.module.css'
import { useWindowSize } from '../helper'

const Single = (product) => {

  const {product:{id, title, price, image}} = product
  const winWidth = useWindowSize()
  console.log(winWidth);
  return (
    <div className={styles.single}>
        <figure className={styles.image}>
            <img src={image} alt={`Product Image: ${title}`} />
        </figure>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.before}>Antes $2.566</p>
        <p className={styles.price}>${price}</p>
        <button className={styles.btn}>{winWidth.width <= 769 ? 'Comprar' : 'Ver Detalles'}</button>
    </div>
  )
}

export default Single