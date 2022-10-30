import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
}

const Button: React.FC<ButtonPropsType> = (props) => {
    const {name, callback} = props
    const onClickHandler = () => {
        callback()
    }
    return <button onClick={onClickHandler}>{name}</button>
};

export default Button;