import './css/header.css'
import reactLogo from '../assets/react-logo.png'

const Header = () => {
  return(
    <section className="nav">
      <div className="nav-container">
        <div className="nav-wrapper">

          <img src={reactLogo} alt="" />
          <h5>ReactFacts</h5>

        </div>
      </div>
    </section>
  )
}

export default Header
