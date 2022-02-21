import { useState, useEffect } from 'react';
import { Large, Small, WidgetContainer, Time, ShortDescription } from '../components/index';
import fetchLocation from '../api/fetchLocation';
import useLocation from '../hooks/useLocation';

const Acceuil = () => {

    const [location, setLocation] = useState();
    const [loading, setLoading] = useState(false);
    const [storage, setStorage] = useLocation();

    useEffect(() => {

      if(!storage) {

        setLoading(true);
        navigator.geolocation.getCurrentPosition(function (position) {

          fetchLocation(position.coords.latitude, position.coords.longitude).then((res) => {

              res.json().then((r) => {

                setLocation(r.country);
                setStorage(r.country);
                setLoading(false);

              });
            }
          );
        }); 

      } else {

        setLoading(false);
        setLocation(storage);

      } 

    }, []);

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
              <div className="flex space-x-4"><Small color="white"></Small></div>
            </WidgetContainer>
          </div>

        )}
      </>
    );

};

export default Acceuil;