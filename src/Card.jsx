import React from "react";


const Card = ({title, description, image, buttonAction, buttonText, cardStyle}) => {

    // const handleClick = (msg) => {
    //     alert(msg);
    //     console.log(msg);
    //   }

  return (
    <div className={`card my-3 ${cardStyle}`}>
      <img src={image} alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        <ul>
          <li>Some data</li>
        </ul>

      </div>
      <button className="btn btn-primary" onClick={buttonAction}>{buttonText}</button>
    </div>
  );
};

export default Card;
