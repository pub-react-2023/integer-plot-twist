import { useState } from "react";
import Product from "./components/Product";
import Header from "./components/Header";
import { createContext } from "react";
import Login from "./components/Login";

export const AccountContext = createContext();

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

  const [account, setAccount] = useState({
    name: "",
    email: "",
  });

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      <div className="group">
        <Header account={account} />
        {/* <h1 className="text-center group-hover:bg-yellow-300 group-hover:text-green-700 p-2 bg-red-300 text-blue-700 text-6xl font-bold">
        Hello, world!
      </h1> */}
        <button>Ubah warna</button>
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
  );
}
