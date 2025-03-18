import React from "react";
import Card from "./Card.jsx";

const handlePurchase = (plan) => {
  alert(`You have selected the ${plan} plan!`);
};

const Pricing = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Our pricing plans</h1>
      <div className="row">
        <div className="col-md-4">
          <Card
            cardStyle="border-secondary bg-secondary text-white"
            title="Basic Plan"
            description="Perfect for individuals starting out."
            image="https://placehold.co/150"
            buttonAction={() => handlePurchase("Basic")}
            buttonText="Choose Basic"
          />
        </div>
        <div className="col-md-4">
          <Card
            title="Pro Plan"
            description="Ideal for small teams or startups."
            image="https://placehold.co/150"
            buttonAction={() => handlePurchase("Pro")}
            buttonText="Choose Pro"
          />
        </div>
        <div className="col-md-4">
          <Card
            cardStyle="border-success bg-success text-white"
            title="Student Plan"
            description="Ideal for student That want pro features with a discount!"
            image="https://placehold.co/200"
            buttonAction={() => handlePurchase("Student")}
            buttonText="Choose Student"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
