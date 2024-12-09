export default function ContactUs() {
   return(
      <section className="px-6 py-12 bg-gray-50 mt-[100px] mb-[100px]">
      {/* Header */}
      <div className="text-center mb-24">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Get In Touch With Us</h2>
        <p className="mt-2 text-gray-400">
          For More Information About Our Poducts & Services, Please Feel Free To Drop Us <br />
          An Email. Our Staff Always Here To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* Content */}
      <div className="md:flex md:justify-center gap-[220px]">
        {/* Contact Information */}
        <div className="mb-8 md:mb-0">
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">
                <img src="/vector-1.png" alt="Error" width={20} height={20}></img>
              </span>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Address</h3>
                <p className="">
                  236 5th SE Avenue, New <br />
                   York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">
                <img src="/vector-2.png" alt="Error" width={20} height={20}></img>
              </span>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-8789</p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start gap-4">
              <span className="text-2xl">
                <img src="/vector-3.png" alt="Error" width={20} height={20}></img>
              </span>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Abc"
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block  font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Abc@gmail.com"
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label htmlFor="subject" className="block  font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="This is optional"
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block  font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Hi! I'd like to ask about..."
              rows={4}
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-[230px] h-[55px] bg-[#029fae] text-white py-2 rounded-lg transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Features */}
      <div className="mt-12 h-[250px] items-center flex justify-around bg-gray-100 py-6 shadow-md">
        <div className="text-left gap-3 flex">
          <span className="text-2xl text-gray-600">
          <img src="/trophy-1.png" alt="Error" width={60} height={60}></img>
          </span>
          <div className="flex flex-col">
          <p className="mt-2 text-gray-800 font-semibold">High Quality</p>
          <p className="text-gray-500">Crafted from top materials</p>
          </div>
        </div>
        <div className="text-left gap-3 flex">
          <span className="text-2xl text-gray-600">
          <img src="/guarantee.png" alt="Error" width={60} height={60}></img>
          </span>
          <div className="flex flex-col">
          <p className="mt-2 text-gray-800 font-semibold">Warranty Protection</p>
          <p className="text-gray-500">Over 2 years</p>
          </div>
        </div>
        <div className="text-left gap-3 flex">
          <span className="text-2xl text-gray-600">
          <img src="/customer-support.png" alt="Error" width={60} height={60}></img>
          </span>
            <div className="flex flex-col">
               <p className="mt-2 text-gray-800 font-semibold">24/7 Support</p>
               <p className="text-gray-500">Dedicated support</p>
            </div>
        </div>
      </div>
    </section>
   )
}