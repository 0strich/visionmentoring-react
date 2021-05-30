import {handleActions} from 'redux-actions';
import produce, {createDraft, finishDraft} from 'immer';
import * as LOGIN from './actions';

const initialState = {
  user: {
    loginData: null,
    email: '',
    password: '',
    userId: null,
    jwt: null,
    degree: null,
    loginFailed: false,
    responseData: {
      jwt: null,
      userId: null,
      email: null,
      degree: null,
      responseMessage: null,
    },
  },
  admin: {
    loginData: null,
    email: '',
    password: '',
    userId: null,
    jwt: null,
    degree: null,
    loginFailed: false,
    responseData: {
      jwt: null,
      userId: null,
      email: null,
      degree: null,
      responseMessage: null,
    },
  },
  loginData: null,
  email: '',
  password: '',
  userId: null,
  jwt: null,
  degree: null,
  loginFailed: false,
  responseData: {
    jwt: '',
    userId: '',
    email: '',
    responseMessage: null,
  },
};

const login = handleActions(
  {
    // 로그인 상태값 초기화
    [LOGIN.RESET_STATE]: () => {
      const draft = createDraft(initialState);
      return finishDraft(draft);
    },
    [LOGIN.CHANGE_EMAIL]: (state, action) =>
      produce(state, (draft) => {
      draft.email = action.payload;
    }),
    [LOGIN.CHANGE_PASSWORD]: (state, action) =>
      produce(state, (draft) => {
      draft.password = action.payload;
    }),
    /* 일반 사용자 */
    [LOGIN.CHANGE_USER_EMAIL]: (state, action) =>
      produce(state, (draft) => {
      draft.user.email = action.payload;
    }),
    [LOGIN.CHANGE_USER_PASSWORD]: (state, action) =>
      produce(state, (draft) => {
      draft.user.password = action.payload;
    }),
    /* 관리자 */
    [LOGIN.CHANGE_ADMIN_EMAIL]: (state, action) =>
      produce(state, (draft) => {
      draft.admin.email = action.payload;
    }),
    [LOGIN.CHANGE_ADMIN_PASSWORD]: (state, action) =>
      produce(state, (draft) => {
      draft.admin.password = action.payload;
    }),
    [LOGIN.POST_LOGIN_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
      console.log('POST_LOGIN_SUCCESS => ', action.payload);
      if (action.payload.data) {
        console.log('POST_LOGIN_SUCCESS => ', action.payload);
        draft.responseData.jwt = action.payload.data.jwt;
        draft.responseData.userId = action.payload.data.userId;
        draft.responseData.email = action.payload.data.email;
        draft.responseData.degree = action.payload.data.degree;
      } else {
        console.log('POST_LOGIN_SUCCESS => ', action.payload);
        draft.responseData.responseMessage = action.payload.response.data.responseMessage.split(
          '-',
        )[1];
      }
      draft.loginData = action.payload.data;
      draft.jwt = action.payload.data.jwt;
      draft.degree = action.payload.data.degree;
      draft.userId = action.payload.data.userId;
      draft.loginFailed = false;
    }),
    [LOGIN.POST_LOGIN_FAILED]: (state, action) =>
      produce(state, (draft) => {
      console.log('POST_LOGIN_FAILED => ', action.payload.data);
      draft.loginFailed = true;
    }),

    [LOGIN.POST_USER_LOGIN_SUCCESS]: (state, action) => {
      console.log('POST_USER_LOGIN_SUCCESS => ', action.payload.data);
      return produce(state, (draft) => {
        if (action.payload.data) {
          draft.user.responseData.jwt = action.payload.data.jwt;
          draft.user.responseData.userId = action.payload.data.userId;
          draft.user.responseData.email = action.payload.data.email;
          draft.user.responseData.name = action.payload.data.name;
          draft.user.responseData.degree = action.payload.data.degree;
        } else {
          draft.user.responseData.responseMessage = action.payload.response.data.responseMessage.split(
            '-',
          )[1];
        }
      });
    },
    [LOGIN.POST_USER_LOGIN_FAILED]: (state, action) => {
      console.log('POST_USER_LOGIN_FAILED => ', action.payload.data);
      return produce(state, (draft) => {});
    },

    [LOGIN.POST_ADMIN_LOGIN_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
      console.log('POST_ADMIN_LOGIN_SUCCESS => ', action.payload.data);
      if (action.payload.data) {
        draft.admin.responseData.jwt = action.payload.data.jwt;
        draft.admin.responseData.userId = action.payload.data.userId;
        draft.admin.responseData.email = action.payload.data.email;
        draft.admin.responseData.name = action.payload.data.name;
        draft.admin.responseData.degree = action.payload.data.degree;
      } else {
        draft.admin.responseData.responseMessage = action.payload.response.data.responseMessage.split(
          '-',
        )[1];
      }
    }),
    [LOGIN.POST_ADMIN_LOGIN_FAILED]: (state, action) =>
      produce(state, (draft) => {
      console.log('POST_ADMIN_LOGIN_FAILED => ', action.payload.data);
      draft.loginFailed = true;
    }),
    [LOGIN.RESET_JWT]: (state, action) =>
      produce(state, (draft) => {
      draft.jwt = null;
      draft.degree = null;
      draft.userId = null;
    }),
  },
  initialState,
);

export default login;
