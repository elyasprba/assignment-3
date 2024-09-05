'use client';

import { useState, useEffect } from 'react';
import { CardProduct } from '@/components/card.product';
import { Form } from '../components/form';
import { useFormHandler, useSubmitHandler } from '@/hooks/use.create.product';
import { BASE_URL } from '@/constants/bash.url';

export default function Home() {
  const { input, handleInputChange, setInput } = useFormHandler({
    product: '',
    price: '',
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function refreshData() {
    getAllProducts();
  }

  const { handleSubmit } = useSubmitHandler(input, setInput, refreshData);

  async function getAllProducts() {
    try {
      const response = await fetch(BASE_URL);
      const result = await response.json();
      setData(result.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center sm:p-14 p-8 w-full">
        Loading...
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center sm:p-14 p-8 w-full">
      <div className="py-4">
        <h1 className="sm:text-xl font-bold">
          Daftar menu resto pagi sampe malam
        </h1>
      </div>
      <section className="border sm:p-8 p-5 md:w-1/3 w-full">
        <form onSubmit={handleSubmit}>
          <Form
            label="Nama Produk"
            onChange={handleInputChange}
            name="product"
            value={input.product}
          />
          <Form
            label="Harga"
            onChange={handleInputChange}
            name="price"
            value={input.price}
          />
          <div className="pt-4">
            <button
              className="bg-blue-600 py-2 px-5 rounded-md border border-slate-400 text-white"
              type="submit"
            >
              Tambah
            </button>
          </div>
        </form>
      </section>

      <section className="mt-8 w-full">
        <CardProduct datas={data} onDelete={getAllProducts} />
      </section>
    </main>
  );
}
