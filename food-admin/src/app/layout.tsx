import ThemeProvider from "@/theme";
import "./globals.css";
import { CategoryProvider } from "@/context/categoryProvider";
import { UserProvider } from "@/context/userProvider";
import { AuthProvider } from "@/context/authProvider";
import AlertProvider from "@/context/alertProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AlertProvider>
            <AuthProvider>
              <UserProvider>
                <CategoryProvider>{children}</CategoryProvider>
              </UserProvider>
            </AuthProvider>
          </AlertProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
