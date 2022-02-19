import Large from '../components/Widgets/Large';
import Small from '../components/Widgets/Small';
import WidgetContainer from '../components/Widgets/WidgetContainer';

import ShortDescription from '../components/WidgetContent/ShortDescription';
import Github from '../components/WidgetContent/Github';
import Instagram from '../components/WidgetContent/Instagram';

const Acceuil = () => {

    return (
      <div className="mb-[15vh] flex h-auto w-full flex-col items-center justify-center">

        <WidgetContainer>
          <Large>
            <ShortDescription />
          </Large>

          <div className="flex space-x-4">

            <Small color="white" link='https://github.com/OscarBrehier'>
              <Github color="white" />
            </Small>
 
            <Small color="white" link='https://github.com/OscarBrehier'>
              <Instagram color="white" />
            </Small>

          </div>
        </WidgetContainer>

      </div>
    );

};

export default Acceuil;