"use client";
import { useState } from "react";
import { pb } from "./db";
import { useRouter } from "next/navigation";

const LogIn = () => {
  const router = useRouter();
  const logIn = async (username: string, password: string) => {
    try {
      await pb.collection("users").authWithPassword(username, password);
      router.refresh();
    } catch (err) {
      throw new Error("Invalid username or password");
    }
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form onSubmit={() => logIn(username, password)} method="POST">
        <label htmlFor="username">Username</label>
        <input
          className="text-black"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          className="text-black"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
