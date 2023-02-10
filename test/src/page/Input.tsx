import React, { useState } from "react";

const Input: React.FC = () => {
  interface ISTATE {
    user: {
      emails: String;
      password: String;
    };
  }

  const [inpval, setInpval] = useState<ISTATE>({
    user: {
      emails: "",
      password: "",
    },
  });
  const onchangeINP = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setInpval({
      user: {
        ...inpval.user,
        [e.target.name]: e.target.value,
      },
    });
  };
  const onsubmitval = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

        alert(JSON.stringify(inpval.user) )
  }
  return (
    <div className="container mb-5">
      <form onSubmit={onsubmitval}>
        <div className="mb-3 ">
          <label htmlFor="gmails" className="mb-1">
            Enter Your Email
          </label>
          <input
            type="email"
            className="form-control"
            id="gmails"
            // value={inpval.user.emails}
            placeholder="
      Enter Your Email"
            name="emails"
            onChange={onchangeINP}
          ></input>
        </div>
        <div className="mb-3 ">
          <label htmlFor="pass" className="mb-1">
            Enter Your Password
          </label>
          <input
            type="password"
            className="form-control"
            id="pass"
            // value={inpval.user.password}
            name="password"
            placeholder="
      Enter Your password"
            onChange={onchangeINP}
          ></input>
        </div>
        <div className="mb-3 ">
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
