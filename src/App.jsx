import CardDetail from "./Components/common/CardDetail/CardDetail";
import Card from "./Components/common/Cards/Card"
// import { useState } from "react"
// import CardData from "./Utiles/Con/st/Card"
// import { CardData } from "./Utiles/Const/Card"
// import './App.css'
// import CardDetail from "./Components/common/CardDetail/CardDetail"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  // const [selectedIndex, setSelectedIndex] = useState(null);
  // const indexHandle = () => {
  //   setSelectedIndex(index)
  // }
  // return (
  //   <div>
  //     {CardData.map((value, index, array) => {
  //       if (index === 5) {
  //         console.log(value)
  //       }
  //     })}
  //     <CardDetail />
  //     <div className="card_wrapper">
  //       {CardData.map((item, index) => {
  //         return (
  //           <Card key={index} data={item} />

  //         )
  //       })}
  //     </div>
  //   </div>
  // )

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/card/:index" element={<CardDetail />} />
      </Routes>
    </Router>
  )
}

export default App
