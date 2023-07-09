import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare,AiFillYoutube} from "react-icons/ai";
import "../../Styles/footer.scss"
import logo from "../../Images/whitelogo.png"

const Footer = () => {
  return (
    <>
    <div id="footer">
        
      <div className="box" id="firstbox">
        <img src={logo} alt="Logo" />
        <p>The home and elements needed to create beautiful products.</p>
        <div className="socialmedia">
          <a href="http://google.com"><AiFillFacebook/></a>
          <a href="http://google.com"><AiFillTwitterSquare/></a>
          <a href="http://google.com"><AiFillInstagram/></a>
          <a href="http://google.com"><AiFillYoutube/></a>
        </div>
      </div>
      <div className="box">
        <h4>Company</h4>
        <div className="links">
          <a href="http://google.com">About Us</a>
          <a href="http://google.com">Careers</a>
          <a href="http://google.com">Location</a>
          <a href="http://google.com">Our Blog</a>
          <a href="http://google.com">Reviews</a>
        </div>
      </div>
      
      <div className="box">
        <h4>Shop</h4>
        <div className="links">
          <a href="http://google.com">Game </a>
          <a href="http://google.com">Phone </a>
          <a href="http://google.com">Computers </a>
          <a href="http://google.com">Sport</a>
          <a href="http://google.com">Events</a>
        </div>
      </div>
      
      <div className="box">
        <h4>Support</h4>
        <div className="links">
          <a href="http://google.com">FAQs</a>
          <a href="http://google.com">Reviews</a>
          <a href="http://google.com">Contact Us</a>
          <a href="http://google.com">Shopping</a>
          <a href="http://google.com">Live Chat</a>
        </div>
      </div>
      
    </div>

    </>
  )
}

export default Footer
