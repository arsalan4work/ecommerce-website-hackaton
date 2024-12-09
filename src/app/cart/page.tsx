export default function Cart() {
   return(
      <>
      {/* Cart Main */}

      <div className="flex flex-col md:flex-row gap-8 p-8 mt-[100px] mb-[100px]">
  {/* <!-- Bag Section --> */}
  <div className="flex-1">
    <h2 className="text-2xl mb-4 font-bold">Bag</h2>
    <div className="space-y-6">



       {/* <!-- Item 1 --> */}
      <div className="flex items-start gap-4 border-b pb-4">
         {/* img */}
        <img src="/our-product-3.png" alt="Error" width={100} height={100} className="w-[100px] h-[100px] object-cover" />

        {/* Cart Content */}
        <div className="flex-1">
         {/* Heading */}
          <h3 className="text-lg font-medium">Library Stool Chair</h3>
          {/* Text */}
          <p className="text-sm text-gray-400 mt-4 mb-2">Ashen Slate/Cobalt Bliss</p>
          {/* Text Flex */}
          <div className="flex gap-10">
            <p className="text-sm text-gray-400">Size L</p>
            <p className="text-sm text-gray-400">Quantity: 1</p>
          </div>
          {/* Heart Trash */}
          <div className="flex gap-3 mt-2">
             <i className="bi bi-heart"></i>
             <i className="bi bi-trash3"></i>
          </div>
        </div>
        {/* Pricing */}
        <div className="text-right">
          <p className="text-lg font-medium">MRP: $99</p>
          <div className="flex space-x-2 mt-2 gap-3">
            {/* Check Icon */}
            <button className="text-gray-400 hover:text-gray-800">
               <i className="bi bi-check-lg"></i>
            </button>
            {/* Cross Icon */}
            <button className="text-gray-400 hover:text-gray-800">
               <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>


      {/* <!-- Item 2 --> */}
      <div className="flex items-start gap-4 border-b pb-4">
         {/* img */}
        <img src="/our-product-5.png" alt="" width={100} height={100} className="w-[100px] h-[100px] object-cover" />

        {/* Cart Content */}
        <div className="flex-1">
         {/* Heading */}
          <h3 className="text-lg font-medium">Library Stool Chair</h3>
          {/* Text */}
          <p className="text-sm text-gray-400 mt-4 mb-2">Ashen Slate/Cobalt Bliss</p>
          <div className="flex gap-10">
            <p className="text-sm text-gray-400">Size L</p>
            <p className="text-sm text-gray-400">Quantity: 1</p>
          </div>
          {/* Heart Trash */}
          <div className="flex gap-3 mt-2">
             <i className="bi bi-heart"></i>
             <i className="bi bi-trash3"></i>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-medium">MRP: $99</p>
          <div className="flex space-x-2 mt-2 gap-3">
            <button className="text-gray-400 hover:text-gray-800">
               <i className="bi bi-check-lg"></i>
            </button>
            <button className="text-gray-400 hover:text-gray-800">
               <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>



  {/* <!-- Summary Section --> */}
  <div className="w-full lg:w-1/3 p-6 rounded-lg">
    {/* Text */}
    <h2 className="text-2xlh mb-4">Summary</h2>
    <div className="space-y-4">
      {/* Inner Text */}
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>$198.00</p>
      </div>
      {/* Inner Text 2 */}
      <div className="flex justify-between">
        <p>Estimated Delivery & Handling</p>
        <p>Free</p>
      </div>
      {/* Total Text */}
      <div className="flex justify-between border-t-[1px] border-b-[1px] border-gray-200">
        <p>Total</p>
        <p>$198.00</p>
      </div>
    </div>
    {/* Button */}
    <button className="mt-6 w-full bg-[#029fae] rounded-full text-white py-2 hover:bg-teal-600 transition">
      Member Checkout
    </button>
  </div>

</div>
{/* Cart Ends! */}
      </>
   )
}