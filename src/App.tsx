import React, { useEffect, useState } from 'react';
import { getPrice } from './rates';

const {rates} = getPrice.data[0];
const occupancies = [
  {
    adults: 1,
    child: [
      0,
      10
    ]
  },
  {
    adults: 1,
    child: [
      2,
      10
    ]
  }
];

function App() {

  const [rateRefId, setRateRefId] = useState('not availble');
  const [roomRefId, setRoomRefId] = useState('deault');

  useEffect(() => {
    console.log("init()",  rates.length);
   
   const { roomRefId, rateRefId } = getIdsByGuest(occupancies[1]);
   setRateRefId(rateRefId);
   setRoomRefId(roomRefId);
  }, []);

 

  function getIdsByGuest(guest: any) {
    console.log("getIdByGuest");
    let roomRefId = "Not found";
    let rateRefId = "Not found";
    const cf = (a: any, b: any) => a - b;

    rates.forEach((rate: any) => {
      const compareChildren = guest.child.slice().sort(cf).toLocaleString() 
        === [rate.occupancies[0].childAges].slice().sort(cf).toLocaleString();
        
      if (compareChildren && guest.adults === parseInt(rate.occupancies[0].numOfAdults)) {
        roomRefId = rate.occupancies[0].roomId;
        rateRefId = rate.id;
        return { roomRefId, rateRefId };
      }
    });
    return { roomRefId, rateRefId };
  }

  return (
    <div className="container">
       "id": "7bdeab38-07d3-4eb8-a084-ad48043e07d9" <br />
     Rate Ref Id: {rateRefId}
     <br />  <br />
     "roomId": "4f750da1-5897-40eb-8e1c-49c276dcc732",   <br />
     Room Ref Id: {roomRefId}
    </div>
  );
}

export default App;
