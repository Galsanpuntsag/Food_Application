"use client";
import React, {
  PropsWithChildren,
  useEffect,
  useState,
  useContext,
} from "react";
import { createContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AlertContext } from "./alertProvider";
import { Alert } from "@mui/material";

interface IUser {
  email: string;
  password?: string;
}

interface IUserContext {
  userForm: IUser;
  login: (email: string, password: string) => void;
  logout: () => void;
  user: any;
  token: any;
}

export const AuthContext = createContext<IUserContext>({} as IUserContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [reFetch, setReFetch] = useState(false);
  const [userForm, setUserForm] = useState<IUser>({
    email: "",
    password: "",
  });
  const { alert } = useContext(AlertContext);

  const login = async (email: string, password: string) => {
    console.log("loginWorking");
    console.log("UUU", userForm);
    try {
      setLoading(true);
      const {
        data: { token, user },
      } = await axios.post("http://localhost:8080/auth/signin", {
        userEmail: email,
        userPassword: password,
      });
      console.log("loginSetUSerworking", token, user);
      localStorage.setItem("token", token);
      console.log("TOKENATUSERprovider", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      setToken(token);

      await alert("Амжилттай нэвтэрлээ", "success");
      router.push("/");
      setReFetch(!reFetch);
    } catch (error) {
      console.log("ErrorROOROROROR", error);
      // toast.error("failed to enter", { autoClose: 3000 });
    }
  };

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user") as string);
    const loggedToken = localStorage.getItem("token");
    setUser(loggedUser);
    setToken(loggedToken!);
  }, []);

  const logout = () => {
    console.log("logout");

    localStorage.removeItem("user"),
      localStorage.removeItem("token"),
      setUser(null),
      setToken(null),
      router.replace("/login");
  };

  return (
    <>
      <AuthContext.Provider value={{ userForm, login, user, token, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
