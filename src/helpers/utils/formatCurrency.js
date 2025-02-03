// untuk fungsi reUsable untuk format mata uang

export const formatCurrency = (price, locale = "id-ID", currency = "IDR") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(price);
};
