import {useState} from 'react';

const Time = ({ location }) => {

    const [time, setTime]  = useState(new Date());
  
    const timer = () => { setInterval(() => { setTime(new Date()); }, 1000); };
    timer();
    
    return (
      <>
        <div className="flex h-[100%] w-[100%] flex-col items-center justify-center">
          <div className="flex h-[50%] w-full items-center justify-center">
            <div className="space-y-[-10px]">
              <p className="text-black/[.55]">Time in {location}</p>
              <p className="text-[2rem]">{time.toLocaleTimeString()}</p>
            </div>
          </div>
          <div className="h-[1px] w-full flex items-center justify-center">
            <div className="h-[1px] w-[85%] bg-black/[.06]"></div>
          </div>
          <div className="flex h-[50%] w-full items-center justify-center">
            <div className="space-y-[-10px]">
              <p className="text-black/[.55]">Time where I live</p>
              <p className="text-[2rem]">{time.toLocaleTimeString({ timeZone: "Europe/Athens" })}</p>
            </div>
          </div>
        </div>
      </>
    );

};

export default Time;