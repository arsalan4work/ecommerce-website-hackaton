export default function AboutUs() {
   return(
      <>
      <div className="p-8 mb-[100px] mt-[100px]">
        {/* About Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#007580] text-white p-8 flex flex-col justify-center">
           <h2 className="text-2xl font-bold mb-4">About Us &ndash; Comforty</h2>
           <p className="mb-6 text-sm">
            At Comforty&#44; we believe that the right chair can transform your space and elevate your mood&#183; Specializing in ergonomic design&#44; premium materials&#44; and modern aesthetics&#44; we craft chairs that seamlessly blend style with functionality&#183;
           </p>
          <button className="bg-gradient-to-l bg-white text-teal-600 px-6 py-2 hover:bg-gray-700 w-[200px] h-[50px] mt-10 transition">
            View Collection
          </button>
          </div>
          <div>
          <img
            src="/our-product-8.png"
            alt="Error"
            width={600}
            height={400}
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-6">What Makes Our Brand Different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-4 gap-2 bg-[#f9f9f9]">
            {/* img */}
            <div className="items-start w-full">
            <img
            src="/delivery.png"
            alt="Error"
            width={24}
            height={24}
            /></div>
            <p className="font-medium text-[#1f686f]">Next day as standard</p>
            <p className="text-sm text-[#1f686f]">Order today&#44; and get your chair the next day as standard</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 gap-2 bg-[#f9f9f9]">
            <div className="items-start w-full">
            {/* img */}
            <img
            src="/checkmark-outline.png"
            alt="Error"
            width={24}
            height={24}
            /></div>
            <p className="font-medium text-[#1f686f]">Made by true artisans</p>
            <p className="text-sm text-[#1f686f]">Handcrafted chairs made with passion and craftsmanship</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 gap-2 bg-[#f9f9f9]">
            {/* img */}
            <div className="items-start w-full">
            <img
            src="/payment-card.png"
            alt="Error"
            width={24}
            height={24}
            /></div>
            <p className="font-medium text-[#1f686f]">Unbeatable prices</p>
            <p className="text-sm text-[#1f686f]">For materials and quality&#44; you wont find better prices anywhere</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 gap-2 bg-[#f9f9f9]">
            {/* img */}
            <div className="items-start w-full">
            <img
            src="/sprout.png"
            alt="Error"
            width={24}
            height={24}
            /></div>
            <p className="font-medium text-[#1f686f]">Recycled packaging</p>
            <p className="text-sm text-[#1f686f]">We use 100&#37; recycled and eco&ndash;friendly materials to save the planet</p>
          </div>
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-left">Our Popular Products</h2>
        <div className=" grid md:flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           <div className="flex flex-col items-left text-left">
              <img
              src="/sofa-1.png"
              alt="Popular suede sofa"
              width={400}
              height={300}
              className="w-[600px] h-[350px]"
              />
              <p className="mt-4 font-medium">The Popular suede sofa</p>
              <p className="text-gray-500">&#36;99&#183;00</p>
           </div>
           <div className="flex flex-col items-start text-left">
              <img
              src="/chair-1.png"
              alt="The Dandy chair"
              width={300}
              height={375}
              className="w-[250px] h-[350px]"
              />
              <p className="mt-4 font-medium">The Dandy chair</p>
              <p className="text-gray-500">&#36;99&#183;00</p>
           </div>
           <div className="flex flex-col items-start text-center">
              <img
              src="/chair-2.png"
              alt="The Dandy chair"
              width={300}
              height={375}
              className="w-[250px] h-[350px]"
              />
              <p className="mt-4 font-medium text-left">The Dandy chair</p>
              <p className="text-gray-500 text-left">&#36;99&#183;00</p>
           </div>
           
        </div>
      </div>
    </div>
      </>
   )
}