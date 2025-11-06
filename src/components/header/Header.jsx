// import logoLight from '../../assets/logo_light.svg'
// import logoDark from '../../assets/logo_dark.svg'
// import './Header.css'

// export default function Header({ scrolled = false }) {
//     const src = scrolled ? logoDark : logoLight
//     const alt = scrolled ? 'logo dark' : 'logo light'
//     return (
//         <header className= {scrolled ? 'scrolled' : ''}>
//         <img src={src} alt={alt} className="site-logo"/>
//         <div>
//           <button type="button">Menu</button>
//           <button type="button">language</button>
//         </div>
//       </header>
//     )    
// }


// export default function Header({ scrolled = false }) {
//   const src = scrolled ? logoDark : logoLight;
//   const alt = scrolled ? "logo dark" : "logo light";

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300
//         font-[Segoe_UI,'Helvetica_Neue',Arial,sans-serif] text-base
//         px-8 md:px-12 lg:px-20 h-[70px]
//         ${scrolled
//           ? "bg-white/95 text-[#222] backdrop-blur-md shadow-sm"
//           : "bg-transparent text-white"
//         }`}
//     >
//       {/* Логотип */}
//       <img
//         src={src}
//         alt={alt}
//         className={`h-8 w-auto transition-transform duration-300 origin-left ${
//           scrolled ? "scale-95" : "scale-100"
//         }`}
//       />

//       {/* Кнопки */}
//       <div className="flex items-center gap-4">
//         <button
//           type="button"
//           className="px-4 py-2 rounded-md text-sm font-medium hover:opacity-80 transition-opacity"
//         >
//           Menu
//         </button>
//         <button
//           type="button"
//           className="px-4 py-2 rounded-md text-sm font-medium hover:opacity-80 transition-opacity"
//         >
//           Language
//         </button>
//       </div>
//     </header>
//   );
// }


import logoLight from "../../assets/logo_light.svg";
import logoDark from "../../assets/logo_dark.svg";

export default function Header({ scrolled = false }) {
  const src = scrolled ? logoDark: logoLight;
  const alt = scrolled ? "logo dark" : "logo light";

  return (
    <header
      className={`fixed flex justify-between z-50 top-0 left-0 right-0 md:py-5 py-1 px-1 md:px-10 items-center transition duration-300
        ${scrolled
          ? "bg-white/95 text-[#222] backdrop-blur-md shadow-sm"
          : "bg-transparent text-white"
        }`}
    >
       {/* Логотип + before-текст */}
      <div
        className={`relative flex items-center before:absolute before:left-full  before:top-1/2 before:-translate-y-1/2 before:text-lg before:font-semibold before:tracking-wide before:transition-all before:duration-500
          ${
            scrolled
              ? "before:opacity-100 before:translate-x-0 before:content-['CHARINITY'] before:  before:text-[#7789DC] before:text-[20px] before:font-sans"
              : "before:opacity-0 before:-translate-x-5 before:content-['']"
          }`}
      >
        <img
          src={src}
          alt={alt}
          className={`h-12 w-auto transition-transform duration-900 
            ${ scrolled ? "scale-95" : "mdscale-150 :scale-125" }`}
        />
      </div>

      {/* Кнопки */}
      <div className="flex items-center md:gap-4 gap-2">
        <button
          type="button"
          className={`border-2 border-solid rounded-b-[18px] rounded-l-[18px] p-2 duration-900 transition
        ${scrolled ? "opacity-70 " : "opacity-50 "}`}
        >
          Language
        </button>
        <button
          type="button"
          className={`border-2 border-solid rounded-b-[18px] rounded-r-[18px] p-2 duration-900 transition
        ${scrolled ? "opacity-70 " : "opacity-50 "}`}
        >
          Menu
        </button>
      </div>
    </header>
  );
}
