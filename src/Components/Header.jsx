import { useEffect } from 'react'
import {Link, NavLink} from 'react-router-dom'


export default function Header(){
    const navStyles = {
        fontWeight:"700",
        textDecoration:"underline"
    }
    
    // useEffect(() => {
    //     fetch("/api/vans")
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])

    return (
        <header>
            <Link to='/' className="site-logo">#VANLIFE</Link>
            <nav className='navbar'>
                <NavLink 
                to="host"
                style={({isActive}) => isActive ? navStyles : null}
                >Host</NavLink>
                <NavLink 
                to='about'
                style={({isActive}) => isActive ? navStyles : null}
                >About</NavLink>
                <NavLink 
                to='vans'
                style={({isActive}) => isActive ? navStyles : null}
                >Vans</NavLink>
            </nav>
        </header>

    )
}

