import "./flash.css";
import { news_flash } from "../static";
import im1 from "../assets/images/image-retro-pcs.jpg"
import im2 from "../assets/images/image-top-laptops.jpg"
import im3 from "../assets/images/image-gaming-growth.jpg"

function Flash() {
  return (
    <div className="flash">
      {news_flash.map((nf) => (
        <div className="card" key={nf.id}>
          <div className="image">
            <img src={nf.id === 1? im1 : nf.id === 2? im2 : im3} alt="img" />
          </div>
          <div className="right">
            <div className="no">0{nf.id}</div>
            <div className="title">{nf.title}</div>
            <div className="para">{nf.para}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Flash;
