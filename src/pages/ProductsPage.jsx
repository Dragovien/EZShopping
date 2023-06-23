import ProductCard from "../components/ProductCard"
import { useSelector } from "react-redux"

function Products() {
  const products = useSelector((state) => state.shop.productsList)

  return (
    <div className="productsWrapper">
        {products.map((product, index) =>
          <ProductCard
            key={index}
            product={product}
            />
        )}
    </div>
  )
}

export default Products
