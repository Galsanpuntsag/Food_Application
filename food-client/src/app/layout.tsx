import "./scss/globals.scss";
import { ThemeProvider } from "../theme";
import { UserProvider } from "@/context/userProvider";
import { CategoryProvider } from "@/context/categoryProvider";
import { FoodProvider } from "@/context/foodProvider";
import BasketProvider from "@/context/BasketProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Grid } from "@mui/material";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Grid overflow={"hidden"}>
          <ThemeProvider>
            <UserProvider>
              <CategoryProvider>
                <FoodProvider>
                  <BasketProvider>
                    <Header />
                    {children}
                    <Footer />
                    <ToastContainer />
                  </BasketProvider>
                </FoodProvider>
              </CategoryProvider>
            </UserProvider>
          </ThemeProvider>
        </Grid>
      </body>
    </html>
  );
}
