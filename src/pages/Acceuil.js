import Large from '../components/Widgets/Large';
import Small from '../components/Widgets/Small';

import happy from '../assets/images/emojis/happy-f.png';
import github from '../assets/images/logos/github.png';

const Acceuil = () => {

    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div
          className="
                h-screen 
                w-[75%] 
                2xl:w-3/5 
            "
        >
          <div className="
            mt-[15vh] flex flex-col space-y-4 
            md:space-x-4  md:space-y-0
            lg:flex-row
            ">
            <Large>

                <div className="
                    h-50 100% flex items-center justify-center
                    sm:h-full
                    md:w-[45%]
                ">
                    <img className="
                        w-[25%]
                        sm:w-[60%]  
                        md:w-[58%] 
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

            </Large>
            <Small>

              <div className="flex h-[inherit] w-[inherit] items-center justify-center">
                <img className="w-[70%]" src={github} />
              </div>

            </Small>
          </div>
        </div>
      </div>
    );

}

export default Acceuil;