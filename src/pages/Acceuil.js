import { useState } from 'react';
import {Container, ProjectContainer} from '../components/index';

const Acceuil = () => {

    return (
        <>
            <Container>
                <div className="h-auto w-full mt-36 font-sf_display">
                    <div className="flex flex-col items-center text-center">
                        <p className="
                            md:text-7xl text-6xl font-bold 
                            bg-clip-text text-transparent
                            bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500
                        ">
                            Hi, I'm Oscar
                        </p>
                        <p className="text-[16px] md:w-[45%] sm:w-[55%] w-[80%] mt-5 leading-tight text-[#5e5e63]">
                            Duis consectetur qui sint ex ipsum sit magna. Labore enim elit excepteur tempor enim do do aliqua Lorem.
                        </p>
                    </div>
                </div>
                <div className="my-36">
                    <ProjectContainer />
                </div>
            </Container>
        </>
    );

};

export default Acceuil; 