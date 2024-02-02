"use client";
import React, { PropsWithChildren, useState } from "react";
import { createContext } from "react";

interface IUser {
  name: string;
  email: string;
  address: string;
  password?: string;
  rePassword?: string;
}

interface IUserContext {
  user: IUser;
  login: (
    name: string,
    email: string,
    password: string,
    address?: string
  ) => void;
}

export const UserContext = createContext<IUserContext>({
  user: {
    name: "",
    email: "",
    password: "",
    address: "",
  },
  login: function (): void {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    address: "",
    password: "",
    rePassword: "",
  });

  const login = (email: string, password: string): void => {};
  return (
    <>
      <UserContext.Provider value={{ user, login }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
