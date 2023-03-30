import { INote } from '../../components/Note/Note'

export function setNotesToLS(notes: Array<INote>) {
    localStorage.setItem('notes', JSON.stringify(notes))
}
