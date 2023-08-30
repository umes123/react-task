import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    percentage: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setdata({
      firstname: '',
      lastname: '',percentage:''})

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {

      axios
        .post("http://localhost:3002/posts", data)
        .then((response) => {
          // Handle success
          console.log("API Response:", response.data);
        })
        .catch((error) => {
          // Handle error
          console.error("API Error:", error);
        });
    }
  };

  const validate = (data) => {
    const errors = {};
    if (!data.firstname) {
      errors.firstname = "firstname is required";
    }
    if (!data.lastname) {
      errors.lastname = "lastname is required";
    } if (!data.percentage) {
      errors.percentage = "percentage is required";
    }

    return errors;
  };



  return (

    <div className="custom-form">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="custom-form-content" >
            <div className="row">
              <div className="col-md-3">
                <input
                  style={{ padding: '8px 20px 8px 13px' }}
                  type="text"
                  placeholder="firstname"
                  id="name"
                  name="firstname"
                  value={data.firstname}
                  onChange={handleChange} />
                {errors.firstname && <p className="error">{errors.firstname}</p>}

              </div>
              <div className="col-md-3">

                <input
                  type="text"
                  style={{ padding: '8px 20px 8px 13px' }}
                  placeholder="lastname"
                  id="lastname"
                  name="lastname"
                  value={data.lastname}
                  onChange={handleChange} />
                {errors.lastname && <p className="error">{errors.lastname}</p>}

              </div>
              <div className="col-md-3">
                <input

                  id="percentage"
                  style={{ padding: '8px 20px 8px 13px' }}
                  placeholder="percentage"
                  type='number'
                  name="percentage"
                  value={data.percentage}
                  onChange={handleChange} />
                {errors.percentage && <p className="error">{errors.percentage}</p>}

              </div>

              <div className="col-md-3">
                <button className="btn mr-md-2 mb-md-0 mb-2 btn-outline-dark" style={{ padding: "10px 30px 10px 30px" }} type="submit">Submit</button>
              </div>
            </div>

          </div>
        </form>
      </div>






    </div>


  );
}

export default Form;
