import { useCallback } from 'react';

export function useDeleteProduct(onSuccess) {
  const handleDeleteProduct = useCallback(
    async (id) => {
      const url = 'https://v1.appbackend.io/v1/rows/3Ygjc2M8REfR';

      try {
        const response = await fetch(url, {
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
