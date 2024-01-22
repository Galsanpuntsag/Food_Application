import "./scss/globals.scss";
import { ThemeProvider } from "../theme";
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
          <Stack>
            <Header />
            <ThemeProvider>{children}</ThemeProvider>
            <Footer />
          </Stack>
        </Grid>
      </body>
    </html>
  );
}