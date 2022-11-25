import logo from "../assets/images/logo.svg";
import menu_open from "../assets/images/icon-menu.svg";
import menu_close from "../assets/images/icon-menu-close.svg";

import "./nav.css";

import { useState, useEffect, useRef } from "react";

import { nav } from "../static";

function Navigation() {
  const [open, setOpen] = useState(0);

  function open_menu() {
    setOpen(1);
  }
  function close_menu() {
    setOpen(0);
  }

  const menu = useRef();
  const open_btn = useRef();
  const trans = useRef();

  useEffect(() => {
    console.log(menu.current.className);
    if (open === 0) {
      menu.current.className = "hide-menu";
      open_btn.current.style.display = "block";
      trans.current.style.display = "none";
    } else {
      menu.current.className = "show-menu";
      open_btn.current.style.display = "none";
      trans.current.style.display = "block";
    }
  }, [open]);

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu-open" onClick={open_menu} ref={open_btn}>
        <img src={menu_open} alt="open menu" />
      </div>
      <div className="trans" ref={trans}></div>
      <div className="hide-menu" ref={menu}>
        <div className="close-icon" onClick={close_menu}>
          <img src={menu_close} alt="close menu" />
        </div>
        <ul>
          {nav.map((n) => (
            <li key={n.id}>{n.name}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
