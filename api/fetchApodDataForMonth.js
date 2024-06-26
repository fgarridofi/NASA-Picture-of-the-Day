const NASA_API_KEY = '';

export const fetchApodDataForMonth = async (year, month) => {
  const today = new Date();
  const isCurrentMonth = year === today.getFullYear() && month === today.getMonth() + 1; //+1 porque devuelve 0-11
  const lastDay = isCurrentMonth ? today.getDate()-1 : new Date(year, month, 0).getDate(); //se carga hasta el dia anterior porque no se añade la foto del dia a las 00
  
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&start_date=${year}-${String(month).padStart(2, '0')}-01&end_date=${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};
