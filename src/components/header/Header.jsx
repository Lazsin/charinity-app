import logoLight from '../../assets/logo_light.svg'
import logoDark from '../../assets/logo_dark.svg'
import './Header.css'

export default function Header({ scrolled = false }) {
    const src = scrolled ? logoDark : logoLight
    const alt = scrolled ? 'logo dark' : 'logo light'
    return (
        <header className={scrolled ? 'scrolled' : ''}>
        <img src={src} alt={alt} className="site-logo"/>
        <div>
          <button type="button">Menu</button>
          <button type="button">language</button>
        </div>
      </header>
    )    
}