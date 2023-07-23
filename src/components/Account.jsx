import { useContext } from "react";
import { AccountContext } from "../App";
import { BsPersonCircle } from "react-icons/bs";
import Button from "./Button";

export default function Account() {
  const { account, setAccount } = useContext(AccountContext);

  return (
    <div className="bg-gray-200 text-black gap-4 flex shadow-xl flex-col p-8 rounded-3xl absolute right-0">
      <div className="flex gap-4 items-center">
        <BsPersonCircle size={64} />
        <div className="flex flex-col">
          <h3 className="font-bold text-lg">{account.name}</h3>
          <p>{account.email}</p>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <Button variant="tonal">Setelan</Button>
        <Button onClick={() => setAccount({})}>Logout</Button>
      </div>
    </div>
  );
}
