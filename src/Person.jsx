import React, { useState } from 'react';
import AlertMessage from './AlertMessage';

/**
 * Person Component
 *
 * This is a React functional component that demonstrates several fundamental React concepts:
 *
 * 1. State Management using useState hook:
 *    - email: Stores and updates email input value
 *    - showAlert: Controls visibility of alert message
 *
 * 2. Event Handling:
 *    - handelEmailChange: Handles input changes
 *    - handelClick: Handles button click to show alert
 *    - handelResetForm: Handles form reset
 *
 * 3. Conditional Rendering:
 *    - Alert message is shown only when showAlert is true
 *
 * 4. Form Handling:
 *    - Controlled input component with value and onChange props
 *    - Form reset functionality
 *
 * 5. Component Composition:
 *    - Uses AlertMessage child component
 *
 * Note: This component uses Bootstrap classes for styling
 */

const Person = () => {
  const [email, setEmail] = useState('demo@test.se');
  const [showAlert, setShowAlert] = useState(false);

  const handelEmailChange = (event) => {
    console.log('>>>>>', event.target.value); // Check in Console to see updates.
    setEmail(event.target.value);
  };

  const handelClick = () => {
    setShowAlert(true);
  };

  const handelResetForm = () => {
    setEmail('');
    setShowAlert(false);
  };

  return (
    <>
      <div className="container mt-3">
        {showAlert && (
          <AlertMessage alertType="alert-success" message="Operation Done!" />
        )}

        <form>
          <div className="mb-3 mt-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handelEmailChange}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handelClick}
          >
            Click Me
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={handelResetForm}
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default Person;
