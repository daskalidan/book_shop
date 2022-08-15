import { useDispatch, useSelector } from "react-redux";
import { addToCart, booksSelector, dogetbooksAsync } from "./main_shopSlice";



const MainShop = () => {
  const dispatch = useDispatch();
  const booksAr = useSelector(booksSelector);
  return (
    <div>
      <button onClick={() => dispatch(dogetbooksAsync())}>get Data</button>
      <hr />
      <div className="main-shop">
        {booksAr.map((item) => (
            <div key={item.id} className="book-card">
              <img src="./logo192.png" alt="..." />
              <div>
                <h5>{item.name}</h5>
                <p>
                  book id: {item.id}
                  <br />
                  author: {item.author}
                  <br />
                  year_published: {item.year_published}
                </p>
                </div>
                <button onClick={() => dispatch(addToCart(item))}>
                  add to cart
                </button>
              
            </div>
        ))}
      </div>
    </div>
  );
};

export default MainShop;
