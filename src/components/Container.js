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

                <title>Oscar Bréhier</title>
                <meta name="title" content={meta.title} />
                <meta name="description" content={meta.description} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://brehieroscar.vercel.app" />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:image" content={meta.image} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://brehieroscar.vercel.app/" />
                <meta property="twitter:title" content={meta.title} />
                <meta property="twitter:description" content={meta.description} />
                <meta property="twitter:image" content={meta.image} />

            </Helmet>
            <div>
                {children}
            </div>
        </>

    );

};

export default Container;