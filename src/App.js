
import './App.css';
import { useEffect, useState } from 'react';
import List from './component/list';
// import Info from './component/info';


function App() {
  let [data, setData] = useState([])
  let [visible, setVesible] = useState(false)
  let [index, setIndex]=useState(0)
  let [val, setVal]=useState(0)

  let chage = ()=>{
    return setIndex(val)
  }
  

  let display = ()=>{
    setVesible(true)
  }
  let hide = () =>{
    setVesible(false)
  }

  useEffect(
    
    ()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
        // console.log(res);
          return res.json()
        // console.log(db);

          

      })
      .then((resu)=>{
        // console.log(resu);
        
        setData(resu)
      })
      .catch((err) => console.log(`walo ${err}`))
      

    }, [])

    // let forData = ()=>{
    //   let arr = data[index]
    //     console.log(arr)
        

    //   }

    // useEffect(
    //   forData, [index]
    // )
    let [avoid, setAvoid] = useState(false)
    let toAvoid = ()=>{(avoid)? setAvoid(false) : setAvoid(true)}

  return (
    <div className="App">
      {!visible && <h1>Click the button to show all our users</h1>}
      {!visible && <button className='show' onClick={display}>Show All</button>}
      {!visible && <input type='number' value={val} onChange={(e)=>  setVal(e.target.value)} />}
      {!visible && <button onClick={(chage , toAvoid)}>Show user</button>}
      {data[index] && (
        <>
        {!visible && <h2 onClick={toAvoid}>{data[index].name}</h2>}
        {avoid && <h4> UserName: {data[index].name}, email : {data[index].email}, {data[index].phone}, {data[index].website}  </h4> }
        </>)}
      {visible && <List arr={data} move={hide}/>}
    </div>
  );
}



export default App;
