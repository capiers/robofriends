import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img
        className="bg-dark-green br3"
        src={`https://robohash.org/${id}?size=200x200`}
        alt="robot"
      />

      <div className="ma2 fw5">{name}</div>
      <div className="fw1">{email}</div>
    </div>
  );
};

export default Card;
