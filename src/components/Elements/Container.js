import {useState} from 'react';

const Container = ({children}) => {

    return (

        <div className="h-auto w-full flex justify-center">
            <div className="
                
                2xl:w-[60%] 
                xl:w-[75%] 
                lg:w-[85%]
                w-[95%] 
                
            ">
                {children}
            </div>
        </div>

    );

};

export default Container;