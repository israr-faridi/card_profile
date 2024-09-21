
import CardData from '../../../Utiles/Const/Card'
import { useNavigate } from 'react-router-dom';
import './Card.css'
const Card = () => {
    const navigate = useNavigate();

    const handleCardClick = (index) => {
        navigate(`/card/${index}`)
        
    }
    return (
        <div className="card_wrapper">
            {CardData.map((data, index) => {
                return (
                    <div key={index} className="card">
                        <img className='profileImage' src={data.profileImage} alt="" />
                        <h2 className="name">{data.name}</h2>
                        <p className="skill_highlight">{data.profession}</p>
                        <p className="person_data">{data.description}</p>

                        <button className='btn' onClick={()=> handleCardClick(index)}>view profile</button>
                    </div>
                )
            })}
        </div >

    )
}

export default Card
