"use client";
import axios from "axios";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

// interface IOrder {
//   orders: {
//     orderNo: string;
//   };
// }

interface IUser {
  users: {
    name: string;
    selected: string;
    length: string;
    avatarUrl: string;
    company: string;
    role: string;
    isVerified: boolean;
    status: string;
    handleClick: () => void;
  };
}

interface IUserContext {
  //   orders: IOrder;
  users: IUser;
}

export const OrderContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const GetUser = async () => {
    console.log("aaaa");
    try {
      const {
        data: { users },
      } = await axios.get("http://localhost:8080/auth/signup");
      console.log("GEtALluser", users);
      setUsers(users);
    } catch (error: any) {
      alert("error" + error.message);
    }
  };

  useEffect(() => {
    GetUser();
  }, []);
  return (
    <OrderContext.Provider value={{ users }}>{children}</OrderContext.Provider>
  );
};

export default UserProvider;
