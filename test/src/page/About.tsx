import React, { Component } from "react";
interface IPROPS {
  name: string;
}

interface ISTATE {
  names: string;
}

export default class About extends Component<IPROPS, ISTATE> {
  constructor(props: IPROPS) {
    super(props);
    this.state = {
      names: "Ravi",
    };
  }
  render() {
    return (
      <>
        <hr className="border border-danger border-5" />
        <h3
          className="ms-2 container text-white text-center ms-auto"
          style={{ background: "#6c73aa" }}
        >
          class Component
        </h3>
        <h4 className="me-auto text-center container" style={{ background: "#e6bcc6" }} > Hello i am {this.props.name}</h4>
        <div className='card col-md-4 p-2 mb-5 text-center m-auto w-25'>
          <h4>Class comp State</h4>
          <h4 style={{ background: "#e6bcc6" }}>Hello i am <span className='text-danger '> {this.state.names}</span> </h4>
        </div>
        <hr className="border border-danger border-5" />
      </>
    );
  }
}
