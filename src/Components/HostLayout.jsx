import {Link, NavLink, Outlet} from 'react-router-dom'

export default function HostLayout(){
    const navStyles = {
        fontWeight:"700",
        textDecoration:"underline"
    }
    return (
        <div>
            <nav className='host-nav-bar'>
                <NavLink 
                to='.'
                style={({isActive}) => isActive ? navStyles : null}
                end
                >
                    Dashboard</NavLink>
                <NavLink 
                to='income'
                style={({isActive}) => isActive ? navStyles : null}>
                    Income</NavLink>
                <NavLink 
                to='vans'
                style={({isActive}) => isActive ? navStyles : null}>
                    Vans</NavLink>
                <NavLink 
                to='reviews'
                style={({isActive}) => isActive ? navStyles : null}>
                    Reviews</NavLink>
                
            </nav>
            <Outlet />
        </div>
    )
}