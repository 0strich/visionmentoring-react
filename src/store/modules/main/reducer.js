import produce from 'immer';
import {handleActions} from 'redux-actions';
import * as Dashboard from './actions';

const initialState = {};

const main = handleActions({}, initialState);

export default main;
