import { Helmet } from 'react-helmet';

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
            <Helmet>
                <title>{meta.title}</title> 
                <meta name="description" content={meta.description} />

                <meta name="og:type" content="website" />
                <meta name="og:title" content={meta.title} />
                <meta name="og:description" content={meta.description} />
                <meta name="og:image" content={meta.image} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name='twitter:site' content='@OscarBrehier'/>
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
            </Helmet>
            <div>
                {children}
            </div>
        </>

    );

};

export default Container;