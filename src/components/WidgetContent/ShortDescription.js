import happy from '../../assets/images/emojis/happy-f.png';

const ShortDescription = () => {

    return (

        <>
            <div className="
                    h-50 100% flex items-center justify-center
                    sm:h-full
                    md:w-[45%]
                ">
                    <img className="
                        w-[25%]
                        sm:w-[60%]  
                        md:w-[50%]
                        xl:w-[60%]
                        " 
                    src={happy} />
                </div>
                <div className="
                    flex w-[100%] items-center justify-center mt-4
                    sm:w-[65%] sm:mt-0 sm:justify-start
                ">
                    <div className="
                        w-[90%] text-base text-[#3a3a3a] text-center
                        sm:text-left 
                        md:w-[80%] 
                    ">
                        <p>
                            Hi, I am{" "}
                            <span className="text-lg font-bold text-black">
                            Oscar Bréhier
                            </span>
                            .
                        </p>
                        <p>
                            A 16 year old Student and Full-Stack Developer with a strong
                            focus on looks and user experience.
                        </p>
                    </div>
              </div>
        </>

    );

}

export default ShortDescription;