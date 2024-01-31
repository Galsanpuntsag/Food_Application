"use client";
import React, { PropsWithChildren, useState } from "react";
import { createContext } from "react";

interface IUser {
  name: string;
  email: string;
  address: string;
  password?: string;
}

interface IUserContext {
  user: IUser;
  login: (name: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void;
}

export const UserContext = createContext<IUserContext>({
  user: {
    name: "",
    email: "",
    address: "",
  },
  login: function (): void {},
  signup: function (): void {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const login = (email: string, password: string): void => {};
  const signup = (name: string, email: string, password: string): void => {};
  return (
    <>
      <UserContext.Provider value={{ user, login, signup }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
