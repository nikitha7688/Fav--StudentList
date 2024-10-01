import React from 'react'
import { useNavigate } from 'react-router-dom';


const Header = (props) => {

    const navigate = useNavigate()
    const setSlist = props.setSList
    const setFlist = props.setFList

    function studentList() {
        setSlist(true)
        setFlist(false)
        navigate("/")
      }
      function favouriteList() {
        setFlist(true)
        setSlist(false)
        navigate("/favouritestudent")
      }

      return (
        <header className="w-full bg-gradient-to-r from-blue-950 to-cyan-500 py-4 flex justify-center gap-10 shadow-lg">
          <h1 className="text-white text-2xl font-semibold cursor-pointer underline hover:no-underline hover:text-blue-400 transition duration-300"
            onClick={studentList}>List of Students</h1>
          <h1 className="text-white text-2xl font-semibold cursor-pointer underline hover:no-underline hover:text-blue-400 transition duration-300"
            onClick={favouriteList}>Favourite Students</h1>
        </header>
      );
}

export default Header