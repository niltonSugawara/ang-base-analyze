export const formatarDataDDMMYYYY = (data: string): string => {
  return data.substring(0, 10).split('-').reverse().join('/');
};
