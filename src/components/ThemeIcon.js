import { FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from '../hooks/useDarkMode';

const ThemeIcon = () => {

    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);

    return (

      <button onClick={handleMode} className='cursor-pointer'>
        {darkTheme ? (
          // <FaSun size='24' color="white"/>
          <div class="text-white font-medium text-sm bg-[#1f1f1f] px-6 py-2 rounded-full">Light mode</div>
        ) : (
          // <FaMoon size='24' />
          <div class='text-black font-medium text-sm bg-slate-200 px-6 py-2 rounded-full'>Dark mode</div>
        )}
      </button>
      
    );
  };

export default ThemeIcon;