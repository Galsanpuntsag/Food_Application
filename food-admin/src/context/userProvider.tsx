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
  name: string;
  role: string;
  orders: {
    address: {
      duureg: string;
      khoroo: string;
      info: string;
    };
    delivery: {
      status: string;
      deliveredAt: string;
    };
    orderNo: string;
    payment: {
      paymentAmount: number;
      status: string;
      paidDate: string;
    };
  
  };
}

interface IUserContext {
  //   orders: IOrder;
  users: [IUser] | null;
}

export const OrderContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState<[IUser] | null>([] as any);
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
