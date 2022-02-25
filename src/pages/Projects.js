import {ProjectContainer, Container, Title, SubContainer} from '../components/index';

const Projects = () => {

    return (

        <>
            <Container>
                <div className="my-36 space-y-10">
                    <SubContainer>
                        <Title title="My projects" gradient='1'/>
                        <p className="mt-5 text-[#5e5e63]">Cupidatat sit laborum exercitation consectetur sit Lorem qui. Ea anim id nisi laboris deserunt ipsum ipsum in.</p>
                    </SubContainer>
                    <ProjectContainer />
                </div>
            </Container>
        </>

    );

};

export default Projects;