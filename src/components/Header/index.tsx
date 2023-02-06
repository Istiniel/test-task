import React from 'react';
import st from '../../styles/App.module.scss';

// src
import burgImg from '../../assets/icons/icon.svg';
import arrowLeftNav from '../../assets/icons/nav_arrow_left.svg';

const Header = () => {
  return (
    <header>
      <div className={st.navMenu}>
        <ul className={st.navList}>
          <li className={st.navItem}>
            <img src={burgImg} alt="burger-menu" />
          </li>
          <li className={st.navItem}>
            <img src={arrowLeftNav} alt="menu-arrow" />
          </li>
          <li className={st.navItem + ' ' + st.navOption}>
            <h3>Просмотр</h3>
          </li>
          <li className={st.navItem + ' ' + st.navOption}>
            <h3>Управление</h3>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
