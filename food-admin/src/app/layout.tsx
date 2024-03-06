import ThemeProvider from "@/theme";
import "./globals.css";
import { CategoryProvider } from "@/context/categoryProvider";
import UserProvider from "@/context/userProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <UserProvider>
            <CategoryProvider>{children}</CategoryProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
