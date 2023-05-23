import { useEffect, useState } from "react";
import "../styles/globals.css";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState();
  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <Component {...pageProps} theme={theme} setTheme={setTheme} />
      <Analytics mode={process.env.NODE_ENV} />
    </>
  );
}

export default MyApp;
