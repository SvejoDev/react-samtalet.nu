import { useState, useEffect } from "react";
import Landing from "./pages/Landing";
import Admin from "./pages/Admin";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Simple routing
  if (currentPath === "/admin") {
    return <Admin />;
  }

  return <Landing />;
}
