// import './style.css';
import React, {useState , useEffect} from 'react';
import axios from 'axios';
import NavBar from  '../../components/common/NavBar/NavBar'
import CustomizedTables from '../../components/cartTable/cartTable'




function Cart() {
  function totalCost () {
    let totalCost = 0;
    cart.forEach (ele => (totalCost = totalCost + ele.price * ele.quantity));
    return totalCost;
  }

  const [cart, setCart] = useState ();
  useEffect (() => {
    axios
      .get ('/userProducts')
      .then (response => response.data)
      .then (data => setCart (data))
      .catch (err => console.log (err));
  }, []);

  return (
      <div>
          <NavBar/>
        <CustomizedTables/>
      </div>
  )

}

export default Cart;








// <section className="cart-section">
//   <h1>your cart</h1>
//   <div className="show-cart">
//     <ul className="header-list">
//       <li className="li">product</li>
//       <li>price</li>
//       <li> Quanitity</li>
//       <li>total</li>
//     </ul>

//     <div className="product-list">
//       {cart.map (element => {
    //         return (
        //           <div className="products">
        //             <div className="product">
        //               <img src={element.img} alt="product img" />
        //               <div className="product-name">{element.name}</div>
        //             </div>
        //             {console.log (typeof element.price)}
        //             <div className="price">{element.price}$</div>
        //             <div className="quaninty">{element.quantity}</div>
        //             <div className="total">{element.price * element.quantity}$</div>
        
        //           </div>
        //         );
        //       })}
        //     </div>
        //   </div>
        
        //   <div className="total-price">
        //     <h2>total</h2>
        //     <div className="buy-container">
        //       {cart.length > 0
        //         ? <div class="total">{totalCost ()}$</div>
        //         : <div> 0 </div>}
        //       <div class="buy-now">buy now</div>
        //     </div>
        //   </div>
        
        // </section>
        // );