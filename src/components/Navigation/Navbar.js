import {Container, Line} from '../index';
import image from '../../assets/images/emojis/happy-f.png'

const Navbar = () => {

    return (

        <>
            <Container>
                <div className="h-24 md:h-32 w-full flex justify-between font-sf_display">
                    <div className="h-[inherit] w-auto flex items-center">
                        <a href='/' className="h-14 w-14 bg-white rounded-full shadow-[0_8px_32px_0_rgb(0,0,0,.10)] flex items-center justify-center">
                            <img className="w-[40%]" src={image} alt="Oscar Bréhier" />
                        </a>
                    </div>
                    <div className="h-[inherit] w-[100%] flex items-center justify-center">
                        <div className="h-14 w-48 bg-white rounded-full flex items-center justify-center shadow-[0_8px_32px_0_rgb(0,0,0,.10)] hover:cursor-pointer">
                            <p className="uppercase font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-transparent">Oscar Bréhier</p>
                        </div>
                    </div>
                    <div className="h-[inherit] w-auto flex items-center">
                        <div className="h-14 w-14 bg-white rounded-full shadow-[0_8px_32px_0_rgb(0,0,0,.10)]"></div>
                    </div>
                </div>
            </Container>
        </>

    );

};

export default Navbar; 