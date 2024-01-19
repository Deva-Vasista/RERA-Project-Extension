import React from "react";
import "./paywall.css"


const Paywall=()=>
{
    return(
        <div>
        <h1>PAYMENT</h1>
        <div className="container">
            <div id="warning">
                <p>*PLEASE DO NOT PRESS BACK OR REFRESH* FROM THIS POINT ONWARD</p>
            </div>
            <div className="sub-container">
                <div className="payment-details">
                  <h3 className="Headers">PAYMENT DETAILS </h3>  
                    <div className="payment-details-container">
                        <div>
                        <label for="token-number">6.1 Unique Token Number</label> 
                        <input type="text" id="token-number" value="PXC47V1W04261" readonly></input>
                    </div >
                    <div class="payment-details-container">
                        <label for="fees">6.2 RERA Total Fees to be Paid*</label>
                        <input type="text" id="fees" value="22534" readonly></input>
                        </div>
                    </div>
                </div>
                <div className="notice">
                    <h3 className="Headers">NOTICE</h3>
                    <p>You will be re-directed to Si ePay Payment Gateway from which you can pay this amount using "Net Banking", "Credit Card", "Debit Card" options available on ePayment Gateway RA. Total Fees to be Paid
                    <br></br>
                    In Corporate Account Net Banking Maker-Checker Scenario, Checker has to ensure to "Check and Approve transaction within 20 minutes post initiating the transaction to ensure successful transaction Falling to which, the transaction will be treated as Falled. For further Inquiry/refund please contact 581 ePay REFUND (Scenarios and Process)
                    <br></br>
                    As stated in detalled T&C, the paid fee does not in any way guarantee Issuance of services and the fees paid is not eligible for refund or chargeback in any case. B. When a candidate makes double payment by mistake, the refund (part/full) may be considered, as the Authority may decide, subject to
                    The user bring it to the notice of the GUJRERA authority by emall within 7 days of making such payment. Any request beyond 7 days will not be entertained
                    <br></br>
                    The email should be sent ayrera@gujarat.gov.in with subject line clearly mentioning "Request for Refund words along with other detalls of the transaction.
                    <br></br>
                    The refund process In case of double payment by mistake only), via the same source of payments made in such cases, will be initiated in 3 to 5 working days after receiving the refund request and due decision about the refund amount is taken by the GUJRERA Authority
                    <br></br>
                    <br/>
                    In case of auto-refund (when the amount does not reach GUJRERA Account), the time taken for credit depends on bank and varles from bank to bank and GUJRERA has no control over it. Hence, one may contact the respective bank for such transactions</p>
                </div>
            </div>
            <div className="tac">
                    <h3 className="Headers">TERMS AND CONDITIONS</h3>
                    <p>agree to all Terms and Condition defined by GUURERA using Online Payment Facility using this Portal detailed T&C can be found "Terms & Conditions Section on this website. Please accept Terms and Conditions.

                    The required Information as per the RERA act will be displayed in public domain Please affirm the declarations.

[We] solemnly affirm and declare that the particulars given in herein e correct to [my/our) knowledge and bellef and

nothing material has been concealed by [me/us] therefrom Please athrm the declarations We hereby affirm and declare that. I/We have read all the particulars on this website and in the event if this project is submitted as a New Project and found as "On-going at the timeof evaluation, I/We stand liable to abide by the actions taken as per the GUU RERA Authority Act Please affirm the declarations.
</p>
            </div>
            <div className="subbutns">
                <center>
                <button type="button" className="Btn">Previous</button>
                <button type="submit" className="Btn">Agree and pay</button>
                </center>
            </div>
        </div>
        </div>
    )
}


export default Paywall;