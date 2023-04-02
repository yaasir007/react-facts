import './css/main.css'

const Main = () => {
  return(
    <section className="main">
      <div className="main-container">
        <div className="main-wrapper">

          <div className="main__title">Fun facts about React</div>

          <ul className="main__facts">
            <li className="main__fact">Was first released in 2013</li>
            <li className="main__fact">Was originally created by Jordan Walke</li>
            <li className="main__fact">Has well over 100K stars on GitHub</li>
            <li className="main__fact">Is maintained by Facebook</li>
            <li className="main__fact">Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Main
