import {useState, useEffect} from 'react';
import {Container} from '../index';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';
import image from '../../assets/images/emojis/happy-f.png'

const Navbar = () => {

    const paths = ['/', '/about', '/projects', '/contact'];
    const [pathBack, setPathBack] = useState();
    const [pathForward, setPathForward] = useState();

    const loc = window.location.pathname;
    
    useEffect(() => {
        
        for (let i = 0; i < 4; i++) {

            const len = paths.length;

            if(paths[i] === loc) {

                if(i - 1 == -1) {

                    setPathBack(paths[len - 1]);
                    setPathForward(paths[i + 1]);

                } else if(i + 1 == len) {

                    setPathBack(paths[i - 1]);
                    setPathForward(paths[0]);

                } else {

                    setPathBack(paths[i - 1]);
                    setPathForward(paths[i + 1]);

                }

            }

        }

    }, []);

    return (

        <>
            <Container>
                <div className="h-24 md:h-32 w-full flex justify-between font-sf_display">
                    <div className="h-[inherit] w-auto flex items-center">
                        <a href={pathBack} className="
                            h-14 w-16 bg-white rounded-full shadow-[0_8px_32px_0_rgb(0,0,0,.10)] flex items-center justify-center
                        ">
                            {/* <img className="w-[40%]" src={image} alt="Oscar Bréhier" /> */}
                            <IoArrowBack />
                        </a>
                    </div>
                    <div className="h-[inherit] w-[100%] flex items-center justify-center">
                        <div className="
                            h-14 w-48 bg-white rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgb(0,0,0,.10)] hover:cursor-pointer
                        ">
                            <p className="uppercase font-bold bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-transparent">
                                Oscar Bréhier
                            </p>
                        </div>
                    </div>
                    <div className="h-[inherit] w-auto flex items-center">
                        <a href={pathForward} className="
                            h-14 w-16 bg-white rounded-full shadow-[0_8px_32px_0_rgb(0,0,0,.10)] flex items-center justify-center" 
                        >
                            <IoArrowForward />
                        </a>
                    </div>
                </div>
            </Container>
        </>

    );

};

export default Navbar; 