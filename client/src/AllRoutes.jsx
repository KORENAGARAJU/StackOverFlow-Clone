import React from "react";
import Home from './Pages/Home/Home' 
import {Routes , Route} from 'react-router-dom'
import Auth from './Pages/Auth/Auth'


const AllRoutes = ()=>{
    return (
        <Routes>
           <Route path="/Auth" element ={<Auth/>}/>
           <Route path="/" element= {<Home/>} />
        </Routes>
    )
}
export default AllRoutes ;