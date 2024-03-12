"use client";
import React, { PropsWithChildren, createContext } from "react";
import Swal, { SweetAlertIcon } from "sweetalert2";

interface ICreateAlertContext {
  alert: (title: string, icon: SweetAlertIcon) => void;
}
export const AlertContext = createContext({} as ICreateAlertContext);

const AlertProvider = ({ children }: PropsWithChildren) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  const alert = (title: string, icon: SweetAlertIcon) => {
    Toast.fire({
      icon: icon,
      title: title,
    });
  };

  return (
    <AlertContext.Provider value={{ alert }}>{children}</AlertContext.Provider>
  );
};

export default AlertProvider;
