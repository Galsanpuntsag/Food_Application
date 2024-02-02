"use client";
import React, { PropsWithChildren, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

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
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    address: "",
    avatarUrl: "",
    password: "",
    rePassword: "",
  });
  const router = useRouter();

  const login = async (email: string, password: string) => {
    try {
      const data = await axios.post("http://localhost:8080/auth/signin", {
        email: user.email,
        password: user.password,
      });
      await setUser(data);
      router.push("/");
    } catch (error) {
      console.log("Error", error);
      toast.error("failed to enter", { autoClose: 3000 });
    }
  };
  const signup = (
    name: string,
    email: string,
    address: string,
    password: string
  ): void => {};

  return (
    <>
      <UserContext.Provider value={{ user, login, signup }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
