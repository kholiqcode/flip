export function formatCurrency(amount: number): string {
  return 'Rp' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export function formatDate(date: string): string {
  const dateFormat = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
  };
  const formattedMonth = dateFormat.toLocaleDateString('id-ID', options);
  return `${dateFormat.getDay()} ${formattedMonth} ${dateFormat.getFullYear()}`;
}
