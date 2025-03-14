const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'ee9fd5c4',
      s: 'avengers'
    }
  });

  console.log(response.data);
};

fetchData();
