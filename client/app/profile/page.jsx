"use client"

import React, {useEffect} from "react";
import useGetUser from "./../integration/getUser";

const profile = () => {
  let {user, getUser} = useGetUser();

  useEffect(() => {
    // setName(getUser().username)
    getUser();
    // setName(user.username)
    // console.log(user);
  }, []);

  return (
    <div className="bg-slate-500 h-screen w-screen">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">{user.username}</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default profile;
