import "./scss/globals.scss";
import { ThemeProvider } from "../theme";
import { UserProvider } from "@/context/userProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <UserProvider>
            <Header />
            {children}
            <Footer />
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
