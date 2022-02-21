import {useState} from 'react';

const Time = ({ location }) => {

    const [time, setTime]  = useState(new Date());
  
    const timer = () => { setInterval(() => { setTime(new Date()); }, 1000); };
    timer();
    
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