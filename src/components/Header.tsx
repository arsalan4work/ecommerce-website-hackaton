export default function Header() {
   return (
      <header> 

         {/* Navigation Top */}
         <div className="flex items-center gap-2 sm:gap-[200px] md:gap-[340px] lg:gap-[550px] justify-around text-sm bg-[#272343] text-gray-400 h-[45px]">

            {/* Navigation Top Shipping */}
            <div className="flex">
               {/* Navigation Top Check Icon */}
               <div> <i className="bi bi-check-lg"></i> </div>
               {/* Navigation Top Shipping Text */}
               <div> Free Shipping on all Orders Over &#36;50</div>
            </div>
            {/* Navigation Top Link */}
            <div className="flex gap-1 md:gap-5">
               <ul> Eng <i className="bi bi-arrow-down-short"></i></ul>
               <ul>Faqs</ul>
               <ul><i className="bi bi-exclamation-circle"></i> Need Help</ul>
            </div>

         {/* Navigation Top Ends! */}
         </div>


         {/* Navigation Middle */}
         <div className="flex h-[84px] items-center justify-around sm:gap-[200px] md:gap-[340px] lg:gap-[550px] bg-[#f0f2f3]">
            {/* Navigation Middle img */}
            <div>
               <img src="/logo.png" alt="Error" width={166} height={40}></img>
            </div>
            {/* Navigation Middle Tags */}
            <div className="bg-white text-black w-[120px] h-[44px] flex flex-row gap-5  items-center justify-center rounded-sm">
            <i className="bi bi-cart"></i> <a href="/cart"> Cart </a> <div className="bg-[#007580] text-white text-sm w-[20px] h-[20px] rounded-full text-center items-center"> 2 </div> 
            </div>
         </div>


         {/* Navigation Links Bottom */}
         <div className="h-[74px] bg-white flex items-center justify-evenly text-sm gap-5 sm:gap-[200px] md:gap-[340px] lg:gap-[550px] border-b-[1px] border-gray-300">
            <div className="flex gap-4">
            <ul className="text-[#007580]"> Home </ul>
            <a href="/all-product"> <ul className="text-gray-400"> Products </ul> </a>
            <a href="/faq"> <ul className="text-gray-400"> FAQ </ul> </a>
            <a href="/contact-us"> <ul className="text-gray-400"> Contact </ul> </a>
            <a href="/about-us"> <ul className="text-gray-400"> About </ul> </a>
            </div>
            {/* Navigation Text Bottom */}
            <div className="text-gray-400">Contact&#58;  <span className="text-black">(808) 555-0111</span></div>
         </div>
         {/* Navigation Bottom Ends! */}
      </header>
   )
}