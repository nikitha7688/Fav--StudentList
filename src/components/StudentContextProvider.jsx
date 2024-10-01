import { React, createContext, useState } from 'react'

const StudentContext = createContext()

function StudentContextProvider (data) {

    const [Student, setStudent] = useState([
        { id: 1, name: "Nikitha", fav: false },
        { id: 2, name: "Karthi", fav: false },
        { id: 3, name: "Raghava", fav: false },
        { id: 4, name: "Saravana", fav: false },
        { id: 5, name: "Teja Sai", fav: false },
        
    
        
    ])

    return (
        <StudentContext.Provider value={{ Student, setStudent }}>
            {data.children}
        </StudentContext.Provider>
    )
}

export default StudentContextProvider;
export { StudentContext };