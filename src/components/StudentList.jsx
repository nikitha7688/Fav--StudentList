import { StudentContext } from './StudentContextProvider';
import { useContext } from 'react';


const StudentList = () => {
   
    const { Student, setStudent } = useContext(StudentContext)

    function addFav(id,fav){
        setStudent(prearray =>
            prearray.map(array =>
              array.id === id ? { ...array, fav: !fav } : array
            )
          );
    }

    return (
        <div className="w-full max-w-md mx-auto mt-10 bg-blue-200 shadow-md rounded-lg overflow-hidden">
          <ul className="px-5 py-4">
            <h1 className="font-extrabold text-3xl text-center text-gray-700 mb-5">List of Students</h1>
            {Student.map((item, index) => {
              return (
                <li className="flex justify-between items-center bg-gray-100 px-4 py-2 mb-2 rounded-md shadow-sm" key={index}>
                  <h2 className="text-lg font-semibold text-gray-800">{item.id}. {item.name}</h2>
                  <button
                    className="ml-10 px-3 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => addFav(item.id, item.fav)} 
                    disabled={item.fav}>
                    Add To Favourite
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      );
}

export default StudentList;