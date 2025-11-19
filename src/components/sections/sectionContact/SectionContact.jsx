// import './SectionContact.css';

// export default function SectionContact() {
//     return (
//         <>
//         <section className="contact-section">
//         <div className="form-container">
//             <h2>WRITE US</h2>
//             <form>
//                 <div className="form-row">
//                     <div className="form-group">
//                         <label>Name</label>
//                         <input type="text" />
//                     </div>
//                     <div class="form-group">
//                         <label>Phone</label>
//                         <input type="text" />
//                     </div>
//                 </div>
//                 <div class="form-group">
//                     <label>Email</label>
//                     <input type="email" />
//                 </div>

//                 <div class="form-group">
//                     <label>Message</label>
//                     <input type="text" />
//                 </div>

//                 <div class="checkbox-group">
//                     <input type="checkbox" id="subscribe" />
//                     <label for="subscribe">Subscribe for our updates</label>
//                 </div>
//                 <button type="submit">Submit</button>

//                 <p className="privacy-note">*By clicking this button, you agree to our <a href="#">Privacy Policy</a></p>
//             </form>
//         </div>
//         <div className="text-container">
//             <h3>AND START YOUR PATH OF HARMONY WITH CHARINITY</h3>
//         </div>
//         </section>
//         <section className="contact-section">
//           <form>
//             <div className="form-group">
//                 <label>Name</label>
//                 <input type="text" />
//             </div>
//             <div className="form-group">
//                     <label>Email</label>
//                     <input type="email" />
//             </div>
//             <button type="submit">Submit</button>
//             <p className="privacy-note">*By clicking this button, you agree to our <a href="#">Privacy Policy</a></p>
//           </form>
//         </section>
//         </>
// )
// }

export default function SectionContact() {
  return (
    <>
      <section className="flex-row md:flex-row justify-center items-center md:px-5 mt-10 py-12 md:max-w-4/5 lg:max-w-3/4 mx-auto">
        {/* Форма */}
        <h2 className="text-center text-4xl font-serif mb-5 uppercase">WRITE US</h2>
        
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
          
          <form className="max-w-1/2">
            {/* Имя + Телефон */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex flex-col flex-1 pb-5">
                <label className="text-base mt-5 text-left font-serif leading-relaxed text-gray-500 max-w-xs">Name</label>
                <input
                  type="text"
                  className="border-0 border-b border-gray-400 bg-transparent outline-none py-2 text-base"
                />
              </div>
              <div className="flex flex-col flex-1 pb-5">
                <label className="text-base mt-5 text-left font-serif leading-relaxed text-gray-500 max-w-xs">Phone</label>
                <input
                  type="text"
                  className="border-0 border-b border-gray-400 bg-transparent outline-none py-2 text-base"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col pb-5">
              <label className="text-base mt-5 text-left font-serif leading-relaxed text-gray-500 max-w-xs">Email</label>
              <input
                type="email"
                className="border-0 border-b border-gray-400 bg-transparent outline-none py-2 text-base"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col pb-5">
              <label className="text-base mt-5 text-left font-serif leading-relaxed text-gray-500 max-w-xs">Message</label>
              <input
                type="text"
                className="border-0 border-b border-gray-400 bg-transparent outline-none py-2 text-base"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-3 my-5">
              <input type="checkbox" id="subscribe" className="w-5 h-5 accent-indigo-500" />
              <label htmlFor="subscribe" className="text-sm">
                Subscribe for our updates
              </label>
            </div>

            {/* Кнопка */}
            <button
              type="submit"
              className="btn"
            >
              Submit
            </button>

            {/* Примечание */}
            <p className="text-sm text-gray-600 mt-3">
              *By clicking this button, you agree to our{" "}
              <a href="#" className="underline text-gray-800">
                Privacy Policy
              </a>
            </p>
          </form>
          {/* Текст справа */}
        <div className=" md:pl-10 max-w-1/2 items-center justify-center text-left">
          <h3 className="text-2xl md:text-[28px] font-medium font-serif leading-snug">
            AND START YOUR PATH OF HARMONY WITH CHARINITY
          </h3>
        </div>
        </div>
      </section>

      {/* Вторая секция (упрощённая форма) */}
      <section className="flex flex-col justify-center md:justify-start md:px-5 mt-10 py-12 md:max-w-4/5 lg:max-w-3/4 mx-auto">
      {/* <div className=" flex flex-col justify-center "> */}
        <h2 className="flex self-center md:self-start md:text-left text-center text-2xl font-serif mb-5 uppercase font-light max-w-[500px]">
            Want to know more about Charinity?
        </h2>
        <form className="max-w-1/2 flex flex-col self-center md:self-start">
          <div className="flex flex-col pb-5">
            <label className="text-base mt-5 text-left font-serif leading-relaxed text-gray-500 max-w-xs">Name</label>
            <input
              type="text"
              className="border-0 border-b border-gray-400 bg-transparent outline-none py-2 text-base"
            />
          </div>
          <div className="flex flex-col pb-5">
            <label className="text-base mt-5 text-left font-serif leading-relaxed text-gray-500 max-w-xs">Email</label>
            <input
              type="email"
              className="border-0 border-b border-gray-400 bg-transparent outline-none py-2 text-base"
            />
          </div>
          <button
            type="submit"
            className="btn"
          >
            Submit
          </button>
          <p className="text-sm text-gray-600 mt-3">
            *By clicking this button, you agree to our{" "}
            <a href="#" className="underline text-gray-800">
              Privacy Policy
            </a>
          </p>
        </form>
      {/* </div> */}
        
      </section>
    </>
  );
}

