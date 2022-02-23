import image from '../../assets/images/emojis/happy-f.png';

const Project = (props) => {

    return (

        <a 
            className="
                md:w-[80%] w-full bg-[#eceff1] rounded-3xl duration-700
                flex flex-col
                hover:shadow-[0_8px_32px_0_rgb(0,0,0,.10)] hover:bg-[#f5f5f7] 
                sm:flex-row sm:h-[22rem]
        "> 
            <div className="sm:h-[inherit] sm:w-[100%] h-[22rem] w-full">
                <div className="flex flex-col justify-center h-[inherit] ml-16">
                    <p className="text-4xl font-semibold text-[#323235]">{props.titre}</p>
                    <p className="text-sm uppercase mt-2 text-[#5e5e63] flex items-center">
                        {props.type} 
                        <div className="w-1 h-1 bg-[#5e5e63] rounded-full mx-2"></div> 
                        {props.date}
                    </p>
                    <p className="text-[#5e5e63] mt-5 w-[70%]">
                        {props.description}
                    </p>
                </div>
            </div>
        </a>

    );

};

export default Project;