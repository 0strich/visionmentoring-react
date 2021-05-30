import {handleActions} from 'redux-actions';
import produce, {createDraft, finishDraft} from 'immer';
import * as REGISTER from './actions';

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  agreeService: false,
  agreePrivacy: false,
  jwt: null,
  failedMsg: null,
  responseData: {
    name: '',
    email: '',
    userId: '',
    jwt: '',
    responseMessage: null,
  },
};

const register = handleActions(
  {
    // 회원가입 상태값 초기화
    [REGISTER.RESET_STATE]: () => {
      const draft = createDraft(initialState);
      return finishDraft(draft);
    },
    [REGISTER.CHANGE_NAME]: (state, action) =>
      produce(state, (draft) => {
      draft.name = action.payload;
    }),
    [REGISTER.CHANGE_EMAIL]: (state, action) =>
      produce(state, (draft) => {
      draft.email = action.payload;
    }),
    [REGISTER.CHANGE_PASSWORD]: (state, action) =>
      produce(state, (draft) => {
      draft.password = action.payload;
    }),
    [REGISTER.CHANGE_PASSWORD_CONFIRM]: (state, action) =>
      produce(state, (draft) => {
      draft.passwordConfirm = action.payload;
    }),
    [REGISTER.CHANGE_AGREE_SERVICE]: (state, action) =>
      produce(state, (draft) => {
      draft.agreeService = action.payload;
    }),
    [REGISTER.CHANGE_AGREE_PRIVACY]: (state, action) =>
      produce(state, (draft) => {
      draft.agreePrivacy = action.payload;
    }),
    [REGISTER.POST_REGISTER_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
      console.log('POST_REGISTER_SUCCESS => ', action.payload.data);
      if (action.payload.data) {
        draft.responseData.name = action.payload.data.name;
        draft.responseData.email = action.payload.data.email;
        draft.responseData.userId = action.payload.data.userId;
        draft.responseData.jwt = action.payload.data.jwt;
      } else {
        draft.responseData.responseMessage = action.payload.response.data.responseMessage.split(
          '-',
        )[1];
      }
    }),
    [REGISTER.POST_REGISTER_FAILED]: (state, action) =>
      produce(state, (draft) => {
      console.log('POST_REGISTER_FAILED => ', action.payload);
      draft.failedMsg = action.payload;
    }),
  },
  initialState,
);

export default register;
