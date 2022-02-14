import {useState, useRef, useEffect} from 'react'; 

const Small = (props) => {

    const [height, setHeight] = useState();
    const resizeItem = (width) => { setHeight(width); };

    return (

        <div 
            className="
                small w-full bg-white rounded-[34px]
                xl:w-64 xl:h-64 xl:bg-blue-400 
            "
            ref={el => {

                if(!el) return;
                window.addEventListener('resize', (event) => resizeItem(el.getBoundingClientRect().width));
                window.addEventListener('load', (event) => resizeItem(el.getBoundingClientRect().width));

            }} style={{height: height}}
        >
            
            {props.children}

        </div>

    );

}

export default Small;