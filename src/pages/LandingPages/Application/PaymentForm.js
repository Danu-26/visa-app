import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from 'axios';

 export default function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();

    const handlePayment = async () => {
        if (!stripe || !elements) {
            alert("Stripe has not been loaded yet. Please try again later.");
            return;
        }

        const cardElement = elements.getElement(CardElement);
        const { token, error } = await stripe.createToken(cardElement);

        if (error) {
            console.error("Payment Error:", error);
            alert(error.message);
            return;
        }

        // Send the token to the backend for processing
        try {
        await axios.post(
                "http://localhost:5000/api/visa/pay",
                {
                    amount: 100, // Amount in cents (e.g., 100 = $1.00)
                    currency: "usd",
                    token: token.id,
                },
                {
                    headers: {
                        'Content-Type': 'application/json', // Ensure content type is application/json
                    }
                }
            );

        
        } catch (err) {
            console.error("Payment request failed:", err);
            alert("Payment failed. Please try again.");
        }
    };

    return (
        <div>
            <h3>Enter Payment Details</h3>
            <CardElement />
            <button onClick={handlePayment} style={{ padding: "10px", background: "#007bff", color: "white", border: "none", cursor: "pointer", marginTop: "10px" }}>
                Pay Now
            </button>
        </div>
    )
}