import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../authentication/authenticationSlice";
import { addToCart, booksSelector, dogetbooksAsync, dodeletebookAsync } from "./main_shopSlice";



const MainShop = () => {
  const dispatch = useDispatch();
  const booksAr = useSelector(booksSelector);

  const token = useSelector(selectToken);

  return (
    <div>
      <button onClick={() => dispatch(dogetbooksAsync())}>get Data</button>
      <hr />
      <div className="main-shop">
        {booksAr.map((item) => (
            <div key={item.id} className="book-card">
              <img src={item.get_thumbnail} alt="no img" />
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
              { token ? (<><button >
                  edit book
                </button>
                <button onClick={() => dispatch(dodeletebookAsync({'item': item, 'token': token}))}>
                remove from shop
              </button>
              </>) : <></>}
            </div>
        ))}
      </div>
    </div>
  );
};

export default MainShop;
