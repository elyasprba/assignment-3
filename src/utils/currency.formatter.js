export function currencyFormatter(amount) {
  if (isNaN(amount)) return 'Invalid Amount';

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    currencyDisplay: 'symbol',
  }).format(amount);
}
