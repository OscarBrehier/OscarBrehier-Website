import {Container} from './index';

const Footer = () => {

    return (

        <Container>
            <div className="h-20 w-full flex justify-center">
                <div className="
                    md:w-[80%] w-full h-[inherit] bg-[#eceff1] rounded-tl-3xl rounded-tr-3xl
                    flex items-center justify-center
                "> 
                    <p className="text-[#5e5e63] text-sm">© 2022 Oscar Bréhier. MIT Licensed</p>
                </div>
            </div>
        </Container>

    );

};

export default Footer;