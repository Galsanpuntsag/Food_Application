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
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { BasketContext } from "../BasketProvider";

interface IUser {
  name: string;
  email: string;
  password?: string;
}

interface IUserContext {
  userForm: IUser;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void;

  logout: () => void;
  user: any;
  token: any;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const { foodsInBask, setFoodsInBask } = useContext(BasketContext);
  console.log("_____", foodsInBask, setFoodsInBask);
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState<string | null>(null);
  const [reFetch, setReFetch] = useState(false);
  const [userForm, setUserForm] = useState<IUser>({
    name: "",
    email: "",
    password: "",
  });

  const login = async (email: string, password: string) => {
    console.log("loginWorking");
    console.log("UUU", userForm);
    try {
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

      console.log("loginSetUSerworking");
      await Swal.fire({
        title: "Таны нууц үг амжилттай солигдлоо",
        text: "та шинэ нууц үгээ ашиглана нэвтэрнэ үү",
        icon: "success",
      });
      router.push("/");
      setReFetch(!reFetch);
    } catch (error) {
      console.log("ErrorROOROROROR", error);
      // toast.error("failed to enter", { autoClose: 3000 });
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    console.log("signupWorking", name, email, password);
    console.log("UUU", userForm);
    try {
      const data: IUser = await axios.post(
        "http://localhost:8080/auth/signup",
        { name, email, password }
      );
      setUserForm(data);
      await Swal.fire({
        title: "Та амжилттай бүргүүлсэн",
        text: "Таны имэйл хаягруу баталгаажуулах линк илгээлээ ",
        icon: "success",
        timer: 5000,
      });
      router.push("/login");
    } catch (error) {
      console.log("ErrorROORORORORSignup", error);
      toast.error("failed to signup", { autoClose: 3000 });
    }
  };

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user") as string);
    const loggedToken = localStorage.getItem("token");
    if (!loggedUser || !loggedToken) {
    }
    setUser(loggedUser);
    setToken(loggedToken!);
  }, []);

  console.log("OrderluuyvuullaaData", foodsInBask);

  const logout = () => {
    console.log("logout");

    localStorage.removeItem("user"),
      localStorage.removeItem("token"),
      setUser(null),
      setToken(null),
      console.log("SBF", setFoodsInBask);
    router.replace("/login");
  };

  return (
    <>
      <UserContext.Provider
        value={{ userForm, login, signup, user, token, logout }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
