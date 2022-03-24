import { Link, useNavigate } from "react-router-dom";
const Products = () => {
  //const navigate = useNavigate();
  return (
    <section>
      <h1>The products Page</h1>
      <ul>
        <li>
          <Link to="1">Book</Link>
        </li>
        <li>
          <Link to="2">Carpet</Link>
        </li>
        <li>
          <Link to="3">Pizza</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
