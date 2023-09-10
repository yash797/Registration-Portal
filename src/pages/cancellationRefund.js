function CancellationRefund() {
    return (
        <div className="flex flex-col justify-center items-center min-w-full leading-loose text-center space-y-4 py-8 flex-1 px-4">
            <span className="text-5xl md:text-6xl text-[#0891B2] font-poppins font-bold mb-3 filter drop-shadow-md">
                Cancellation and Refund
            </span>
            <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
                After successful payment of the membership fees, you hereby consent to our Privacy Policy and agree to its Cancellation and refund policies.
            </p>
            <ol>
                <li className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
                    After the payment, users shall not be given any facility of Cancellation or refund.
                </li>
                <li className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
                    Refunds will be allowed only if the payment was made successfully but was not intended. Still the payee has to contact the PCSB co-ordinator <strong>Dr. Kavita Sultanpure</strong> by contacting them at PICT campus.
                </li>
            </ol>
        </div>
    );
}

export default CancellationRefund;