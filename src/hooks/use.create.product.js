import { BASE_URL } from '@/constants/bash.url';
import { validateInput } from '@/utils/validation';
import { useState } from 'react';

export function useFormHandler(initialState) {
  const [input, setInput] = useState(initialState);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  return { input, handleInputChange, setInput };
}

export function useSubmitHandler(input, setInput, onSuccess) {
  async function handleSubmit(event) {
    event.preventDefault();

    if (!validateInput(input)) {
      return;
    }

    try {
      const body = JSON.stringify([
        { products: input.product, price: parseInt(input.price) },
      ]);

      const result = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (result.ok) {
        alert('Produk sukses ditambahkan');
        setInput({
          product: '',
          price: '',
        });

        if (onSuccess) {
          onSuccess();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return { handleSubmit };
}
