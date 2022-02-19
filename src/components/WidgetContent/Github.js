import white from '../../assets/images/logos/github-white.png'; 
import black from '../../assets/images/logos/github-black.png'; 

const Github = ({color}) => {

    let image = color == 'white' ? black : white;

    return (    

        <>
            <div className="flex h-[inherit] w-[inherit] items-center justify-center">
                <img className="md:w-[35%] w-[30%]" src={image} />
            </div>
        </>

    ); 

}

export default Github;