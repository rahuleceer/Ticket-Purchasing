import React, { useState } from "react";
import "./home.css";
import useAuth from "../context/context";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { orderlist, list, setOrderlist } = useAuth();
  const [quantity, setQuantity] = useState();

  const navigate = useNavigate();

  return (
    <div>
      <div className="nav">
        <span style={{ margin: "10px" }}>
          <h2 style={{ color: "white" }}>NeeV</h2>
        </span>
        <span className="fields">
          <span>
            <button
              style={{
                color: "white",
                backgroundColor: "darkgoldenrod",
                border: "0px",
              }}
              onClick={function (e) {
                navigate("/");
              }}
            >
              Movies
            </button>
          </span>
          <span
            style={{
              border: "1px solid black",
              borderRadius: "50%",
              padding: "4px",
            }}
          >
            🤵
          </span>
        </span>
      </div>
      <div>
        <span style={{ margin: "10px" }}>
          Number of Tickets:
          <input
            type="text"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </span>
        {list?.map((el) => {
          return (
            <div
              style={{
                margin: "5px",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "green",
                color: "white",
              }}
            >
              <h3 style={{ margin: "10px" }}>Theater: {el.name}</h3>
              <span style={{ margin: "10px" }}>movie: {el.movie_name}</span>
              <span style={{ margin: "10px" }}>${el.price}/ticket</span>
              <button
                style={{ margin: "10px" }}
                onClick={(e) => {
                  const arr = {};
                  arr.name = el.name;
                  arr.movie_name = el.movie_name;
                  arr.price = el.price;
                  arr.quantity = quantity == null ? 1 : quantity;
                  setOrderlist(arr);
                  navigate("/checkout");
                }}
              >
                Buy
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
