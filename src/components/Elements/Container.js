import {SubContainer} from '../index'; 

const Container = ({children, sub}) => {

    if(sub == null) sub = false;

    return (

        <>
            { sub === false ? (

                <div className="h-auto w-full flex justify-center">
                    <div className="2xl:w-[60%] xl:w-[75%] lg:w-[85%] w-[90%]">
                        {children}
                    </div>
                </div>

            ) : ( 

                <div className="h-auto w-full flex justify-center">
                    <div className="2xl:w-[60%] xl:w-[75%] lg:w-[85%]w-[90%]">
                        <SubContainer>
                            {children}
                        </SubContainer>
                    </div>
                </div>

            )}
        </>

    );

};

export default Container;