
import './Footer.css'

export default function Footer() {
    return (<footer class="footer">
  <div class="footer-social">
    <a href="#">Facebook</a> / 
    <a href="#"> Instagram</a> / 
    <a href="#"> Telegram</a>
  </div>

  <div class="footer-content">
    <div class="footer-column">
      <h4>Locations:</h4>
      <p>Ukraine</p>
      <p>Bulgaria</p>
    </div>
    <div class="footer-column">
      <h4>Telephone:</h4>
      <p>+380-96-781-29-27</p>
    </div>
    <div class="footer-column">
      <h4>Email:</h4>
      <p>charinity.school@gmail.com</p>
    </div>
    <div class="footer-column">
      <h4>Working hours:</h4>
      <p>Mon - Fri: 9 AM – 6 PM</p>
      <p>Sat - Sun: 9 AM – 4 PM</p>
    </div>
  </div>

  <div class="footer-bottom">
    <p>Charinity © 2023. All Rights Reserved.</p>
    <p class="designer">Designed by Oksanna Shenk</p>
  </div>
</footer>)
}