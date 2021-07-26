import { useEffect, useState } from 'react';
import './app.css';
import SneakersList from './components/sneakersList/sneakersList';

function App() {

  const [sneakerList, setSneakers] = useState([
    {
      "title":"에어 줌 템포 NEXT% x Off-White™",
      "theme":"Pink Glow",
      "releasePrice":"309,000 원",
      "imgUrl":"https://static-breeze.nike.co.kr/kr/launch/cmsstatic/product/-898099263/89c73f39-b431-4ab9-b85d-f86858e573eb_5_1.jpg?snkrBrowse",
      "drawPageUrl":"https://www.nike.com/kr/launch/t/men/fw/nike-sportswear/CV0697-400/fvts94/air-zoom-tempo-next-ow",
      "dateInfo":
        [
          "응모 시간 :7/23(금) 10:00 ~ 10:30 (30분)",
          "당첨자 발표 :7/23(금) 11:00"
        ],
      "drawStartTime":"10:00",
      "drawYear":2021,
      "drawDate":"7/23",
      "drawDay":"(금)"
    },
    {"title":"에어 줌 템포 NEXT% x Off-White™","theme":"Black","releasePrice":"309,000 원","imgUrl":"https://static-breeze.nike.co.kr/kr/launch/cmsstatic/product/CV0697-001/1a58f591-b885-4c06-a389-706aed3ccfa8_5.jpg?snkrBrowse","drawPageUrl":"https://www.nike.com/kr/launch/t/men/fw/nike-sportswear/CV0697-001/tdyt34/air-zoom-tempo-next-ow","dateInfo":["응모 시간 :7/23(금) 10:00 ~ 10:30 (30분)","당첨자 발표 :7/23(금) 11:00"],"drawStartTime":"10:00","drawYear":2021,"drawDate":"7/23","drawDay":"(금)"},
    {"title":"덩크 하이 1985 x UNDERCOVER","theme":"Gym Red","releasePrice":"179,000 원","imgUrl":"https://static-breeze.nike.co.kr/kr/launch/cmsstatic/product/DD9401-600/6b7379d2-242c-41a6-8c8c-19331477d6a4_5.jpg?snkrBrowse","drawPageUrl":"https://www.nike.com/kr/launch/t/men/fw/nike-sportswear/DD9401-600/yshq89/nike-dunk-hi-1985-u","dateInfo":["응모 시간 :7/28(수) 10:00 ~ 10:30 (30분)","당첨자 발표 :7/28(수) 11:00"],"drawStartTime":"10:00","drawYear":2021,"drawDate":"7/28","drawDay":"(수)"}
  ]);

  return (
    <>
      <div className="moving"></div>
      <SneakersList 
        className="sneakers-card-list"
        sneakersList={sneakerList}/>
    </>
  );
}

export default App;
