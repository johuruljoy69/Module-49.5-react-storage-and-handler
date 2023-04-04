import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../utilities/calculate';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }, [])


    // const first =55;
    // const second = 66;
    // const total = add(first, second)
    return (
        <div>
            <h2>Welcome to my cosmetics store</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                    ></Cosmetic>)
            }

            {/* <p>total:{total} </p> */}
        </div>
    );
};

export default Cosmetics;