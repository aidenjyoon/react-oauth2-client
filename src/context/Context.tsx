import { createContext, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export const userContext = createContext({});

const Context = (props: any) => {
  const [userObject, setUserObject] = useState<any>();

  // get user's data
  useEffect(() => {
    axios
      .get(process.env.URL_BACKEND + "/getuser", { withCredentials: true }) // withCredentials makes sure the receiver is aware of the cookies in the browser
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
    <userContext.Provider value={userObject}>
      {props.children}
    </userContext.Provider>
  );
};

export default Context;
