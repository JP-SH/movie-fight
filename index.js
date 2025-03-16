const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'ee9fd5c4',
      s: searchTerm
    }
  });

  return response.data.Search;
};

const input = document.querySelector('input');



const onInput =  async event => {
  const movies =  await fetchData(event.target.value);
  };
input.addEventListener('input', debounce(onInput) );
