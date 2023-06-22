import ProductCard from "../components/ProductCard"
import { useSelector } from "react-redux"

function Products() {
  const products = useSelector((state) => state.shop.productsList)

  return (
    <div className="productsWrapper">
        {products.map((product) =>
          <ProductCard
            key={product.id}
            product={product}
            title={product.title}
            category={product.category}
            description={product.description}
            price={product.price}
            imageSrc={product.image} 
            />
        )}
    </div>
  )
}

export default Products
