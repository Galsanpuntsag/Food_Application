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
  address?: string;
  password?: string;
  rePassword?: string;
  avatarUrl?: string;
}

interface IUserContext {
  user: IUser;
  login: (email: string, password: string) => void;
  signup: (
    name: string,
    email: string,
    password: string,
    address: string,
    avatarUrl?: string
  ) => void;
}

export const UserContext = createContext<IUserContext>({
  user: {
    name: "",
    email: "",
    password: "",
    address: "",
    avatarUrl: "",
  },
  login: function (): void {},
  signup: function (): void {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    address: "",
    avatarUrl: "",
    password: "",
    rePassword: "",
  });

  const login = async () => {
    console.log("loginWorking");
    console.log("UUU", user);
    try {
      const data: IUser = await axios.post(
        "http://localhost:8080/auth/signin",
        {
          email: user.email,
          password: user.password,
        }
      );
      console.log("loginSetUSerworking");
      setUser(data);
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
  const signup = async () => {
    console.log("signupWorking");
    console.log("UUU", user);
    try {
      const data: IUser = await axios.post(
        "http://localhost:8080/auth/signup",
        {
          name: user.name,
          email: user.email,
          password: user.password,
          address: user.address,
          rePassword: user.rePassword,
        }
      );
      setUser(data);
      await Swal.fire({
        title: "Таны нууц үг амжилттай солигдлоо",
        text: "та шинэ нууц үгээ ашиглана нэвтэрнэ үү",
        icon: "success",
      });
      router.push("/login");
    } catch (error) {
      console.log("ErrorROORORORORSignup", error);
      toast.error("failed to enter", { autoClose: 3000 });
    }
  };

  return (
    <>
      <UserContext.Provider value={{ user, login, signup }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
