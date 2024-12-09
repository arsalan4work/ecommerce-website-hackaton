export default function Footer() {
   return (
      <footer>
         {/* Footer Main */}
         <div className="flex leading-8 flex-col justify-evenly sm:flex-row">

            {/* Footer 1 */}
            <div>
               {/* Footer 1 Logo */}
               <img className="w-[168px] h-[40px] mb-5" src="/logo.png" alt="Error" width={168} height={40}></img>
               {/* Footer 1 Text */}
               <p className="text-gray-400">Vivamus tristique odio sit amet velit semper,<br />
               eu posuere trupis interdum. <br />
               Cras egestas purus</p>
               {/* Footer 1 Icons */}
               <div className="flex-row">
               <i className="bi bi-facebook text-[#007580] mr-3"></i>
               <i className="bi bi-instagram text-gray-400 mr-3"></i>
               <i className="bi bi-twitter text-gray-400 mr-3"></i>
               <i className="bi bi-pinterest text-gray-400 mr-3"></i>
               <i className="bi bi-youtube text-gray-400"></i>
               </div>
            </div>

            {/* Footer 2 */}
            <div>
               {/* Footer 2 Text */}
               <h3 className="text-gray-400 capitalize mb-2"> CATEGORY </h3>

               <ul> Sofa </ul>
               <ul> Arm chair </ul>
               <ul> Wing Chair </ul>
               <ul className="underline text-[#007580]"> Desk Chair</ul>
               <ul> Wooden Chair </ul>
               <ul> Park Bench </ul>
            </div>

            {/* Footer 3 */}
            <div>
               {/* Footer 3 Text */}
               <h3 className="text-gray-400 capitalize mb-2"> SUPPORT </h3>

               <ul> Help & Support </ul>
               <ul> Terms % conditions </ul>
               <ul> Privacy Policy </ul>
               <ul> Help </ul>
            </div>

            {/* Footer 4 */}
            <div>
               {/* Footer 4 Text */}
               <h3 className="text-gray-400 capitalize mb-2">NEWS LETTER</h3>
               {/* Footer 4 News Letter */}
               <div className="mb-2">
                  <div className=" text-gray-400 w-[285px] h-[46px] border-gray-300 rounded-md border-[1px]"> Your Email </div> 
                  <button className=" bg-[#007580] w-[127px] h-[46] text-center rounded-md mt-3 text-white" > Subscribe </button>
               </div>
               {/* Footer 4 Text */}
               <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Debitis ab magni eligendi sequi dolor.</p>
            </div>

            {/* Footer Main Ends! */}
         </div>

         {/* Footer Bottom */}
         <div className="flex flex-col sm:flex-row gap-2 lg:gap-[400px] mt-6 border-t-[1px] border-gray-300 justify-around">
            {/* Footer Bottom Text */}
            <p className="text-gray-400"> &#169; 2021 - Blogy - Designed % Develop by <span className="text-black">Zakirsoft</span></p>
            {/* Footer Bottom Image */}
            <div>
               <img src="/footer-payments.png" alt="Error" width={227} height={27}></img>
            </div>
         </div>
         {/* Footer Bottom Ends! */}
      </footer>
   )
}