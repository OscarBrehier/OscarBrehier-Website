import Large from '../components/Widgets/Large';
import Small from '../components/Widgets/Small';

import ShortDescription from '../components/WidgetContent/ShortDescription';
import Github from '../components/WidgetContent/Github';
import WidgetContainer from '../components/Widgets/WidgetContainer';

const Acceuil = () => {

    return (
      <div className="mt-[15vh] mb-[15vh] flex h-auto w-full flex-col items-center justify-center">

        <WidgetContainer>
          <Large>
            <ShortDescription />
          </Large>

          <div className="flex space-x-4">
            <Small>
              <Github color="white" />
            </Small>
            <Small color="#171515">
              <Github color="black" />
            </Small>
          </div>
        </WidgetContainer>

        <WidgetContainer>
          <Large>
            <ShortDescription />
          </Large>

          <div className="flex space-x-4">
            <Small>
              <Github color="white" />
            </Small>
            <Small color="#171515">
              <Github color="black" />
            </Small>
          </div>
        </WidgetContainer>
        
      </div>
    );

};

export default Acceuil;