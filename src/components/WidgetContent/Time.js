import {useState, useEffect} from 'react';
import fetchLocation from '../../api/fetchLocation';

const Time = ({ location }) => {

    const [time, setTime]  = useState(new Date());
    

    const timer = () => { setInterval(() => { setTime(new Date()); }, 1000); };
    timer();

    // const [location, setLocation] = useState();

    // useEffect(() => {

    //     setLoading(true);

    //     navigator.geolocation.getCurrentPosition(function(position) {

    //         fetchLocation(position.coords.latitude, position.coords.longitude).then(res => {

    //             res.json().then((r) => setLocation(r.country));
    //             setLoading(false);

    //         });
    
    //     });

    // }, []);
    
    return (
      <>
        <div className="flex h-[100%] w-[100%] flex-col items-center justify-center">
          <div className="flex h-[50%] w-full items-center justify-center">
            <div>
              <p>Time in {location}</p>
              <p>{time.toLocaleTimeString()}</p>
            </div>
          </div>
          <div className="flex h-[50%] w-full items-center justify-center">
            <div>
              <p>Time where Oscar lives</p>
              <p>{time.toLocaleTimeString({ timeZone: "Europe/Athens" })}</p>
            </div>
          </div>
        </div>
      </>
    );

};

export default Time;