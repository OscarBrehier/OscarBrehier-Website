import {useState} from 'react'; 

const Small = ({children, color, link}) => {

    const [height, setHeight] = useState();
    const background = color == null ? 'white' : color;
    const resizeItem = (width) => { setHeight(width); };

    return (
      <a href={link} target="_blank">
        <div
          className="
                small w-full rounded-[34px] bg-white
                xl:h-64 xl:w-64  
            "
          ref={(el) => {
            if (!el) return;
            window.addEventListener("resize", (event) =>
              resizeItem(el.getBoundingClientRect().width)
            );
            window.addEventListener("load", (event) =>
              resizeItem(el.getBoundingClientRect().width)
            );
          }}
          style={{ height: height, backgroundColor: background }}
        >
          {children} 
        </div>
      </a>
    );

}

export default Small;