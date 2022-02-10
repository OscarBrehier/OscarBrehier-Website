const Button = ({name, link}) => {

    return (
        <a 
            href={link} 
            target='_blank'
            className="dark:text-white dark:bg-[#1f1f1f] text-black bg-slate-200 font-medium text-sm  px-6 py-2 rounded-full"
        >
            {name}
        </a>
    );

}

export default Button;