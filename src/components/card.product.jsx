'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { currencyFormatter } from '@/utils/currency.formatter';
import { useDeleteProduct } from '@/hooks/use.delete.product';

export const CardProduct = ({ datas, onDelete }) => {
  const { handleDeleteProduct } = useDeleteProduct(onDelete);

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Daftar Produk</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {datas.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg p-4 shadow-md bg-white relative"
          >
            <button
              onClick={() => handleDeleteProduct(item?._id)}
              className="absolute top-2 right-2 p-1 text-red-500 hover:text-red-700 cursor-pointer"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            <h3 className="text-md font-bold">{item.products}</h3>
            <p className="text-sm text-gray-600 pt-2">
              {currencyFormatter(item.price)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
