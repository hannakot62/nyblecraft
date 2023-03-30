import React from 'react'
import { IButton } from '../SmallButton/SmallButton'
import style from './BigButton.module.scss'
import { Link } from 'react-router-dom'

const BigButton: React.FC<IButton> = (props: IButton) => {
    return (
        <button className={style.button}>
            {props.linkPath ? (
                <Link to={props.linkPath}>
                    {props.text} {props.icon}
                </Link>
            ) : props?.text ? (
                props.text
            ) : (
                props.icon
            )}
        </button>
    )
}

export default BigButton
