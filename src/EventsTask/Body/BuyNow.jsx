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
const [showAlert, setShowAlert] = useState(false);
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
    // alert("Order placed successfully!\n" + JSON.stringify(formData, null, 2));
    setShowAlert(true);
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
{showAlert && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0, 0, 0, 0.4)",
      backdropFilter: "blur(10px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      padding: "20px",
      boxSizing: "border-box",
    }}
  >
    <div
      style={{
        width: "90vw",
        maxWidth: "600px",
        minHeight: "400px",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "30px",
        padding: "40px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          marginBottom: "30px",
          color: "#00f5d4",
          fontWeight: "bold",
        }}
      >
        ✅ Order Placed Successfully!
      </h2>

      <div
        style={{
          fontSize: "28px",
          color: "#f1f1f1",
          textAlign: "left",
          width: "100%",
          lineHeight: "1.6",
        }}
      >
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Address:</strong> {formData.address}</p>
        <p><strong>Contact:</strong> {formData.contact}</p>
        <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
      </div>

      <button
        onClick={() => setShowAlert(false)}
        style={{
          marginTop: "40px",
          padding: "15px 40px",
          background: "#00b4d8",
          border: "none",
          borderRadius: "12px",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "24px",
          alignSelf: "center",
        }}
      >
        Close
      </button>
    </div>
  </div>
)}







      </div>
    </div>
  );
};

export default BuyNow;
