import { Link } from 'react-router-dom'
const Products = () => {

  return (
    <>
      <h2>Products</h2>
      <ul>
        <li><Link to="/products/1">Products1</Link></li>
        <li> <Link to="/products/2">Products2</Link></li>
        <li>   <Link to="/products/3">Products3</Link></li>


      </ul>

    </>)
}

export default Products;