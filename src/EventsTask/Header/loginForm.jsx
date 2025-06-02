import React, { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './Forms.css';  // Make sure to import the CSS here

const Forms = () => {
  const [test, setTest] = useState({
    Firstname: "",
    Secondname: "",
    email: "",
    PhoneNumber: "",
    DateOfBirth: "",
    Password: "",
    image: ""
  });

  const ImageRef = useRef(null);

  const handleImage = () => {
    ImageRef.current.click();
  };

  const showToast = (msg, type = "error") => {
    toast[type](msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const myfun = () => {
    const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PasswordRegex1 = /[a-z]/;
    const PasswordRegex2 = /[A-Z]/;
    const PasswordRegex3 = /[0-9]/;
    const PasswordRegex4 = /[-`~!@#$%^&*()_+={}[\]/"';:,.<>?|]/;

    if (test.Firstname === "") showToast("Enter First name");
    else if (test.Secondname === "") showToast("Enter Second name");
    else if (test.email === "") showToast("Enter your Email");
    else if (!EmailRegex.test(test.email)) showToast("Enter a valid email");
    else if (test.PhoneNumber === "") showToast("Enter Mobile Number");
    else if (test.PhoneNumber.length !== 10) showToast("Enter a 10-digit mobile number");
    else if (test.DateOfBirth === "") showToast("Enter DOB");
    else if (test.Password === "") showToast("Enter Password");
    else if (test.Password.length < 8) showToast("Password should be at least 8 characters");
    else if (!PasswordRegex1.test(test.Password)) showToast("Include at least one lowercase letter");
    else if (!PasswordRegex2.test(test.Password)) showToast("Include at least one uppercase letter");
    else if (!PasswordRegex3.test(test.Password)) showToast("Include at least one number");
    else if (!PasswordRegex4.test(test.Password)) showToast("Include at least one special character");
    else {
      showToast("Form submitted successfully!", "success");
      console.log(test);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Register Form</h2>

      <input 
        type="text" 
        placeholder="First Name" 
        className="form-input"
        onChange={(e) => setTest({ ...test, Firstname: e.target.value })} 
      />

      <input 
        type="text" 
        placeholder="Last Name" 
        className="form-input"
        onChange={(e) => setTest({ ...test, Secondname: e.target.value })} 
      />

      <input 
        type="email" 
        placeholder="Email" 
        className="form-input"
        onChange={(e) => setTest({ ...test, email: e.target.value })} 
      />

      <input 
        type="number" 
        placeholder="Mobile Number" 
        className="form-input"
        onChange={(e) => setTest({ ...test, PhoneNumber: e.target.value })} 
      />

      <input 
        type="date" 
        placeholder="Date of Birth" 
        className="form-input"
        onChange={(e) => setTest({ ...test, DateOfBirth: e.target.value })} 
      />

      <input 
        type="password" 
        placeholder="Password" 
        className="form-input"
        onChange={(e) => setTest({ ...test, Password: e.target.value })} 
      />

      <div className="image-preview">
        {test.image ? (
          <img 
            onClick={handleImage} 
            className="image-preview-img" 
            src={URL.createObjectURL(test.image)} 
            alt="Preview" 
          />
        ) : (
          <img 
            onClick={handleImage} 
            className="image-preview-img" 
            src="https://gatax.in/_next/image?url=https%3A%2F%2Fapi.gatax.in%2Fpublic%2Fimages%2Fnull2.png&w=640&q=75" 
            alt="Default" 
          />
        )}
        <input 
          type="file" 
          className="hidden" 
          ref={ImageRef} 
          accept=".jpg, .png, .jpeg, .webp" 
          onChange={(e) => setTest({ ...test, image: e.target.files[0] })}
        />
      </div>

      <button onClick={myfun} className="submit-btn">
        Submit
      </button>

      <ToastContainer />
    </div>
  );
};

export default Forms;

