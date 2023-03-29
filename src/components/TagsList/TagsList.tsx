import React from 'react'
import Tag, { ITag } from '../Tag/Tag'
import style from './TagsList.module.scss'

interface ITagsList {
    tags: ITag[]
}

const TagsList: React.FC<ITagsList> = (props: ITagsList) => {
    const tags = props.tags
    const tagsToRender = tags.map(tag => (
        <Tag key={tag.title} title={tag.title} active={tag.active}></Tag>
    ))
    return <div className={style.list}>{tagsToRender}</div>
}

export default TagsList
