import React from 'react'
import { IButton } from '../SmallButton/SmallButton'
import style from './BigButton.module.scss'

const BigButton: React.FC<IButton> = (props: IButton) => {
    return (
        <button className={style.button} onClick={() => props.onClick()}>
            {props.text} {props.icon}
        </button>
    )
}

export default BigButton
