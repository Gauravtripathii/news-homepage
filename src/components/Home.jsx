import "./home.css";

import { active } from "../static";

function Home() {
  return (
    <div className='home'>
      <div className="profile-image"></div>
      <div className="title">
        {active.title}
      </div>
      <div className="para">
        {active.para}
      </div>
      <div className="button">
        {active.button_text}
      </div>
    </div>
  )
}

export default Home;