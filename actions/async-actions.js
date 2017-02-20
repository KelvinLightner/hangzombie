import store from './../stores/store';

const getRandomWord = () =>  {
  const request = new Promise((resolve, reject) => {
    const url = 'https://gameapirails.herokuapp.com/';
    let req = new XMLHttpRequest();
    
    req.open('GET', url);

    req.onload = () => {
      if (req.status === 200) {
        resolve(JSON.parse(req.response));
      } else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = () => {
      reject(Error('API error. Try again.'));
    };

    req.send();

  });


  store.dispatch({ type: 'FETCHING_WORD' });

  request.then((response) => {
    const word = response.word;
    store.dispatch({ type: 'RESET_GAME' });
    store.dispatch({ type: 'SET_WORD', word });
  }).catch((error) => {
    store.dispatch({ type: 'SET_FETCH_WORD_ERROR',  error: error.message });
  });
};

export default getRandomWord;