"use client";

import { Box } from "@mui/material";
import { useState } from "react";

export function LoginForm() {
  const [value, setValue] = useState<string>("");
  return (
    <div className="container w-auto flex justify-center">
      <form
        className="flex justify-center items-center bg-white  p-20 rounded"
        style={{ flexDirection: "column" }}
      >
        <input
          className="outline outline-1 outline-blue-500 hover:outline-blue-700 mb-5 p-2 rounded-md text-slate-950 w-full"
          required
          placeholder="Email"
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          className="outline outline-1 outline-blue-500  hover:outline-blue-700 mb-5 p-2 rounded-md text-slate-950 w-full	"
          required
          placeholder="Senha"
          type="password"
        />
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 mb-2 p-3 rounded-md w-full text-white"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
