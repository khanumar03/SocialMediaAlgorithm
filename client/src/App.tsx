import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "./firebase/firebase";
import { useUser } from "./zustand/state";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Authentication } from "./pages/Authentication";
import Home from "./pages/Home";

function App() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/auth", { replace: true });
        return;
      }
      navigate("/", { replace: true });
      setUser(user);
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Authentication />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
