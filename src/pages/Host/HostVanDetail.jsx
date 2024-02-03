import {Link, NavLink, useParams, Outlet} from 'react-router-dom'
import {useState,useEffect} from 'react'


export default function HostVanDetail(){
    const navStyles = {
        fontWeight:"700",
        textDecoration:"underline"
    }
    const {id} = useParams()
    const [vanDetail, setVanDetail]  = useState({})

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setVanDetail(data.vans))

    }, [])

    return (
        <section>
            <Link to=".."
            relative='path'
            className='back-button'>&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail-top">
                    <img src={vanDetail.imageUrl} alt="image"/>
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${vanDetail.type}`}
                        >
                            {vanDetail.type}
                        </i>
                        <h3>{vanDetail.name}</h3>
                        <h4>${vanDetail.price}/day</h4>
                    </div>
                    <nav className="host-van-detail-nav">
                        <NavLink to="."
                        end
                        style={({isActive}) => isActive ? navStyles : null}
                        >Description</NavLink>
                        <NavLink to="pricing"
                        style={({isActive}) => isActive ? navStyles : null}
                        >Pricing</NavLink>
                        <NavLink to="photos"
                        style={({isActive}) => isActive ? navStyles : null}
                        >Photos</NavLink>
                    </nav>
                    <Outlet context={{vanDetail}}/>
                </div>
            </div>
        </section>
    )
}