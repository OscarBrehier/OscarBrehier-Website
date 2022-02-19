import {useState} from 'react';

const Navigation = () => {

    const [active, setActive] = useState('home');
    const pages = ['home', 'projects', 'about', 'contact'];
    const style = 'py-2 px-3 rounded-full hover:text-black/[.50] duration-[0.5s] capitalize';
    
    const Elements = () => {

        const elements = [];

        pages.forEach(el => {

            if(active == el) { elements.push(<div className={style} style={{backgroundColor: 'white'}}><a href="">{el}</a></div>); }
            else { elements.push(<div className={style}><a href="">{el}</a></div>)  }
            

        });

        return elements;

    }

    return ( 

        <div className="h-[12vh] w-full flex items-center justify-center">
            <div className="
                md:space-x-2 md:w-auto md:px-2 md:py-2 md:text-sm
                space-x-1 flex bg-black/[.04] py-1 px-1 rounded-full font-poppins text-xs
                ">
                <Elements/>
            </div>
        </div>

    );

}

export default Navigation;