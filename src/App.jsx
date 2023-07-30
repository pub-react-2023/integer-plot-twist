import { useState } from "react";
import Product from "./components/Product";
import Header from "./components/Header";
import { createContext } from "react";
import Login from "./components/Login";
import Button from "./components/Button";
import { useRef } from "react";

export const strings = {
  id: {
    home: "Beranda",
    about: "Tentang",
  },
  en: {
    home: "Home",
    about: "About",
  },
  ar: {
    home: "بيت",
    about: "ْعَنِّي",
  },
};

export const AccountContext = createContext({
  account: null,
  setAccount: () => {},
});
export const LanguageContext = createContext({
  language: null,
  setLanguage: () => {},
});

export const accounts = [
  {
    email: "edo@gmail.com",
    password: "1234",
    name: "Mas Edo",
  },
  {
    email: "nyoman@gmail.com",
    password: "1234",
    name: "Mas Nyoman",
  },
  {
    email: "dedi@gmail.com",
    password: "1234",
    name: "Mas Dedi",
  },
];

export default function App() {
  const namaRef = useRef("Romi");
  const mahasiswaRef = useRef({
    nama: "Iwan",
    umur: 37,
    angkatan: -10,
  });
  const inputRef = useRef(null);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Samsung Galaxy S23",
      price: 20000000,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 30000000,
    },
    {
      id: 3,
      name: "Samsung Galaxy S25",
      price: 40000000,
    },
  ]);
  const [account, setAccount] = useState();
  const [language, setLanguage] = useState("id");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <AccountContext.Provider value={{ account, setAccount }}>
        <input
          ref={inputRef}
          className="border border-black"
          type="text"
          onChange={(e) => (mahasiswaRef.current.nama = e.target.value)}
        />
        <Button onClick={() => (inputRef.current.value = "PASIM")}>
          Ubah nilai si input
        </Button>
        {/* <h1 className="text-2xl">{namaRef.current.nama}</h1> */}
        <Button onClick={() => alert(mahasiswaRef.current.nama)}>
          Tampilkan nama
        </Button>
        <div className="group">
          <Header account={account} language={language} />
          {/* <h1 className="text-center group-hover:bg-yellow-300 group-hover:text-green-700 p-2 bg-red-300 text-blue-700 text-6xl font-bold">
        Hello, world!
      </h1> */}
          <Button onClick={() => setLanguage("id")}>Indonesia</Button>
          <Button onClick={() => setLanguage("en")}>English</Button>
          <Button onClick={() => setLanguage("ar")}>Arab</Button>
          <Button>Ubah warna</Button>
          <Product {...products[0]} />
          <Login />
          {/* <div className="flex flex-col sm:flex-row gap-2">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-200 rounded-3xl p-8">
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <button className="tombol">Beli</button>
          </div>
        ))}
      </div> */}
        </div>
      </AccountContext.Provider>
    </LanguageContext.Provider>
  );
}
