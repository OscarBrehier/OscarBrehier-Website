import Metatags from 'react-meta-tags';

const Container = (props) => {

    const { children, ...cmeta } = props;
    const meta = {
        title: 'Oscar Bréhier',
        description: 'A 16 year old Student and Full-Stack Developer',
        image: 'https://i.imgur.com/gPGQyan.png',
        ...cmeta
    }

    return (

        <>  
            <div>
                {children}
            </div>
        </>

    );

};

export default Container;