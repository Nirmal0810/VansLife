import { useOutletContext } from "react-router-dom"

export default function HostVanPricing(){
    const {vanDetail} = useOutletContext()
    return (
        <h1>${vanDetail.price}/day</h1>
    )
}