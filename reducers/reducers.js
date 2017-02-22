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
      // sets the number of guessed letters till the game is over
      MAX_HANGMAN: 6,
      // sets the number of potential squares -> part of the architecture of rendering cards
      MAX_WORD_LENGTH: 15
    };
  },

  // initial game state has two variables (win and over)
  gameState: (state  = { win: false, over: false }, action) => {
    switch (action.type) {
      // when you call action USER_WIN you are telling the reducer to change state of win in the store to true
      case USER_WIN:
        return {...state, win: true};
      // the same is true for the GAME_OVER action
      case GAME_OVER:
        return {...state, over: true};
      default:
        return state;
    }
  },

  // initial state of hangman is 0
  hangman: (state = 0, action) => {
    switch (action.type) {
      // when the action hits this store the state will increase by 1
      case INCREMENT_HANGMAN:
        return state + 1;
      
      default:
        return state;
    }
  },

  word: (state = { word: '', fetching: false, error: null }, action) => {
    switch (action.type) {
      case FETCH_WORD:
        return {
          word: '',
          fetching: true,
          error: null
        };
      case SET_WORD:
        return {
          word: action.word,
          fetching: false, 
          error: null
        };
      case SET_FETCH_WORD_ERROR:
        return {
          word: '',
          fetching: false,
          error: action.error
        };
      default:
        return state;
    }
  },

  currentLetter: (state = null, action) => {
    switch (action.type) {
      case NEW_LETTER:
        return action.letter;
      default:
        return state;
    }
  },

  correctLetters: (state = [], action) => {
    switch (action.type) {
      case INSERT_CORRECT_LETTER:
        return [...state, action.letter];
      default:
        return state;
    }
  },

  incorrectLetters: (state = [], action) => {
    switch (action.type) {
      case INSERT_INCORRECT_LETTER:
        return [...state, action.letter];
      default:
        return state;
    }
  }
};

export default reducers;