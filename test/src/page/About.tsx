import React, { Component } from 'react'
interface IPROPS {
    name:string
}


export default class About extends Component<IPROPS> {
    constructor(props:IPROPS){
        super(props)
    }
  render() {
    return (
      <>
      <h3 className='ms-2 container text-white text-center ms-auto' style={{background:"#6c73aa"}}>class Component</h3>
     <h4 className='me-auto text-center bg-secondary container'> Hello i am {this.props.name}</h4> <hr/>

      </>
    )
  }
}
