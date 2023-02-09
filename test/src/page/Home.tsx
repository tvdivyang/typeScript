import React from 'react'
interface IPROPS {
  title:string,
  name:string
}

const Home:React.FC<IPROPS> =({title,name})=> {
  return (
    <>
     <h3 className='ms-2 container text-white bg-dark text-center ms-auto'>Function Component</h3>
     <h4 className='me-auto text-center bg-secondary container'> Hello i am {name}</h4> <hr/>
    </>
  )
}
 export default Home;