export const moneyFormatter = (val: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  })
    .format(val)
    .replaceAll(',', ' ');
};
