import React from 'react'
import { IButton } from '../SmallButton/SmallButton'
import style from './MicroButton.module.scss'
import { Link } from 'react-router-dom'

const MicroButton: React.FC<IButton> = (props: IButton) => {
    return (
        <button
            className={style.button}
            onClick={() => (props.onClick ? props.onClick() : {})}
        >
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

export default MicroButton
