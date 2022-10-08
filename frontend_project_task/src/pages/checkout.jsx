import React, {useState} from 'react'
import './home.css'
import useAuth from "../context/context";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

    const { setOrderlist, orderlist} = useAuth();
    const [cardNumber, setCardNumber] = useState();
    const [securityDigits, setSecurityDigits] = useState();

    const total= orderlist.quantity * orderlist.price + 90;

    const navigate = useNavigate();

  return (
    <div>
      <div className="nav">
        <span style={{margin: "10px"}}>
          <h2 style={{ color: "white"}}>NeeV</h2>
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
                setOrderlist();
                navigate("/");
              }}
            >
              Movies
            </button>
          </span>
          <span style={{border: "1px solid black", "borderRadius": "50%", padding: "4px"}}>🤵</span>
        </span>
      </div>
      <div style={{display:"flex", "flex":"1", margin:"5px"}}>
        <div style={{display: "flex", margin: "5px",flexDirection: "column", marginRight: "20px"}}>
            <div style={{border : "1px solid black", borderRadius: "1px", width: "100%",padding:"10px", backgroundColor:"lightgray"}}>
                <h2>Delivery ✔️</h2>
                <h3>Mobile Entry - Free</h3>
                <p>Tickets are availble by Sun Apr 3, 2022</p>
                <p>These tickets are directly transfered to you from a trusted seller. We will email you the instructions 
                    on how to accept them on the origional ticket provider's mobile number.
                </p>
            </div>
            <div style={{border : "1px solid black",marginTop:"10px", borderRadius: "1px", width: "100%",padding:"10px", backgroundColor:"lightgray"}}>
                <h2>Payment ✔️</h2>
                <h3>Use Credit / Debit Card</h3>
                <p>Card Number: <input type="text" value={cardNumber} required onChange={(e)=>{
                    setCardNumber(e.target.value);
                }} /></p>
                <p>Security Code</p>
                <input type="text" required value={securityDigits} onChange={(e)=>{
                    setSecurityDigits(e.target.value);
                }}/>
            </div>
        </div>
        <div style={{border : "1px solid black", borderRadius: "1px",margin: "5px",padding:"10px", backgroundColor:"lightgray"}}>
                <div style={{display: "flex", "justifyContent": "space-between"}}>
                   <span><h3>Total </h3></span>
                   <span><h3> ${total} </h3></span>
                </div>
                <h3>Tickets</h3>
                <div style={{display: "flex", "justifyContent": "space-between"}}>
                   <span>Tickets: ${orderlist.price}*{orderlist.quantity}</span>
                   <span>${orderlist.quantity*orderlist.price}</span>
                </div>
                <h3>Note for seller</h3>
                <p>There are few no-risk activities during the Covid-19 pandemic, but there are ways to reduce risks. Fully vaccinated people are, of course, at much lower risk of contracting and spreading coronavirus than unvaccinated people. CNN Medical Analyst Dr. Leana Wen advises approaching your decisions with that in mind. This story has been updated to reflect the US Centers for Disease Control and Prevention’s new guidance on mask wearing issued May 13</p>
                <h3>Fees</h3>
                <div style={{display: "flex", "justifyContent": "space-between"}}>
                   <span>Service Fee: $44*2</span>
                   <span>$88</span>
                </div>
                <div style={{display: "flex", "justifyContent": "space-between"}}>
                   <span>Order Processing Fee</span>
                   <span>$2</span>
                </div>
                <h3>Delivery Entry</h3>
                <div style={{display: "flex", "justifyContent": "space-between"}}>
                   <span>Mobile Entry</span>
                   <span>Free</span>
                </div>
                <button style={{border:"0px",color:" blue", padding:"5px", border:"0",marginTop:"10px"}} onClick={(e)=>{
                    alert("Order Cancelled Successfully");
                    setOrderlist();
                    navigate('/');
                }}>
                    cancel order
                </button>
                {/* <div><input type="checkbox" /> I have read and agree to current terms & conditions</div> */}
                <button style={{backgroundColor:"green", color: "white", width: "100%", padding:"5px", border:"0",marginTop:"10px"}} onClick={(e)=>{
                    if(!cardNumber || !securityDigits){
                        alert("Please fill card Details");
                        navigate('/checkout');
                    }else{
                        setOrderlist();
                        navigate('/');
                        alert("Order Placed Successfully");
                    }
                }}>Place Order</button>
        </div>
      </div>
    </div>
  );
}
