import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

//npm install react-hook-form

function CarRentalForm() {
  /*
       useForm() Hook
       This is the core hook provided by React Hook Form to manage the form. It offers multiple utilities:

       register: A function to bind inputs to the form state and validation.
        The register method is used to "connect" an input field to the form state. It also allows you to define validation rules.

       handleSubmit: A function to handle the form submission.
       formState.errors: Contains validation error messages for each field.
     */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSubmit = (data) => {
    console.log("Rental Form Data:", data);
    alert("Your rental booking has been submitted!");
  };

  const carModels = [
    { id: 1, name: "Sedan" },
    { id: 2, name: "SUV" },
    { id: 3, name: "Convertible" },
    { id: 4, name: "Truck" },
  ];

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="p-4 border rounded bg-light">
        <h1 className="text-center mb-4">Car Rental Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              id="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              {...register("name", { required: "Full Name is required" })}
              // register("name", { required: "Full Name is required" }):
              // param1: Tells React Hook Form to track the name field.
              // param2: Adds a validation rule that the name field is required.
              // The required rule ensures fields must be filled.
              // The pattern rule validates the format of the input (e.g., email format).
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          {/* Car Model */}
          <div className="mb-3">
            <label htmlFor="carModel" className="form-label">
              Car Model
            </label>
            <select
              id="carModel"
              className={`form-select ${errors.carModel ? "is-invalid" : ""}`}
              {...register("carModel", {
                required: "Please select a car model",
              })}
            >
              {/*<option value="">Select a car</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Convertible">Convertible</option>
              <option value="Truck">Truck</option>*/}
              {carModels.map((car) => (
                <option key={car.id} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
            {errors.carModel && (
              <div className="invalid-feedback">{errors.carModel.message}</div>
            )}
          </div>

          {/* Rental Start Date */}
          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">
              Rental Start Date
            </label>
            <input
              id="startDate"
              type="date"
              className={`form-control ${errors.startDate ? "is-invalid" : ""}`}
              {...register("startDate", { required: "Start date is required" })}
            />
            {errors.startDate && (
              <div className="invalid-feedback">{errors.startDate.message}</div>
            )}
          </div>

          {/* Rental End Date */}
          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">
              Rental End Date
            </label>
            <input
              id="endDate"
              type="date"
              className={`form-control ${errors.endDate ? "is-invalid" : ""}`}
              {...register("endDate", { required: "End date is required" })}
            />
            {errors.endDate && (
              <div className="invalid-feedback">{errors.endDate.message}</div>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4 py-2">
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CarRentalForm;
