import { createContext, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export const myContext = createContext({});

const Context = (props: any) => {
  const [userObject, setUserObject] = useState<any>();

  // get user's data
  useEffect(() => {
    axios
      .get("http://localhost:4000/getuser", { withCredentials: true }) // withCredentials makes sure the receiver is aware of the cookies in the browser
      .then((res: AxiosResponse) => {
        if (res.data) {
          // if get was successful
          console.log("res: ", res);
          console.log("res.data: ", res.data);

          setUserObject(res.data);
        }
      });

    console.log("GET by axios: ", userObject);
  }, []);

  return (
    <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
  );
};

export default Context;
