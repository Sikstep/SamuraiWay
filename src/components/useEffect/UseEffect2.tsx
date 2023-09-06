import React, {useEffect, useState} from 'react';

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1);

    console.log('Component rendered with counter')

    useEffect(()=>{
        console.log('Effect occurred ' + counter)

        return () => {
            console.log('RESET EFFECT ' + counter)
        }
    }, [counter])

    const onClickHandler = () => {
        setCounter(prev => prev + 1)
    }

    return (
        <div>
                hello, counter: {counter} <button onClick={onClickHandler}>Inc</button>
        </div>
    );
};

