import Large from '../components/Widgets/Large';
import Small from '../components/Widgets/Small';

import Container from '../components/Container';
import ShortDescription from '../components/WidgetContent/ShortDescription';
import Github from '../components/WidgetContent/Github';

const Acceuil = () => {

    return (
      <Container >
        <div className="flex h-screen w-full items-center justify-center">
          <div
            className="
                  h-screen 
                  w-[75%] 
                  2xl:w-3/5 
              "
          >
            <div className="
              mt-[15vh] grid gap-4 grid-cols-1 xl:grid-cols-2 
              ">
                  
              <Large><ShortDescription /></Large>
              
              <div className="flex space-x-4">     
                  <Small><Github /></Small>
                  <Small><Github /></Small>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );

};

export default Acceuil;