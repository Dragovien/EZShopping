import ProductCard from "../components/ProductCard"
import { useSelector } from "react-redux"

function Products() {
  // const products = useSelector((state) => state.shop.productsList)
  const products = useSelector((state) => state.shop.productsList)
  console.log(products)

  return (
    <>
        {products.map((product) =>
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            imageSrc={product.image} />
        )}
    </>
  )
}

export default Products
