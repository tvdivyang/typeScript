
import React, { useState } from 'react'
interface ISTATE {
  name: string,
  age: string,
}
interface IState {
  count: number
}

interface IPROPS {
  name: string,
  age: string
}
const Home: React.FC<IPROPS> = ({ age, name }) => {
  const [counter, setCounter] = useState<IState>({
    count: 0
  })
  const [state, setState] = useState<ISTATE>({
    name: "jay",
    age: "23"

  });

  
  const onclickINC = () => {
    setCounter ({ count : counter.count + 1});
    
  }
  const onclickDNC = () => {
    setCounter ({ count : counter.count - 1})
  }

  return (<>

    <hr className="border border-success border-5" />
    <div className='row'>
      <h3 className='ms-2 container text-white bg-dark text-center ms-auto mt-5'>Function Component</h3>
      <h4 className='me-auto text-center  container' style={{background:"#9acdc5"}}> Hello i am {name} and my age  {age}
      </h4> <hr />

      <div className='card col-md-4 p-2 mb-5 text-center m-auto w-25'>
        <h4>Function comp State</h4>
        <h4 style={{background:"#9acdc5"}}>Hello i am <span className='text-danger '>{state.name}</span> and my age <span className='text-danger'>{state.age}</span> </h4>

      </div>
      <div className='card col-md-4 p-2 mb-5 text-center m-auto w-25'>
        <h4>Event function</h4>
        <h4 style={{background:"#9acdc5"}}>Count : <span className='text-danger '>{counter.count}</span></h4>
        <div >
          <button className='btn btn-success me-5' onClick={onclickINC}>INC</button>
          <button className='btn btn-danger'onClick={onclickDNC}>DNC</button>
        </div>
      </div>
    </div>
    <hr className="border border-success border-5" />
  </>

  )
}
export default Home;