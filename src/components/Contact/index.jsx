import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (data) => {
    const newErrors = {};

    if (!data.fullname.trim()) {
      newErrors.fullname = "Full name cannot be empty";
    } else if (data.fullname.trim().length < 3) {
      newErrors.fullname = "Full name must be at least 3 characters";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email cannot be empty";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/i.test(data.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!data.phonenumber.trim()) {
      newErrors.phonenumber = "Phone number cannot be empty";
    } else if (!/^[6-9]\d{9}$/.test(data.phonenumber)) {
      newErrors.phonenumber = "Invalid phone number";
    }

    if (!data.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (data.message.trim().length < 6) {
      newErrors.message = "Message must be at least 6 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedData);

    if (touched[name]) {
      const validationErrors = validate(updatedData);
      setErrors(validationErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setTouched({
      fullname: true,
      email: true,
      phonenumber: true,
      message: true,
    });

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid
      e.target.submit(); // or you can use fetch/axios to send data manually
      setFormData({
        fullname: "",
        email: "",
        phonenumber: "",
        message: "",
      });
      setTouched({});
      setErrors({});
    }
  };

  return (
    <section className="contact-section pt-5 pb-5 w-100" id="contactSection">
      <div className="shadow container">
        <div className="section-title mb-5 pb-2">
          <h2 className="section-heading mt-5 d-flex">
            <span className="custom-font-color">04. </span>Get In Touch
          </h2>
          <p className="description-contact">
            I'd be happy to respond to your inquiries...
          </p>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-lg-6 mb-5">
            <div className="infor d-flex flex-column align-items-stretch">
              <div className="address">
                <i className="fa-solid fa-location-dot" />
                <h4>Location:</h4>
                <p className="custom-font-color">
                  Visakhapatnam, Andhra Pradesh, India, P-531116
                </p>
              </div>
              <div className="email">
                <i className="fa-solid fa-envelope" />
                <h4>Email:</h4>
                <p className="custom-font-color">arunkumarsurla1@gmail.com</p>
              </div>
              <div className="phone">
                <i className="fa-solid fa-phone" />
                <h4>Call:</h4>
                <p className="custom-font-color">91XXXXXX85</p>
              </div>
              <iframe
                src="https://maps.google.com/maps?width=450&height=600&hl=en&q=visakapatnam&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                width={600}
                height={450}
                style={{ border: 0, width: "100%", height: 314 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="col-lg-6 mb-5">
            <div className="box d-flex flex-column align-items-stretch">
              <h2 className="mb-5">Send Message</h2>
              <form
                id="myForm"
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xkgwqqdy"
                method="POST"
                noValidate
              >
                <div className={`inputBox ${errors.fullname ? "error" : ""}`}>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Enter your Full Name"
                    value={formData.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="fullname">Full Name</label>
                  {<small>{errors.fullname || " "}</small>}
                </div>

                <div className={`inputBox ${errors.email ? "error" : ""}`}>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your valid email address"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="email">Email</label>
                  {<small>{errors.email || " "}</small>}
                </div>

                <div
                  className={`inputBox ${errors.phonenumber ? "error" : " "}`}
                >
                  <input
                    type="text"
                    name="phonenumber"
                    placeholder="Enter your phone Number"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="phonenumber">Phone Number</label>
                  {<small>{errors.phonenumber || " "}</small>}
                </div>

                <div className={`inputBox ${errors.message ? "error" : ""}`}>
                  <textarea
                    name="message"
                    placeholder="Type your message here"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="message">Message</label>
                  {<small>{errors.message || " "}</small>}
                </div>

                <button type="submit" id="sub">
                  Send <i className="fa-solid fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
