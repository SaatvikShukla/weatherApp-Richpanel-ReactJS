import React, { useEffect, useState } from 'react';
import './index.css';
import { getEmails } from "./emailHome.service";

export default function EmailHome() {
  const [userEmails, setUserEmails] = useState([]);
  const [userEmailsCount, setUserEmailsCount] = useState([]);
  useEffect(() => {
    getEmails().then(resp => {
      console.log(resp);
      setUserEmails(resp.list);
      setUserEmailsCount(resp.total);
    })
  }, []);


  return (
    <>
      <div className={"pageWrapper"}>
        <div>
          {userEmails.map((item) => {
            console.log(item);
            return (
              <>
                <div className={"emailCard"}>
                  <div className="user-avatar">{item.from.name.charAt(0)}</div>
                  <div>From : {item.from.name} {"<" + item.from.email + ">"}</div>
                  <div>Subject : {item.subject} </div>
                  <div>{item.short_description}</div>
                </div>
              </>);
          })}
        </div>
      </div>
    </>
  );
}