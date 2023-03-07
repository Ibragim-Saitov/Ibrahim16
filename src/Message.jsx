import { useState } from "react";





function Message() {


  const [message, setMessage] = useState([
    {
      id: 1,
      text: 'Ассаламу Iалайкум',
      author: 'User',
      side: 'left'
    },
    {
      id: 2,
      text: 'Как дела?',
      author: 'Admin',
      side: 'right'
    },
    {
      id: 3,
      text: 'Нормально, как у тебя?',
      author: 'User',
      side: 'left'
    },
  ])


  const handlerRomeve = (id) => {
    setMessage(message.filter(item => {
      if(item.id === id){
        return false
      }
      return true
    }))
  }


  return(
  <div>
   {
     message.map(item => {
      return(
        <div className={`row ${item.side !== `right` ? 'justify-content-end' : ''}`}>
        <div className="col-5">
        <div className={`inbox p-2 rounded-3  text-white ${item.side === 'right' ? 'bg-success' : 'bg-primary'}`}>
        {item.text}
        <div>
        {item.author}
        </div>
        <button className="btn btn-danger" onClick={() => handlerRomeve(item.id)}>
          X
        </button>
        </div>
      </div>
    </div>
      )
    })
   }

  </div>
);

}


  export default Message;