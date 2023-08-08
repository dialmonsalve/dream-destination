
export const convertDate = (date: number) => {

  const customDate = new Date(date);


  const year = customDate.getFullYear();
  const month = customDate.toLocaleString('default', { month: 'short' });
  const day = customDate.getDate();

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
  


}
