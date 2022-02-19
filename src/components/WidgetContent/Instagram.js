import white from '../../assets/images/logos/instagram-white.png'; 
import black from '../../assets/images/logos/instagram-black.png'; 

const Instagram = ({color}) => {

    let image = color == 'white' ? black : white;

    return (    

        <>
            <div className="flex h-[inherit] w-[inherit] items-center justify-center">
                <img className="md:w-[40%] w-[30%]" src={image} />
            </div>
        </>

    ); 

}

export default Instagram;