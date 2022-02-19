const WidgetContainer = (props) => {

    return (

        <div className="h-auto w-[75%] 2xl:w-3/5">
            <div className="mt-[1rem] grid grid-cols-1 gap-4 xl:grid-cols-2 "> 
                {props.children}
            </div>
        </div>

    );

};

export default WidgetContainer;