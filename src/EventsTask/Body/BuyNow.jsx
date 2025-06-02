// import React from "react";
// import { useLocation } from "react-router-dom";

// const BuyNow = () => {
//   const location = useLocation();

//     const item = location.state;

//   return (
//     <div className="order-now-page">
//       <div className="product-card">
//         <div className="img"><img src={item.myimg1} className="mrg2" /></div>
//         <span>{item.name1}</span>
//         <div
//           className="LikeBtn"
//           style={{
//             fontSize: "24px",
//             color: item.liked ? "#c9184a" : "grey",
//           }}
//         >
//           {product.liked ? "❤️" : "🤍"}
//         </div>
//         <p>Discount: {item.discount}</p>
//         <p>Price: ₹{item.price}</p>
//       </div>
//     </div>
//   );
// };

// export default BuyNow;



// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const BuyNow = () => {
//   const location = useLocation();
//   const item = location.state;

//   return (
//     <div className="buy-now-page">
//       <h2>{item.name1}</h2>
//       <img src={item.myimg1} className="mrg2" alt={item.name1} />
//       <p>Discount: {item.discount}</p>
//       <p>Price: ₹{item.price}</p>
//       <p>Liked: {item.liked ? "❤️" : "🤍"}</p>
//     </div>
//   );
// };

// export default BuyNow;


// import React from "react";
// import { useLocation } from "react-router-dom";

// const BuyNow = () => {
//   const location = useLocation();
//   const item = location.state;

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormData((prev) => ({ ...prev, [name]: value }));
// };
// const [formData, setFormData] = useState({
//   name: "",
//   address: "",
//   contact: "",
//   paymentMethod: "COD",
// });

// if (!item) {
//   return <div style={{ padding: "20px", fontSize: "18px", color: "red" }}>No item data found. Please go back and try again.</div>;
// }

//   return (
//     <div className="order-now-page">
//       <div className="product-card">
//         <div className="img">
//           <img src={item.myimg1} className="mrg2" alt={item.name1} />
//         </div>
//         <span>{item.name1}</span>
//         <p>Discount: {item.discount}</p>
//         <p>Price: ₹{item.price}</p>
//       </div>
//           {/* ============================================== */}
//       <div className="orderCard">
//       <h2>Order Summary</h2>
//         <p><strong>Product:</strong> {item.name1}</p>
//         <p><strong>Price:</strong> ₹{item.price}</p>
//         <p><strong>Discount:</strong> {item.discount}</p>

//         <h3>Shipping Details</h3>
//         <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
//         <input type="text" name="address" placeholder="Address" onChange={handleChange} />
//         <input type="text" name="contact" placeholder="Contact Number" onChange={handleChange} />

//         <h3>Payment Method</h3>
//         <select name="paymentMethod" onChange={handleChange}>
//           <option value="COD">Cash on Delivery</option>
//           <option value="Card">Credit/Debit Card</option>
//           <option value="UPI">UPI</option>
//         </select>

//         <button className="place-order-btn" onClick={handleOrder}>
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BuyNow;



import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BuyNow = () => {
  const location = useLocation();
  const item = location.state;

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    paymentMethod: "COD",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrder = () => {
    alert("Order placed successfully!\n" + JSON.stringify(formData, null, 2));
  };

  if (!item) {
    return (
      <div
        style={{ padding: "20px", fontSize: "18px", color: "red" }}
      >
        No item data found. Please go back and try again.
      </div>
    );
  }

  return (
    <div className="order-now-page" style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div
        className="product-card"
        // style={{
        //   width: "40%",
        //   height: "70vh",
        //   border: "1px solid #ccc",
        //   padding: "16px",
        //   borderRadius: "10px",
        // }}
      >
        <div className="img">
          <img
            src={item.myimg1}
            className="mrg2"
            alt={item.name1}
            // style={{ width: "100%", height: "auto" }}
          />
        </div>
        <h2>{item.name1}</h2>
        <p><strong>Discount:</strong> {item.discount}</p>
        <p><strong>Price:</strong> ₹{item.price}</p>
      </div>

      <div
        className="orderCard"
        style={{
          flex: 1,
          border: "1px solid #ccc",
          padding: "16px",
          borderRadius: "10px",
        }}
      >
        <h2>Order Summary</h2>
        <p><strong>Product:</strong> {item.name1}</p>
        <p><strong>Price:</strong> ₹{item.price}</p>
        <p><strong>Discount:</strong> {item.discount}</p>

        <h3>Shipping Details</h3>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} />
        <input type="text" name="contact" placeholder="Contact Number" onChange={handleChange} />

        <h3>Payment Method</h3>
        <div onChange={handleChange}>
  
  <label>
    <input type="radio" name="paymentMethod" className="myinput" value="COD" onChange={handleChange} />
       <h2>Cash on Delivery</h2> 
  </label>
  
  <label>
    <input type="radio" name="paymentMethod" value="Card" onChange={handleChange} />
    <h2>Credit/Debit Card</h2>
  </label>
  
  <label>
    <input type="radio" style={{fontSize:"10px"}} name="paymentMethod" value="UPI" onChange={handleChange} />
    <h2>UPI</h2>
  </label>
</div>
        <button
          className="place-order-btn"
          onClick={handleOrder}
          style={{ marginTop: "20px", padding: "10px 20px", background: "#0a9396", color: "#fff", border: "none", borderRadius: "5px" }}
        >
         <h1> Place Order</h1>
        </button>
      </div>
    </div>
  );
};

export default BuyNow;
