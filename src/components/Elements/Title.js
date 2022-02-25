import {useState} from 'react';

const Title = ({title, gradient}) => {

    const gradients = [
        'linear-gradient(to right, rgb(251, 113, 133), rgb(217, 70, 239), rgb(99, 102, 241))', // [1 - 1]
        'linear-gradient(to right, rgb(56, 189, 248), rgb(59, 130, 246))', // [2 - 1]
        'linear-gradient(to right, rgb(192, 38, 211), rgb(219, 39, 119))' // [3 - 1]
    ]

    return (

        <p className="text-4xl font-sf_display font-extrabold bg-clip-text text-transparent 
        bg-gradient-to-r" style={{backgroundImage: gradients[gradient - 1]}}>
            {title}
        </p>

    );

};

export default Title;