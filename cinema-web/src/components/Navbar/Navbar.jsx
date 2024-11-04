import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { HOMEPAGE } from '../../utilities/Rotte';
import "../../styles/SwitchButtonStyle.css";
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/slice/themeSlice';
import ThemeSwitcher from '../../utilities/ThemeSwitcher';
import logoBlack from '../../assets/cinemood-black.png';
import logoWhite from '../../assets/cinemood-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();
  const modePage = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const goHomepage = () => {
    history.push(HOMEPAGE);
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <nav
      className={modePage === 'dark' ? "navbar navbar-dark bg-dark" : "navbar navbar-light"}
      style={{ backgroundColor: modePage === 'light' ? "#e3e3e3" : undefined , height: '100%'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

        <img
          src={modePage === 'dark' ? logoBlack : logoWhite}
          alt="Logo"
          style={{
            border: '0px',
            cursor: 'pointer',
            marginLeft: '16px',
            width: '150px'
          }}
          onClick={goHomepage}
        />

        <div style={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
          <ThemeSwitcher modePage={modePage} handleThemeToggle={handleThemeToggle} />
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: modePage === 'dark' ? 'white' : 'black', marginLeft: '16px', cursor: 'pointer' }}
            onClick={() => { /* Aggiungi logica per login/registrazione */ }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
