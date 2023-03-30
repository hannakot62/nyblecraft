export function getNotesFromLS() {
    if (localStorage.getItem('notes')) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return JSON.parse(localStorage.getItem('notes'))
    } else return []
}
