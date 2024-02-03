import { useOutletContext } from "react-router-dom"

export default function HostVanInfo(){
    const {vanDetail} = useOutletContext()
    return (
       <section>
        <p><span style={{fontWeight:"bold"}}>Name: </span>{vanDetail.name}</p>
        <p><span style={{fontWeight:"bold"}}>Category: </span>{vanDetail.type}</p>
        <p><span style={{fontWeight:"bold"}}>Description: </span>{vanDetail.description}</p>
        <p><span style={{fontWeight:"bold"}}>Visibility: </span>Public</p>
       </section>
    )
}