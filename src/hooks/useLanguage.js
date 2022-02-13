import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useLanguage = () => {

  const [language, setLanguage] = useLocalStorage('language', 'fr');
  return [language, setLanguage];
  
};

export default useLanguage;