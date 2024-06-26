const NASA_API_KEY = '';

export const fetchApodData = async (date) => {
  const formattedDate = date.toISOString().split('T')[0];
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${formattedDate}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};
