// import React from 'react';

// const Wishlist = ({ wishlist }) => {
//   return (
//     <div>
//       <h2>Your Wishlist</h2>
//       <div className="card-container">
//         {wishlist.map(item => (
//           <div key={item.id} className="card">
//             <img src={item.image} alt={item.title} width="100" />
//             <h3>{item.title}</h3>
//             <p>{item.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;


import React from 'react';

const Wishlist = ({ wishlist }) => {
  return (
    <div>
      <h2><center>Your Wishlist</center></h2>
      <div className="products-container">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div key={item.id} className="product-card">
              <div className='img'>
              <img className="mrg2" src={item.myimg1} alt='myimg'></img>
              </div>
              <div className="wishlist-details">
                <h3>{item.name1}</h3>
                <p>Discount: {item.discount}</p>
                <p>Price: ₹{item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Your wishlist is empty!</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
