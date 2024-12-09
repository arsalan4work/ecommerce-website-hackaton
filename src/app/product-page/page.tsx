export default function SingleProductPage() {
   return (
     <>
       {/* Single Product Page */}
       <div className="flex flex-col md:flex-row m-auto mt-[100px] px-4 md:w-[1100px] mb-[100px]">
         {/* Single Product Page img */}
         <img src="/featured-2.png" alt="Error" width={500} height={550}></img>
 
         {/* Single Product Page Text */}
         <div className="flex flex-col w-full md:w-[300px] h-[350px] md:ml-[100px] justify-around text-left mt-6 md:mt-0">
           <h1 className="text-lg md:text-3xl font-bold mb-4"> Library Stool <br /> Chair </h1>
           <p className="text-center mb-2 w-[118px] h-[22px] rounded-full bg-[#029fae] text-white">
             $20.00 USD
           </p>
           <div className="border-b-[1px] border-gray-200 mt-4"></div>
           <p className="text-gray-400 mt-4 mb-6">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam at
             consectetur sed maxime ipsam facilis cupiditate sunt obcaecati
           </p>
           <a href="/cart">
             <button className="text-sm w-[130px] h-[40px] bg-[#029fae] text-white rounded-md">
               <i className="bi bi-cart"></i> Add to Cart
             </button>
           </a>
         </div>
       </div>
 
       {/* Featured Products */}
       <div className="mt-5 gap-10 mb-10 px-4 md:w-[1100px] m-auto">
         {/* Featured Product Text */}
         <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-xl md:text-3xl font-bold">
           <h1>Featured Products</h1>
           <p className="text-black text-sm font-semibold underline">View All</p>
         </div>
 
         {/* Featured Product Card Main */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-5">
           {/* Featured Product Card 1 */}
           <div className="m-auto">
             <img src="/featured-1.png" alt="Error" width={200} height={200}></img>
             <div className="flex justify-between items-end">
               <div className="flex flex-col gap-2">
                 <div className="flex justify-between mt-3 text-sm gap-5 md:gap-10">
                   Library Stool Chair
                   <div className="text-black font-semibold"> $99 </div>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Featured Product Card 2 */}
           <div className="m-auto">
             <img src="/featured-2.png" alt="Error" width={200} height={200}></img>
             <div className="flex justify-between items-end">
               <div className="flex flex-col gap-2">
                 <div className="flex justify-between mt-3 text-sm gap-5 md:gap-10">
                   Library Stool Chair
                   <div className="text-black font-semibold"> $99 </div>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Featured Product Card 3 */}
           <div className="m-auto">
             <img src="/featured-3.png" alt="Error" width={200} height={200}></img>
             <div className="flex justify-between items-end">
               <div className="flex flex-col">
                 <div className="flex justify-between mt-3 text-sm gap-5 md:gap-10">
                   Library Stool Chair
                   <div className="text-black font-semibold"> $99 </div>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Featured Product Card 4 */}
           <div className="m-auto">
             <img src="/featured-4.png" alt="Error" width={200} height={200}></img>
             <div className="flex justify-between items-end">
               <div className="flex flex-col">
                 <div className="flex justify-between mt-3 text-sm gap-5 md:gap-10">
                   Library Stool Chair
                   <div className="text-black font-semibold"> $99 </div>
                 </div>
               </div>
             </div>
           </div>
 
           {/* Featured Product Card 5 */}
           <div className="m-auto">
             <img src="/featured-4.png" alt="Error" width={200} height={200}></img>
             <div className="flex justify-between items-end">
               <div className="flex flex-col">
                 <div className="flex justify-between mt-3 text-sm gap-5 md:gap-10">
                   Library Stool Chair
                   <div className="text-black font-semibold"> $99 </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </>
   );
 }
 