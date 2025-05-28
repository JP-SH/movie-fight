// if you want to write a test with mocha you call the 'it' functiion
// mocha makes this function globally available so you dont have to require it in

beforeEach(() => {
  document.querySelector('#target').innerHTML = '';
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

  const dropdown = document.querySelector('.dropdown');

  expect(dropdown.className).not.to.include('is-active');
});

// if you use the same widget for every test and the order of the test changes it will cause the tests to fail. For example if the test to check if the dropdown starts off closed is done after another test which had opened it. It will cause the test to fail
// Therefore you have to delete the widget after every test and then recreate it from scratch for the next test.
// To do this we can use a hook function which mocha provides

it('After searching, dropwdown opens up', () => {

});
