import { FaSun, FaMoon } from 'react-icons/fa'; // Nuove icone per maggiore chiarezza
import { useState } from 'react';

function ThemeSwitcher({ modePage, handleThemeToggle }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="theme-switch-container"
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        cursor: 'pointer',
        gap: '8px', 
        position: 'relative' 
      }}
      onClick={handleThemeToggle}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <div 
          style={{ 
            position: 'absolute', 
            top: '-45px', 
            left: '-10px', 
            padding: '8px', 
            backgroundColor: modePage === 'dark' ? '#000' : '#fff', 
            color: modePage === 'dark' ? '#fff' : '#000',
            borderRadius: '8px',
            border: '1px solid black',
            fontSize: '14px',
            whiteSpace: 'nowrap'
          }}
        >
          {modePage === 'dark' ? 'Passa al tema chiaro' : 'Passa al tema scuro'}
        </div>
      )}

      {modePage === 'dark' ? (
        <FaSun size={32} color="#FFD700" /> // Icona sole per il tema chiaro
      ) : (
        <FaMoon size={32} color="#000" /> // Icona luna per il tema scuro
      )}
    </div>
  );
}

export default ThemeSwitcher;
