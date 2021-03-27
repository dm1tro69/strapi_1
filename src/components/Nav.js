import React from 'react'
import {NavLink} from "react-router-dom";

const Nav = () => {
return (
<div className={'Nav'}>
    <NavLink to={'/'} exact > Home </NavLink>
    <NavLink to={'/create'} > Create </NavLink>
</div>
)
}
export default Nav