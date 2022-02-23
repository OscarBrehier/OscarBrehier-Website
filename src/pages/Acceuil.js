import { useState } from 'react';
import {Container, ProjectContainer} from '../components/index';

const Acceuil = () => {

    return (
        <>
            <Container>
                <div className="h-auto w-full mt-36 font-sf_display">
                    <div className="flex flex-col items-center text-center">
                        <p className="md:text-7xl text-6xl font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-transparent">
                            Hi, I'm Oscar
                        </p>
                        <p className="text-[16px] md:w-[45%] sm:w-[55%] w-[80%] mt-5 leading-tight text-[#5e5e63]">
                            Duis consectetur qui sint ex ipsum sit magna. Labore enim elit excepteur tempor enim do do aliqua Lorem.
                        </p>
                    </div>
                </div>
                <ProjectContainer />
            </Container>
        </>
    );

};

export default Acceuil; 