import './css/header.css'
import reactLogo from '../assets/reactL.svg'

const Header = () => {
  return(
    <section className="nav">
      <div className="nav-container">
        <div className="nav-wrapper">
          <img src={reactLogo} alt="React Logo" className='nav-logo'/>
          <h5>ReactFacts</h5>
        </div>
      </div>
    </section>
  )
}

export default Header
