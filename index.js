const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'ee9fd5c4',
      i: 'tt0848228'
    }
  });

  console.log(response.data);
};

fetchData();
