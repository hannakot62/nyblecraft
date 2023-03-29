import React from 'react'
import './App.scss'
import SmallButton from './UI/Buttons/SmallButton/SmallButton'
import Note from './components/Note/Note'

function App() {
    return (
        <div className="App">
            <Note
                contents={
                    'hello everybody body body fkvlkfdjcx shsv  fvhdlsvhkjah fvjkhjvhdslvjdhfkjvh adkjgh jkahv jkdh vjkvjhg vjfh vlja jh kahvjk'
                }
                created={new Date()}
                tags={[
                    { title: 'jopa', active: true },
                    { title: 'popa', active: false },
                    {
                        title: 'askfjvklsjvlkjslkhvdfjvbdfjvdvljhsffkj;dsbfjkvbdjfbvd',
                        active: false
                    },
                    { title: 'dddd', active: true },
                    { title: 'ppppppppppppppppppppppppppppppp', active: true },
                    { title: '[p[p[p[p[p[p', active: true }
                ]}
            />
        </div>
    )
}

export default App
