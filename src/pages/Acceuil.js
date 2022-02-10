import ThemeIcon from "../components/ThemeIcon";
import Button from '../components/Button';

const Acceuil = () => {

    return (

        <div className='h-screen w-full flex items-center dark:bg-black'>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='w-2/4 text-4xl dark:text-white'>
                    Oscar Bréhier is a young 16 year old full-stack developer with a strong focus on interfaces.
                    He uses technologies such as React, JavaScript, HTML, CSS and Python.
                </div>
                <div className='w-2/4 my-5 flex space-x-4'>
                    <div className='w-auto'><ThemeIcon /></div>
                    <Button name="Github" link="https://github.com/OscarBrehier"/>
                </div>
                
            </div>
        </div>

    );

}

export default Acceuil;