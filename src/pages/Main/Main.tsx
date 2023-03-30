import React, { useState } from 'react'
import NotesList from '../../components/NotesList/NotesList'
import style from './Main.module.scss'
import SmallButton from '../../UI/Buttons/SmallButton/SmallButton'
import Add from '../../UI/Icons/Add'
import BigButton from '../../UI/Buttons/BigButton/BigButton'
import Modal from '../../Modal/Modal'

const Main: React.FC = () => {
    const notesToShow = [
        {
            contents:
                'hello everybody body body fkvlkf djcx shsv  fvhdls vhkjah fvjkhjvhdslvj dhfkjvh adkjgh jkahv jkdh vjkvjhg vjfh vlja jh kahvjk',
            created: new Date(),
            tags: [
                { title: 'jopa', active: true },
                { title: 'popa', active: false },
                {
                    title: ';dsbfjkvbdjfbvd',
                    active: false
                },
                { title: 'dddd', active: true },
                { title: 'l', active: true },
                { title: '[p[p[p[p[p[p', active: true }
            ]
        },
        {
            contents:
                'bye everybody body body fkvl kfdjcx shsv  fvhdlsvh kjah fvjkhjvhdsl vjdhfkjvh adkjgh jkahv jkdh vjkvjhg vjfh vlja jh kahvjk',
            created: new Date(),
            tags: [
                { title: 'jopa', active: true },
                { title: 'popa', active: false },
                {
                    title: 'askfjvklsjvlkjslkhvdfjvbdfjvdvljhsffkj;dsbfjkvbdjfbvd',
                    active: false
                },
                { title: 'dddd', active: true },
                { title: 'ppppppppppppppppppppppppppppppp', active: true },
                { title: '[p[p[p[p[p[p', active: true }
            ]
        }
    ]

    return (
        <div className={style.container}>
            <h1>Your notes</h1>
            search
            <NotesList notes={notesToShow} />
            <BigButton icon={<Add />} linkPath={'/add'} onClick={() => {}} />
        </div>
    )
}

export default Main
