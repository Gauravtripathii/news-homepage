import "./new.css";
import { new_news } from "../static";

function New() {
  return (
    <div className="new-section">
      <div className="container">
        <div className="title">New</div>
        {new_news.map((n)=>(
          <div className={n.id===2? "card last-card" : "card"} key={n.id}>
            <div className="c-title">{n.title}</div>
            <div className="c-para">{n.para}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default New