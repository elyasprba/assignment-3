export function validateInput(datas) {
  if (datas.product.length <= 3) {
    alert('Nama produk harus lebih dari 3 karakter');
    return false;
  }

  if (isNaN(datas.price)) {
    alert('Harga harus berupa angka');
    return false;
  }

  return true;
}
