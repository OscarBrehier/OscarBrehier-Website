import { useState, useEffect } from 'react';
import { Large, Small, WidgetContainer, Time, ShortDescription } from '../components/index';
import fetchLocation from '../api/fetchLocation';

const Acceuil = () => {

    const [location, setLocation] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
      navigator.geolocation.getCurrentPosition(function(position) {

        setLoading(true);
        fetchLocation(position.coords.latitude, position.coords.longitude).then(res => {

            res.json().then((r) => setLocation(r.country));
            setLoading(false);

        }); }); }, []);

    return (
      <>
        {loading === false ? (

          <div className="mb-[15vh] flex h-auto w-full flex-col items-center justify-center">
            <WidgetContainer>
              <Large>
                <ShortDescription />
              </Large>

              <div className="flex space-x-4">
                <Small color="white">
                  <Time location={location} />
                </Small>
              </div>
            </WidgetContainer>
          </div>

        ) : (
          
          <div className="mb-[15vh] flex h-auto w-full flex-col items-center justify-center">
            <WidgetContainer>
              <Large></Large>
              <div className="flex space-x-4"> <Small color="white"></Small> </div>
            </WidgetContainer>
          </div>

        )}
      </> 
    );

};

export default Acceuil;