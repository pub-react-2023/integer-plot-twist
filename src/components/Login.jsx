import { useState } from "react";
import { AccountContext, accounts } from "../App";
import { useContext } from "react";
import Button from "./Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAccount } = useContext(AccountContext);

  return (
    <form
      className="flex flex-col gap-4 max-w-md bg-gray-200 p-8 rounded-3xl mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        let result;
        for (const account of accounts) {
          if (account.email === email) {
            result = account;
            break;
          }
        }
        if (result) {
          if (result.password === password) {
            setAccount(result);
          } else {
            alert("Kata sandi salah.");
          }
        } else {
          alert("Akun tidak ditemukan.");
        }
      }}
    >
      <label>
        Email
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Kata sandi
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <Button>Login</Button>
    </form>
  );
}
