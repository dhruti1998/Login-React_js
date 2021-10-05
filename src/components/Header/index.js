// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-el">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="image-logo"
    />
    <ul className="ul-list">
      <li className="list-item">Home</li>
      <li className="list-item">Products</li>
      <li className="list-item">Cart</li>
      <li className="list-item">
        <button type="button" className="button1">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)

export default Header
