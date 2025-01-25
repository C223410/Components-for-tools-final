import React, { useState } from "react";

const ContactForm = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = () => {
    setIsVerified(true);
  };

  return (
    <div className="max-w-[1320px] mx-auto p-4">
      <header className="flex flex-col items-center my-11">
        <h1 className="text-[#D99904] font-[400]">---Send Us a Message---</h1>
        <hr className="w-[424px] mt-10 text-[#E8E8E8]" />
        <div className="flex justify-center items-center">
          <h1 className="py-7">CONTACT FORM</h1>
        </div>
        <hr className="w-[424px] text-[#E8E8E8]" />
      </header>

      <section className="bg-[#F3F3F3] p-12">
        <div className="flex flex-wrap gap-5">
          <div className="flex-1">
            <label className="block mb-2 font-semibold">Name*</label>
            <input
              type="text"
              className="w-full h-[40px] border-2 border-[#ffff] rounded-md bg-white px-3"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 font-semibold">Email*</label>
            <input
              type="email"
              className="w-full h-[40px] border-2 border-[#ffff] rounded-md bg-white px-3"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="block mb-2 font-semibold">Phone*</label>
          <input
            type="text"
            className="w-full h-[40px] border-2 border-[#ffff] rounded-md bg-white px-3"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mt-5">
          <label className="block mb-2 font-semibold">Message*</label>
          <textarea
            className="w-full h-[300px] border-2 border-[#ffff] rounded-md bg-white px-3 py-2 resize-none"
            placeholder="Enter your message here"
          ></textarea>
        </div>

        <div className="flex items-center mt-9">
          {!isVerified ? (
            <div className="flex items-center gap-3">
              <button
                onClick={handleVerify}
                className="text-gray-500 p-4 rounded-lg hover:bg-blue-600"
              >
                I'm not a robot
              </button>
              <img
                className="h-[78px]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1200px-RecaptchaLogo.svg.png"
                alt="Recaptcha logo"
              />
            </div>
          ) : (
            <div className="text-green-500 text-xl">✔ Verified!</div>
          )}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            className="flex items-center px-5 py-4 text-white rounded-lg"
            style={{ background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)" }}
          >
            <h1>Send Message</h1>
            <img src="paper-plane 1.svg" alt="Paper plane" className="ml-3" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
