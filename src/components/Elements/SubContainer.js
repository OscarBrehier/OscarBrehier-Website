const SubContainer = (props) => {
 
    return (

        <div className="h-auto w-full flex items-center justify-center">
            <div className="md:w-[80%] w-full"> 
                {props.children}
            </div>
        </div>

    );

};

export default SubContainer;