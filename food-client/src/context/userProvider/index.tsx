"use client";
import React, { PropsWithChildren, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

interface IUser {
  name: string;
  email: string;
  address: string;
  password?: string;
}

interface IUserContext {
  userForm: IUser;
  login: (email: string, password: string) => void;
  signup: (
    name: string,
    email: string,
    password: string,
    address: string
  ) => void;
}

export const UserContext = createContext<IUserContext>({
  userForm: {
    name: "",
    email: "",
    address: "",
  },
  login: function (): void {},
  signup: function (): void {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [userForm, setUserForm] = useState<IUser>({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const login = async (email: string, password: string) => {
    console.log("loginWorking");
    console.log("UUU", userForm);
    try {
      const data: IUser = await axios.post(
        "http://localhost:8080/auth/signin",
        {
          email,
          password,
        }
      );
      console.log("loginSetUSerworking");
      setUserForm(data);
      console.log("DATALogin", data);
      console.log("loginSetUSerworking");
      await Swal.fire({
        title: "Таны нууц үг амжилттай солигдлоо",
        text: "та шинэ нууц үгээ ашиглана нэвтэрнэ үү",
        icon: "success",
      });
      router.push("/");
    } catch (error) {
      console.log("ErrorROOROROROR", error);
      toast.error("failed to enter", { autoClose: 3000 });
    }
  };
  const signup = async (
    name: string,
    email: string,
    address: string,
    password: string
  ) => {
    console.log("signupWorking");
    console.log("UUU", userForm);
    try {
      const data: IUser = await axios.post(
        "http://localhost:8080/auth/signup",
        { name, email, address, password }
      );
      setUserForm(data);
      await Swal.fire({
        title: "Таны нууц үг амжилттай солигдлоо",
        text: "та шинэ нууц үгээ ашиглана нэвтэрнэ үү",
        icon: "success",
      });
      router.push("/login");
    } catch (error) {
      console.log("ErrorROORORORORSignup", error);
      toast.error("failed to signup", { autoClose: 3000 });
    }
  };

  return (
    <>
      <UserContext.Provider value={{ userForm, login, signup }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
