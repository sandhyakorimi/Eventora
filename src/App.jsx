

import React, { useState } from "react";
import './App.css';
import './EventsTask/styles.css';
import './EventsTask/Body/marriage/marriage.css';
import './EventsTask/Body/events.css';
import Body from './EventsTask/Body/Body';
import Footer from './EventsTask/Footer/Footer';
import Header from './EventsTask/Header/Header';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing Pages
import Marriage from './EventsTask/Body/marriage/marriage';
import Birthday from './EventsTask/Body/birthday';
import BabyShower from './EventsTask/Body/babyshower';
import HouseWarming from './EventsTask/Body/houseWarming';
import Anniversary from './EventsTask/Body/anniversary';
import Festives from './EventsTask/Body/festives';
import HalfSaree from './EventsTask/Body/halfSaree';
import Meetings from './EventsTask/Body/meetings';
import Haldi from './EventsTask/Body/haldi';

// Importing Specific Items for Marriage
import GentsWear from './EventsTask/Body/marriage/GroomOufit';
import Watches from './EventsTask/Body/marriage/watches';
import MenJewel from './EventsTask/Body/marriage/menjewel';
import Rings from './EventsTask/Body/marriage/rings';
import Tie from './EventsTask/Body/marriage/tie';
import Shoe from './EventsTask/Body/marriage/shoe';
import Glasses from './EventsTask/Body/marriage/glasses';
import Saree from './EventsTask/Body/marriage/bsaree';
import Lehangas from './EventsTask/Body/marriage/blehangas';
import CoupleWear from './EventsTask/Body/marriage/couplewear';
import FlowerDecor from './EventsTask/Body/marriage/flowerdecor';
import Mandap from './EventsTask/Body/marriage/mandap';
import Lighting from './EventsTask/Body/marriage/lighting';
import Wishlist from './EventsTask/Header/wishlist';
import BuyNow from "./EventsTask/Body/BuyNow";
import Forms from "./EventsTask/Header/loginForm";
function App() {
  const [wishlist, setWishlist] = useState([]); // Holds the list of liked items

  const handleLike = (item) => {
    setWishlist((prevList) => {
      const exists = prevList.some((i) => i.id === item.id);
      if (exists) {
        return prevList.filter((i) => i.id !== item.id); // Remove from wishlist
      } else {
        return [...prevList, item]; // Add to wishlist
      }
    });
  };

  return (
    <ErrorBoundary>
      <Router>
        <Header wishlist={wishlist} />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/marriage" element={<Marriage />} />
          <Route path="/marriage/GroomOutfit" element={<GentsWear onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/marriage/watches" element={<Watches onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/marriage/menjewel" element={<MenJewel onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/marriage/rings" element={<Rings onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/marriage/tie" element={<Tie onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/marriage/shoe" element={<Shoe onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/marriage/glasses" element={<Glasses onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/marriage/bsarees" element={<Saree onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/marriage/blehangas" element={<Lehangas onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/marriage/couplewear" element={<CoupleWear onLike={handleLike} wishlist={wishlist}/>} />
          <Route path="/marriage/flowerdecor" element={<FlowerDecor onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/marriage/weddingMandap" element={<Mandap onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/marriage/lighting" element={<Lighting onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />} />

          <Route path="/birthday" element={<Birthday onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/babyshower" element={<BabyShower onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/houseWarming" element={<HouseWarming onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/Meetings" element={<Meetings onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/halfSaree" element={<HalfSaree onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/anniversary" element={<Anniversary onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/festives" element={<Festives onLike={handleLike} wishlist={wishlist} />} />

          <Route path="/buyNow" element={<BuyNow/>}/>
          <Route path="/haldi" element={<Haldi onLike={handleLike} wishlist={wishlist} />} />
          <Route path="/registerForm" element={<Forms/>}></Route>
        </Routes>

        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
