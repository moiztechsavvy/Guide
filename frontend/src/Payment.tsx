import React from "react"
import StripeCheckout from "react-stripe-checkout"

function Payment() {
    
    function handleToken(token){
        console.log({token})
    }

    return(
        <div>
            <StripeCheckout
            token={handleToken}
            stripeKey="pk_test_51HAg8hJRViPyO798H15SRTazY1J2YUcJ00ybDeQdKGbzxtvmmzVYBiyTfonlZGLzWpNCoXumU4mHXHAIxIvxIgyB00FewYWuto" 
            billingAddress
            shippingAddress
            />
        </div>
    )
}
export default Payment