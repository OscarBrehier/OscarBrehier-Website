import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useLocation = () => {

    const [location, setLocation] = useLocalStorage('location');
    return [location, setLocation];

}

export default useLocation;