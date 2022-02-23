import {FaInstagram, FaDiscord} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import {MdOutlineAlternateEmail} from 'react-icons/md';

const Contact = () => {

    const size = '1.8em';

    return (

        <div className="h-20 w-full mt-36 flex flex-col items-center justify-center space-y-20 ">
            <div className="
                md:w-[80%] w-full h-[inherit] bg-[#eceff1] rounded-3xl duration-700
                
                sm:flex-row 
                flex items-center justify-center space-x-10
            "> 
                <FaInstagram size={size}/>
                <AiFillGithub size={size}/>
                <FaDiscord size={size}/>
                <MdOutlineAlternateEmail size={size}/>
            </div>
        </div>

    );

};

export default Contact;