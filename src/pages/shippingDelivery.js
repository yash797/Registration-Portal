function ShippingDelivery() {
    return (
        <div className="flex flex-col justify-center items-center min-w-full leading-loose text-center space-y-4 py-8 flex-1 px-4">
            <span className="text-5xl md:text-6xl text-[#0891B2] font-poppins font-bold mb-3 filter drop-shadow-md">
                Shipping and Delivery
            </span>
            <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
                After successful payment of the membership fees, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
            <ol>
                <li className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
                    After the payment has been done successfully, users will get the paymentID which will be unique to them.
                </li>
                <li className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
                    Delivery of paymentID shall be done immediately after the payment has been completed by user. Using unique paymentID, user can confirm their successful registration at any point of time.
                </li>
            </ol>
            <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
                You agree to share information entered on this page with PICT CSI Student Branch (owner of this page) and Razorpay, adhering to applicable laws.
            </p>
        </div>
    );
}

export default ShippingDelivery;