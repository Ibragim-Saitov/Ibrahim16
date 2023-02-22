const col = [
   {
      name: 'Хьамзат',
      age: 28,
      address: {
         city: 'Грозный',
         homeNumber: 32,
      },
      id: 1,
   },
   {
      name: 'Ахьмад',
      age: 32,
      address: {
         city: 'Шатой',
         homeNumber: 16,
      },
      id: 2,
   },
   {
      name: 'Абдул-Азим',
      age: 44,
      address: {
         city: 'Веденой',
         homeNumber: 22,
      },
      id: 3,
   },
   {
      name: 'Мохьмад',
      age: 19,
      address: {
         city: 'Урус-Мартан',
         homeNumber: 47,
      },
      id: 4,
   },
   {
      name: 'Али',
      age: 28,
      address: {
         city: 'Ачхой-Мартан',
         homeNumber: 6,
      },
      id: 5,
   },
]

export function List(props) {
return(
   <>
   {col.map((item) => {
      return(
         <div key={item.id} className = 'column'>
            <img src={logo} alt="" />
            <h2>{props.title}.</h2>
            <p>{`Имя: ${item.name}`}</p>
            <p>{`Возраст: ${item.age}`}</p>
            <h3>Адрес.</h3>
            <div>
               <p>{`Город: ${item.address.city}`}</p>
               <span>{`Дом номер: ${item.address.homeNumber}`}</span>
            </div>
         </div>
      )
   })}
   </>
);
}
