import React, {useState} from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import account from "../../images/logo1.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import PopupBurger from "../PopupBurger/PopupBurger";

function Navigation(props) {
  const [isPopupBOp, setisPopupBOp] = useState(false);
  const setActive = ({isActive}) =>
  isActive ? "navigation__link navigation__link_act" : "navigation__link";

  function handleBurgerMenuCloseClick() {
    setisPopupBOp(false);
  }

  function handleBurgerMenuOpenClick() {
    setisPopupBOp(true);
  }

  return (
    <section className="navigation">
      <div className="navigation__links">
        <NavLink to="/" className={ setActive }>Анкета</NavLink>
        <NavLink
        to="/"
        className={ setActive }>
          Мои документы(исправить маршрут в navigation)
          </NavLink>
      </div>
      <NavLink to="/profile" className="navigation__profile">
        <img className="navigation__profile-img" src={account} alt="Кнопка Аккаунт"/>
      </NavLink>
      <BurgerMenu onClick={ handleBurgerMenuOpenClick }/>
      <PopupBurger
      isOpen={ isPopupBOp }
      isClose={ handleBurgerMenuCloseClick }/>
    </section>
  );
}

export default Navigation;