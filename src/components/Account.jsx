import { useContext } from "react";
import { AccountContext } from "../App";

export default function Account() {
  const { account, setAccount } = useContext(AccountContext);

  return (
    <div>
      <h3>{account.name}</h3>
      <p>{account.email}</p>
      <div>
        <button>Setelan</button>
        <button onClick={() => setAccount({})}>Logout</button>
      </div>
    </div>
  );
}
