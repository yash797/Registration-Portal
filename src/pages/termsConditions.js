function TermsConditions() {
    return (
        <div className="flex flex-col justify-center items-center min-w-full leading-loose text-center space-y-4 py-8 flex-1 px-4">
            <span className="text-5xl md:text-6xl text-[#0891B2] font-poppins font-bold mb-3 filter drop-shadow-md">
                Terms & Conditions
            </span>
            <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
                After successful payment of the membership fees, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
            <ol>
                <li className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
                    The personal information that we collect from you will be used to complete your registration at PICT CSI Student Branch & will be used to get you registered as a working member of Computer Society of India (CSI), India's oldest and largest society of computer professionals & students.
                </li>
                <li className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
                    The membership fees amount will not be refunded under any circumstances except for the cases mentioned below:
                    i. Re-registration of an already registered member.
                    ii. The registered member is not an active student of PICT at the time of registration.
                </li>
            </ol>
            <p className="text-white text-lg md:text-xl w-[20rem] md:w-[60rem]">
                You agree to share information entered on this page with PICT CSI Student Branch (owner of this page) and Razorpay, adhering to applicable laws.
            </p>
        </div>
    );
}

export default TermsConditions;