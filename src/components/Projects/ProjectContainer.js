import {Container, Project} from '../index';

const ProjectContainer = () => {

    return (

        <div className="h-auto w-full my-36 flex flex-col items-center justify-center space-y-20">
            <Project 
                titre='Titre du projet' 
                type='Type du projet' 
                date='2022' 
                description='Minim occaecat ut sint ipsum nostrud. Eu ex cillum amet qui ullamco incididunt occaecat.' />
        </div>

    );

};

export default ProjectContainer;