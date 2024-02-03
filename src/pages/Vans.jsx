import Card from '../Components/Card'


export default function Vans(){
    return (
        <div className="vans-page">
            <h1>Explore our van options</h1>
            <div className="van-filter">
                <div className="filters">Simple</div>
                <div className="filters">Luxury</div>
                <div className="filters">Rugged</div>
                <a href='#'>Clear filter</a>
            </div>
            <Card />
        </div>
            
    )
}