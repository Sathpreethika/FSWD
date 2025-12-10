import React, { useState, useEffect } from "react";

export default function TrainTicket() {
  useEffect(() => {
    const css = `
      .btn-custom {
        background: linear-gradient(90deg,#0ea5e9,#7c3aed);
        color: white;
        padding: 0.6rem 1.1rem;
        border-radius: 12px;
        font-weight: 600;
        box-shadow: 0 6px 18px rgba(124,58,237,0.18);
        transition: transform .12s ease, box-shadow .12s ease;
        border: none;
      }
      .btn-custom:hover { transform: translateY(-3px); box-shadow: 0 12px 24px rgba(124,58,237,0.22); }

      .file-input { display: flex; gap: .6rem; align-items: center; }
      .file-preview { max-width: 80px; max-height: 80px; object-fit: cover; border-radius: 6px; border: 1px solid #e5e7eb; }
    `;

    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "female",
    travelClass: "economy",
    passengers: 1,
    journeyDate: "",
    agree: false,
    photo: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (type === "file") {
      const file = files[0];
      setForm({ ...form, [name]: file });
      if (file) {
        const reader = new FileReader();
        reader.onload = () => setPreview(reader.result);
        reader.readAsDataURL(file);
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Train Ticket Registration Submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-6">Train Ticket Registration Form</h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="font-medium">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          {/* Password */}
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>

          {/* Textarea */}
          <div>
            <label className="font-medium">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows={3}
              className="w-full mt-1 p-2 border rounded"
            ></textarea>
          </div>

          {/* Radio */}
          <div>
            <label className="font-medium">Gender</label>
            <div className="flex gap-4 mt-1">
              <label><input type="radio" name="gender" value="female" checked={form.gender === "female"} onChange={handleChange}/> Female</label>
              <label><input type="radio" name="gender" value="male" checked={form.gender === "male"} onChange={handleChange}/> Male</label>
              <label><input type="radio" name="gender" value="other" checked={form.gender === "other"} onChange={handleChange}/> Other</label>
            </div>
          </div>

          {/* Dropdown */}
          <div>
            <label className="font-medium">Travel Class</label>
            <select
              name="travelClass"
              value={form.travelClass}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded"
            >
              <option value="economy">Economy</option>
              <option value="sleeper">Sleeper</option>
              <option value="ac">AC</option>
              <option value="first">First Class</option>
            </select>
          </div>

          {/* File Upload */}
          <div>
            <label className="font-medium">Upload ID / Photo</label>
            <div className="file-input mt-1">
              <input type="file" name="photo" onChange={handleChange} />
              {preview && <img src={preview} alt="preview" className="file-preview" />}
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
            <label>I agree to the Terms and Conditions</label>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button type="submit" className="btn-custom">Submit</button>
            <button type="reset" className="px-4 py-2 border rounded">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
