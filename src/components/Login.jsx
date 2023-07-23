import { useState } from "react";
import { AccountContext, accounts } from "../App";
import { useContext } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAccount } = useContext(AccountContext);

  return (
    <form
      className="flex flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        let result;
        accounts.forEach((account) => {
          if (account.email === email) {
            result = account;
          }
        });
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
      <button>Login</button>
    </form>
  );
}
