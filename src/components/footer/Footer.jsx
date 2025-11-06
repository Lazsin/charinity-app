// import './Footer.css'

// export default function Footer() {
//     return (<footer class="footer">
//   <div class="footer-social">
//     <a href="#">Facebook</a> / 
//     <a href="#"> Instagram</a> / 
//     <a href="#"> Telegram</a>
//   </div>

//   <div class="footer-content">
//     <div class="footer-column">
//       <h4>Locations:</h4>
//       <p>Ukraine</p>
//       <p>Bulgaria</p>
//     </div>
//     <div class="footer-column">
//       <h4>Telephone:</h4>
//       <p>+380-96-781-29-27</p>
//     </div>
//     <div class="footer-column">
//       <h4>Email:</h4>
//       <p>charinity.school@gmail.com</p>
//     </div>
//     <div class="footer-column">
//       <h4>Working hours:</h4>
//       <p>Mon - Fri: 9 AM – 6 PM</p>
//       <p>Sat - Sun: 9 AM – 4 PM</p>
//     </div>
//   </div>

//   <div class="footer-bottom">
//     <p>Charinity © 2023. All Rights Reserved.</p>
//     <p class="designer">Designed by Oksanna Shenk</p>
//   </div>
// </footer>
// )
// }


export default function Footer() {
  return (
    <footer className="bg-[radial-gradient(circle_at_top,#6BBBDB_0%,#6BBBDB_10%,#7789dc_40%,#7789dc_100%)] text-white px- py-10 text-left">
      {/* Соцсети */}
      <div className="mb-8 text-left text-sm px-10">
        <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Facebook</a> /{" "}
        <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Instagram</a> /{" "}
        <a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Telegram</a>
      </div>

      {/* Контент */}
      <div className="flex md:justify-center px-5 justify-left items-start gap-10 flex-wrap mb-8">
        <div className="text-left">
          <h4 className="font-semibold text-sm mb-1 opacity-90">Locations:</h4>
          <p className="m-0 text-sm opacity-90">Ukraine</p>
          <p className="m-0 text-sm opacity-90">Bulgaria</p>
        </div>

        <div className="text-left">
          <h4 className="font-semibold text-sm mb-1 opacity-90">Telephone:</h4>
          <p className="m-0 text-sm opacity-90">+380-96-781-29-27</p>
        </div>

        <div className="text-left">
          <h4 className="font-semibold text-sm mb-1 opacity-90">Email:</h4>
          <p className="m-0 text-sm opacity-90">charinity.school@gmail.com</p>
        </div>

        <div className="text-left">
          <h4 className="font-semibold text-sm mb-1 opacity-90">Working hours:</h4>
          <p className="m-0 text-sm opacity-90">Mon - Fri: 9 AM – 6 PM</p>
          <p className="m-0 text-sm opacity-90">Sat - Sun: 9 AM – 4 PM</p>
        </div>
      </div>

      {/* Нижняя часть */}
      <div className="border-t px-10 border-white/30 mt-5 pt-5 flex justify-between items-center text-xs flex-wrap opacity-90">
        <p>Charinity © 2023. All Rights Reserved.</p>
        <p className="opacity-60">Designed by Oksanna Shenk</p>
      </div>
    </footer>
  );
}
