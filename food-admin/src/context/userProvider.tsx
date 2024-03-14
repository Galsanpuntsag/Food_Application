"use client";
import axios from "axios";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { toast } from "react-toastify";
import { AuthContext } from "./authProvider";
import { AlertContext } from "./alertProvider";

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
  users: [IUser] | null;
  updateOrder: (
    orderId: string,
    dStatus: string,
    pStatus: string
  ) => Promise<void>;
  loading: boolean;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState<[IUser] | null>([] as any);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  const { token, user } = useContext(AuthContext);
  console.log("first", user);
  const { alert } = useContext(AlertContext);

  const updateOrder = async (
    orderId: string,
    pStatus: string,
    dStatus: string,
    user: string
  ) => {
    console.log("workUpdate");
    try {
      setLoading(true);
      const data = await axios.put(
        `http://localhost:8080/order/${orderId}`,
        { pStatus, dStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Хэрэглэгчдийн мэдээллийг амжилттай заслаа", "success");
    } catch (error) {
      console.log("ERR", error);
      alert("Хэрэглэгчдийн мэдээллийг засахад алдаа гарлаа.", "error");
    }
  };

  const GetUser = async () => {
    console.log("aaaa");
    try {
      const {
        data: { users },
      } = await axios.get("http://localhost:8080/auth/signup");
      console.log("GEtALluser", users);
      setUsers(users);
    } catch (error: any) {
      alert("Хэрэглэгчдийн мэдээллийг авахад алдаа гарлаа", "error");
    }
  };

  useEffect(() => {
    GetUser();
  }, []);
  return (
    <UserContext.Provider value={{ users, updateOrder, loading }}>
      {children}
    </UserContext.Provider>
  );
};
