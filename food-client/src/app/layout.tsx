import "./scss/globals.scss";
import { ThemeProvider } from "../theme";
import { UserProvider } from "@/context/userProvider";
import { CategoryProvider } from "@/context/categoryProvider";
import { FoodProvider } from "@/context/foodProvider";
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
        <Grid>
          <ThemeProvider>
            <UserProvider>
              <CategoryProvider>
                <FoodProvider>
                  <Header />
                  {children}
                  <Footer />
                </FoodProvider>
              </CategoryProvider>
            </UserProvider>
          </ThemeProvider>
        </Grid>
      </body>
    </html>
  );
}
