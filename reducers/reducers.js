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
};

export default reducers;