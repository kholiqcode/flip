export function formatCurrency(amount: number): string {
  return 'Rp' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function formatDate(date: string): string {
  const dateFormat = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const formattedMonth = dateFormat.toLocaleDateString('id-ID', options);

  const splitDate = formattedMonth.split(' ');

  return `${splitDate[0]} ${splitDate[1]} ${splitDate[2]}`;
}
