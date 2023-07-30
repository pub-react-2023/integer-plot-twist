import { useState } from "react";
import Account from "./Account";
import Button from "./Button";
import { BsPersonCircle } from "react-icons/bs";
import { useContext } from "react";
import { AccountContext, LanguageContext, strings } from "../App";

export default function Header() {
  const { account } = useContext(AccountContext);
  const { language } = useContext(LanguageContext);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <header className="flex justify-between h-16 bg-blue-500 items-center text-white px-8">
      <h1 className="text-xl font-bold">PlotTwist</h1>
      <nav className="flex gap-4">
        <Button>{strings[language].home}</Button>
        <Button>{strings[language].about}</Button>
      </nav>
      {account ? (
        <div className="relative">
          <BsPersonCircle
            size={32}
            onClick={() => setIsAccountOpen(!isAccountOpen)}
          />
          {isAccountOpen && (
            <Account onLogout={() => setIsAccountOpen(false)} />
          )}
        </div>
      ) : (
        <Button>Login</Button>
      )}
    </header>
  );
}
