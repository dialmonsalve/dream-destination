
export const convertDate = (date: number) => {

  const customDate = new Date(date);

  const year = customDate.getFullYear();
  const month = customDate.toLocaleString('default', { month: 'short' });
  const day = customDate.getDate();

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;

}

export const convertDateStringToNumber = (date: string | number) => {

  if (date=== '') return;
  
  const selectedDate = new Date(date);
  const timeSinceEpoch = selectedDate.getTime();
  
  const millisecondsPerDay = (24 * 60 * 60);
  const daysSinceEpoch = Math.floor((timeSinceEpoch * millisecondsPerDay) );

  return daysSinceEpoch;

}

