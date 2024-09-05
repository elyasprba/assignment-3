import { BASE_URL } from '@/constants/bash.url';
import { useCallback } from 'react';

export function useDeleteProduct(onSuccess) {
  const handleDeleteProduct = useCallback(
    async (id) => {
      try {
        const response = await fetch(BASE_URL, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([id]),
        });

        if (response.ok) {
          await response.json();
          if (onSuccess) {
            onSuccess();
          }
        } else {
          console.error('Failed to delete product');
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    },
    [onSuccess]
  );

  return { handleDeleteProduct };
}
