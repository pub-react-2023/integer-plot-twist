const products = [
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
];

export default function App() {
  return (
    <div className="group">
      <h1 className="text-center group-hover:bg-yellow-300 group-hover:text-green-700 p-2 bg-red-300 text-blue-700 text-6xl font-bold">
        Hello, world!
      </h1>
      <button>Ubah warna</button>
      <div className="flex flex-col sm:flex-row gap-2">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-200 rounded-3xl p-8">
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <button className="tombol">Beli</button>
          </div>
        ))}
      </div>
    </div>
  );
}
