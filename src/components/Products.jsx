import { useState, useEffect } from "react"
import Single from "./Single"
import styles from '../styles/Products.module.css'
import Loader from "./Loader"

const Products = () => {

    const [isLoading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    
console.log(isLoading, ' desde el inicio');
    useEffect( ()=>{
        const getProducts = async () => {
            
            try {
                const url = 'https://fakestoreapi.com/products?limit=500'
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setProducts(resultado)
            } catch (error) {
                console.error(error);
            }
            setLoading(false)
        }
        getProducts()
        
        console.log(isLoading, ' desde getProducts');
    }, [])

  return (
    <div className={styles.list}>
        <Loader
            isLoading={isLoading}
        />
        {products.map(product=>(
            <Single
                key={product.id}
                product={product}
            />
        )
        )}
       
    </div>
  )
}

export default Products