    const Large = (props) => {

    return (

        <div className="
            h-[300px] w-[100%] flex flex-col justify-center bg-white
            sm:h-64 sm:flex-row
            rounded-[34px] 
            lg:w-[50%]
        ">
            {props.children}
        </div>

    );

}

export default Large;