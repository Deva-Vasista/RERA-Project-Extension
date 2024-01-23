import React from "react";
import "./confirm.css"
const Confirm =()=>
{
    return (
        <div className="payment-container">
            <p>Your Payment has been successfully paid and your acknowledge number is EXT/231847/2509739084</p>
            <div className="btns">
                <button type="button">Print Application</button>
                <button type="button">Print Reciept</button>
            </div>
        </div>
    )
}
export default Confirm;