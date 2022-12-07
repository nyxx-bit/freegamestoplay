import React from "react";

const GameItem = ({ item }) => {
  const OnClick = () => {
    window.location.href = item.game_url
  }

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.thumbnail} alt="" />
        </div>
        <div className="card-back" onClick={OnClick}>
          <h1>{item.title}</h1>
          <ul>
            <li>
              <strong>Game Name:</strong> {item.title}
            </li>
            <li>
              <strong>Platform:</strong> {item.platform}
            </li>
            <li>
              <strong>Developer:</strong> {item.developer}
            </li>
            <li>
              <strong>Release Date:</strong> {item.release_date}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
