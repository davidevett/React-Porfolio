// src/FormComponent.js
import { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="label subtitle press-start-2p-regular" htmlFor="name">
          Name:
        </label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="label subtitle press-start-2p-regular" htmlFor="email">
          Email:
        </label>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button className="button form-btn press-start-2p-regular" type="submit">
        Press start to play
      </button>
    </form>
  );
};

export default FormComponent;
