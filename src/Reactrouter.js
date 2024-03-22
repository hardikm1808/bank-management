import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Table from './Table'
import FrontPage from './FrontPage'
import UserRegistration from './UserRegistration'
import ManagerLogin from './ManagerLogin'
import DestBoardPage from './DestBoardPage'
import Bankbalance from './Bankbalance'
import CustomerLogin from './CustomerLogin'
import Userinformation from './Userinformation'
import Accountholder from './Accountholder'
import Deposite from './Deposite'
import Withdraw from './Withdraw'
import ManagerUserdata from './ManagerUserdata'
import Userdataintable from './Userdataintable'

export default function Reactrouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<FrontPage />}></Route>
                    <Route path='/managerlogin' element={<ManagerLogin />}></Route>
                    <Route path='/userregistration' element={<UserRegistration />}></Route >
                    <Route path='/table' element={<Table />}></Route>
                    <Route path='/destboardpage' element={<DestBoardPage />}></Route>
                    <Route path='/bankbalance' element={<Bankbalance />}></Route>
                    <Route path='/customerlogin' element={<CustomerLogin />}></Route>
                    <Route path='/userinformation' element={<Userinformation />}></Route>
                    <Route path='/accountholder' element={<Accountholder />}></Route>
                    <Route path='/deposite' element={<Deposite />}></Route>
                    <Route path='/withdraw' element={<Withdraw />}></Route>
                    <Route path='/manageruserdata' element={<ManagerUserdata />}></Route>
                    <Route path='/userdataintable' element={<Userdataintable />}></Route>


                </Routes>
            </BrowserRouter>
        </>
    )
}
