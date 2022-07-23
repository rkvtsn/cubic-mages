export const formatDate = (date: string | Date | number) => {
  return new Date(date).toLocaleDateString();
};

export const formatDateTime = (date: string | Date | number) => {
  return `${formatDate(date)} ${new Date(date).toLocaleTimeString()}`;
};
