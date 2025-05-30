// if you want to write a test with mocha you call the 'it' functiion
// mocha makes this function globally available so you dont have to require it in

// if you use the same widget for every test and the order of the test changes it will cause the tests to fail. For example if the test to check if the dropdown starts off closed is done after another test which had opened it. It will cause the test to fail
// Therefore you have to delete the widget after every test and then recreate it from scratch for the next test.
// To do this we can use a hook function which mocha provides which is below.
// This code is ececuted for every following if statement

const waitFor = (selector) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (document.querySelector(selector)) {
        clearInterval(interval);
        clearTimeout(timeout);
        resolve();
      }
    }, 30);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      reject();
    }, 2000);
  });
};

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

it('Dropdown starts closed', () => {

  const dropdown = document.querySelector('.dropdown');

  expect(dropdown.className).not.to.include('is-active');
});

it('After searching, dropwdown opens up', async () => {
  const input = document.querySelector('input');
  input.value = 'avengers';
  input.dispatchEvent(new Event('input'));
  // we had to have an value in the input for the dropdown to come down so we can test if the dropdown worked. 'DispatchEvent' is a fake DOM event that makes the browser think an actual event has occured and therefore triggers the search
  await waitFor('.dropdown-item');

  const dropdown = document.querySelector('.dropdown');
  expect(dropdown.className).to.include('is-active');
});

it('After searching, display some results', async () => {
   const input = document.querySelector('input');
  input.value = 'avengers';
  input.dispatchEvent(new Event('input'));

  await waitFor('.dropdown-item');

  const items = document.querySelectorAll('.dropdown-item');
  expect(items.length).to.equal(3);
});
