import { ITag } from '../../components/Tag/Tag'

export function checkForTags(contents: string) {
    const str = contents.split('')

    const tags = new Array<ITag>()
    while (str.indexOf('#') != -1) {
        const tag = { title: '', active: false }
        let title = ''
        for (let i = str.indexOf('#') + 1; i < str.length; i++) {
            const nextCharCode = str[i].charCodeAt(0)
            if (
                (nextCharCode >= 0x0041 && //latin capitals
                    nextCharCode <= 0x005a) ||
                (nextCharCode >= 0x0061 && //latin small letters
                    nextCharCode <= 0x007a) ||
                (nextCharCode >= 0x0030 && //numbers
                    nextCharCode <= 0x0039) ||
                (nextCharCode >= 0x0410 && //cyrillic capitals
                    nextCharCode <= 0x042f) ||
                (nextCharCode >= 0x0430 && //cyrillic small
                    nextCharCode <= 0x044f) ||
                nextCharCode === 0x005f //_
            ) {
                title += str[i]
            } else break
        }

        if (title.length) {
            tag.title = title
            tags.push(tag)
        }
        str.splice(0, str.indexOf('#') + title.length + 1)
    }
    return tags
}
