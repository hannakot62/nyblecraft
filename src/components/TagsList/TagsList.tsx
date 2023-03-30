import React from 'react'
import Tag, { ITag } from '../Tag/Tag'
import style from './TagsList.module.scss'

interface ITagsList {
    tags: ITag[]
    noteContents?: string
    noteCreated?: Date
    inNote?: boolean
}

const TagsList: React.FC<ITagsList> = (props: ITagsList) => {
    const tags = props.tags
    const tagsToRender = tags.map(tag => (
        <Tag
            key={tag.title + Date.now()}
            title={tag.title}
            active={tag.active}
            noteContents={props.noteContents}
            noteCreated={props.noteCreated}
            neighbours={tags}
            inNote={props.inNote}
        ></Tag>
    ))
    return <div className={style.list}>{tagsToRender}</div>
}

export default TagsList
