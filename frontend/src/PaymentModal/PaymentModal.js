import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const PaymentModal = ({ orderId, name, amount }) => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const fetchHash = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/generate-hash",
          {
            merchant_id: "1226655",
            order_id: orderId,
            amount: amount,
            currency: "LKR",
            merchant_secret: "MTMzNDY3NzMyNTk4MTgxNDk2NDM3NDU3NDE3ODMwODYyNDU=",
          }
        );

        setHash(response.data.hash);
      } catch (error) {
        console.error("Error fetching hash:", error);
      }
    };

    fetchHash();
  }, [orderId, amount]);

  console.log("Hash", hash);

  const payment = {
    sandbox: true,
    merchant_id: "1226655",
    merchant_secret: "MTMzNDY3NzMyNTk4MTgxNDk2NDM3NDU3NDE3ODMwODYyNDU=",
    return_url: "http://sample.com/return",
    cancel_url: "http://sample.com/cancel",
    notify_url: "http://sample.com/notify",
    order_id: orderId,
    items: name,
    amount: amount,
    currency: "LKR",
    first_name: "Ushan",
    last_name: "Mihiranga",
    email: "ushan@gmail.com",
    phone: "0771234567",
    address: "No.1, Galle Road",
    city: "Colombo",
    country: "Sri Lanka",
    delivery_address: "No. 46, Galle road, Kalutara South",
    delivery_city: "Kalutara",
    delivery_country: "Sri Lanka",
    custom_1: "",
    custom_2: "",
    hash: hash,
  };

  window.payhere.onCompleted = function onCompleted(orderId) {
    console.log("Payment completed. OrderID:" + orderId);
  };

  window.payhere.onDismissed = function onDismissed() {
    console.log("Payment dismissed");
  };

  window.payhere.onError = function onError(error) {
    console.log("Error:" + error);
  };

  const pay = () => {
    window.payhere.startPayment(payment);
  };

  return (
    <div className="payment-modal-container">
      <button className="payhere-button" onClick={pay}>
        Pay with Payhere
      </button>
    </div>
  );
};

export default PaymentModal;
