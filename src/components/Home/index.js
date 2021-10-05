// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="information">
      <div className="para1">
        <h1 className="heading">Clothes That Get You Noticed</h1>
        <p className="paragraph">
          Fashion is the part of daily air and it does not quite help that it
          changes all the time. Clothes have always been the marker of the era
          and we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fasion in
          your own way.
        </p>
        <button type="button" className="show-now">
          Show Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="fashion-image"
      />
    </div>
  </div>
)

export default Home
