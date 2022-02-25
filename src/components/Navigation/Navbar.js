import {useState, useEffect} from 'react';
import {Container} from '../index';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';
import paths from '../../assets/paths';

const Navbar = () => {

    // const paths = ['/', '/about', '/projects', '/contact'];
    const [pathBack, setPathBack] = useState();
    const [pathForward, setPathForward] = useState();
    const [visibility, setVisibility] = useState(true);
    
    const loc = window.location.pathname;

    let check = 0;
    
    useEffect(() => {

        const len = paths.length;

        for (let i = 0; i < 4; i++) {

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

        paths.forEach(path => { if(`${path}` !== loc) check++; });
        if(check == len) setVisibility(false);

    }, []);

    return (

        <>
            { visibility === true ? (
                
                <Container>
                    <div className="h-24 md:h-32 w-full flex justify-between font-sf_display">
                        <div className="h-[inherit] w-auto flex items-center">
                            <a href={pathBack} className="
                                h-14 w-16 bg-white rounded-full shadow-[0_8px_32px_0_rgb(0,0,0,.10)] flex items-center justify-center
                            ">
                                <IoArrowBack />
                            </a>
                        </div>
                        <div className="h-[inherit] w-[100%] flex items-center justify-center">
                            <div className="
                                h-14 w-48 bg-white rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgb(0,0,0,.10)] hover:cursor-pointer
                            ">
                                <a href='/' className="uppercase font-bold bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-transparent">
                                    Oscar Bréhier
                                </a>
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

            ) : ( <div></div> ) }
        </>

    );

};

export default Navbar; 