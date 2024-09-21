import './CardDetail.css'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CardData from '../../../Utiles/Const/Card';
const CardDetail = () => {
    const { index } = useParams();
    const card = CardData[parseInt(index)]
    const navigateback=useNavigate();
    const clickHandle=()=>{
        navigateback('/')
    }
    // const navigateback = useNavigate(); // Initialize useNavigate hook

    // // Function to handle navigation back
    // const clickHandle = () => {
    //     navigateback('/'); // Navigate back to the card list page
    // };
    console.log(card)
    return (
        <div className="cardDetail">
            <div className="imageCardDetail">
                <img className='imgCardDetail' src={card.profileImage} alt="" />
            </div>
            <div className="cardDetailData">
                <h1 className="cardDetailHeading">{card.name}</h1>
                <p className="cardDetailHighligh">{card.profession}</p>
                <p className="cardDetailpara">{card.description}</p>
                <div className="cardDetailButton"></div>
                <button className="cardDetailButton1">Buy me a coffee</button>
                <button className="cardDetailButton2" onClick={clickHandle}>move back</button>

            </div>
        </div>
    )
}

export default CardDetail
