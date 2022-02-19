import {useState} from 'react'; 

const Small = ({children, color}) => {

    const [height, setHeight] = useState();
    const background = color == null ? 'white' : color;
    const resizeItem = (width) => { setHeight(width); };

    return (

        <div 
            className="
                small w-full bg-white rounded-[34px]
                xl:w-64 xl:h-64  
            "
            ref={el => {

                if(!el) return;
                window.addEventListener('resize', (event) => resizeItem(el.getBoundingClientRect().width));
                window.addEventListener('load', (event) => resizeItem(el.getBoundingClientRect().width));

            }} style={{height: height, backgroundColor: background}}
        >
            
            {children}

        </div>

    );

}

export default Small;