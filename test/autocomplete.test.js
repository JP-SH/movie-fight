// if you want to write a test with mocha you call the 'it' functiion
// mocha makes this function globally available so you dont have to require it in

it('Shows an autocomplete', () => {
  createAutoComplete({
    root: document.querySelector('#target'),
    fetchData() {
      return [
        { Title: 'Avengers' },
        { Title: 'The Nice Guys' },
        { Title: 'Dune part ||' }
      ];
    },
    renderOption(movie) {
      return movie.Title;
    }
  });
});
