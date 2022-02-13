const Small = (props) => {

    return (

        <div className="
            w-32 h-32 bg-white rounded-[34px]
            md:w-64 md:h-64 
        ">
            {props.children}
        </div>

    );

}

export default Small;