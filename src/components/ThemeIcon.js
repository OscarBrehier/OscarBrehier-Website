import { FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from '../hooks/useDarkMode';

const ThemeIcon = () => {

    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);

    return (

      <button onClick={handleMode} className='cursor-pointer'>
        {darkTheme ? (
          <FaSun size='18' color='white' />
        ) : (
          <FaMoon size='18' />
        )}
      </button>
      
    );
  };

export default ThemeIcon;