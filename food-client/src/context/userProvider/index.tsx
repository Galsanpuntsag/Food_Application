"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";

import { createContext } from "react";
import myAxios from "../../../utils/axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

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
    try {
      const {
        data: { token, user },
      } = await myAxios.post("/auth/signin", {
        userEmail: email,
        userPassword: password,
      });
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      setToken(token);
      await Swal.fire({
        title: "Та амжилттай нэвтэрлээ.",
        text: "Тавтай морилно уу",
        icon: "success",
      });
      router.push("/");
      setReFetch(!reFetch);
    } catch (error) {
      toast.error("failed to enter", { autoClose: 3000 });
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      const data: IUser = await myAxios.post("/auth/signup", {
        name,
        email,
        password,
      });
      setUserForm(data);
      await Swal.fire({
        title: "Та амжилттай бүргүүлсэн",
        text: "Таны имэйл хаягруу баталгаажуулах линк илгээлээ ",
        icon: "success",
        timer: 5000,
      });
      router.push("/login");
    } catch (error) {
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

  const logout = () => {
    localStorage.removeItem("user"),
      localStorage.removeItem("token"),
      setUser(null),
      setToken(null),
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
