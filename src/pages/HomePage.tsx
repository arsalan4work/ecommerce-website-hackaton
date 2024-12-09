export default function HomePage() {
   return (
      <>
         {/* Main Home Page */}
         <div>
            {/* Home Image */}
            <div className="m-auto lg:h-[750px] lg:w-[1000px] sm:w-full sm:h-auto">
               <img
                  className="rounded-br-[40px]"
                  src="/home-image.png"
                  alt="Error"
                  width={1321}
                  height={850}
               ></img>
            </div>

            {/* Company Logos */}
            <div className="grid grid-cols-4 sm:flex sm:flex-wrap justify-evenly">
               <img src="/home-logo-1.png" alt="Error" width={80} height={80}></img>
               <img src="/home-logo-2.png" alt="Error" width={80} height={80}></img>
               <img src="/home-logo-3.png" alt="Error" width={80} height={80}></img>
               <img src="/home-logo-4.png" alt="Error" width={80} height={80}></img>
               <img src="/home-logo-5.png" alt="Error" width={80} height={80}></img>
               <img src="/home-logo-6.png" alt="Error" width={80} height={80}></img>
               <img src="/home-logo-7.png" alt="Error" width={80} height={80}></img>
            </div>
         </div>

         {/* Featured Products */}
         <div className="mt-5 gap-5 mb-10 md:w-[1100px] sm:w-full m-auto">
            {/* Featured Product Text */}
            <div className="text-xl md:text-3xl font-bold">
               <h1> Featured Product </h1>
            </div>

            {/* Featured Product Card Main */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
               {/* Featured Product Card 1 */}
               <div className="m-auto">
                  <a href="/product-page">
                     <img src="/featured-1.png" alt="Error" width={250} height={250}></img>
                  </a>
                  <div className="flex justify-between items-end mt-2">
                     <div className="flex flex-col gap-2">
                        <div className="flex gap-2 text-[#029fae]">Library Stool Chair</div>
                        <div className="flex flex-row gap-3 items-center">
                           <div> $20 </div>
                           <div className="text-gray-400 line-through text-sm"> $30 </div>
                        </div>
                     </div>
                     <div className="w-[34px] h-[30px] rounded-md text-center bg-[#007580]">
                        <i className="bi bi-cart text-white"></i>
                     </div>
                  </div>
               </div>

               {/* Featured Product Cards 2, 3, and 4 */}
               {[2, 3, 4].map((num) => (
                  <div key={num} className="m-auto">
                     <a href="/product-page">
                        <img
                           src={`/featured-${num}.png`}
                           alt="Error"
                           width={250}
                           height={250}
                        ></img>
                     </a>
                     <div className="flex justify-between items-end mt-2">
                        <div className="flex flex-col gap-2">
                           <div className="text-[#029fae]">Library Stool Chair</div>
                           <div> $20 </div>
                        </div>
                        <div>
                           <i className="bi bi-cart"></i>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Top Categories */}
         <div className="m-auto mt-[100px] md:w-[1100px] sm:w-full">
            <div className="text-xl md:text-3xl font-bold text-left md:ml-[12%]">
               Top Categories
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-10 mt-5">
               {[1, 2, 3].map((num, index) => (
                  <img
                     key={index}
                     src={`/category-${num}.png`}
                     alt="Error"
                     width={250}
                     height={250}
                  ></img>
               ))}
            </div>
         </div>

         {/* Hot Category */}
         <div className="mt-[150px] flex flex-col md:flex-row m-auto md:w-[1100px] sm:w-full gap-5">
            <div className="flex items-center">
               <h3 className="text-vertical text-lg tracking-widest">
                  EXPLORE NEW AND POPULAR STYLES
               </h3>
            </div>
            <div>
               <img
                  className="rounded-md"
                  src="/hot-category-1.png"
                  alt="Error"
                  width={525}
                  height={525}
               ></img>
            </div>
            <div className="grid grid-cols-2 gap-5">
               {[2, 3, 4, 5].map((num) => (
                  <img
                     key={num}
                     className="rounded-sm"
                     src={`/hot-category-${num}.png`}
                     alt="Error"
                     width={250}
                     height={250}
                  ></img>
               ))}
            </div>
         </div>

         {/* Our Products */}
         <div className="m-auto mt-[150px] md:mb-[200px] mb-[100px] md:w-[1100px] sm:w-full">
            <div className="text-lg md:text-3xl text-center mb-10 font-bold">
               Our Products
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
               {[...Array(8)].map((_, index) => (
                  <div key={index}>
                     <img
                        className="rounded-sm"
                        src={`/our-product-${index + 1}.png`}
                        alt="Error"
                        width={250}
                        height={250}
                     ></img>
                     <p className="mt-2">Library Stool Chair</p>
                     <div className="flex justify-between items-center">
                        <p> $20 </p>
                        <i className="bi bi-cart"></i>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}
