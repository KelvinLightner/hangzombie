import {
  USER_WIN,
  GAME_OVER,
  INCREMENT_HANGMAN,
  FETCH_WORD,
  SET_WORD,
  SET_FETCH_WORD_ERROR,
  NEW_LETTER,
  INSERT_CORRECT_LETTER,
  INSERT_INCORRECT_LETTER
} from '../actions/types';

const reducers = {
  config: (state, action) => {
    return {
      MAX_HANGMAN: 6,
      MAX_WORD_LENGTH: 15
    };
  },

  gameState: (state  = { win: false, over: false }, action) => {
    switch (action.type) {
      case USER_WIN:
        return {...state, win: true};
      case GAME_OVER:
        return {...state, over: true};
      default:
        return state;
    }
  },

  hangman: (state = 0, action) => {
    switch (action.type) {
      case INCREMENT_HANGMAN:
        return state + 1;
      default:
        return state;
    }
  },
};

export default reducers;