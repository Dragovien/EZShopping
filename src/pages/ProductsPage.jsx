import ProductCard from "../components/ProductCard"
import { useSelector } from "react-redux"

function Products() {
  // const products = useSelector((state) => state.shop.productsList)
  const products = useSelector((state) => state.shop.productsList)
  console.log(products)

  return (
    <div className="productsWrapper">
        {products.map((product) =>
          <ProductCard
            key={product.id}
            title={product.title}
            category={product.category}
            description={product.description}
            price={product.price}
            imageSrc={product.image} />
        )}
    </div>
  )
}

export default Products
