import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../../libs/createRequestSaga';

// 사용자 이메일
export const CHANGE_EMAIL = 'login/CHANGE_EMAIL';
export const change_email = createAction(CHANGE_EMAIL);

// 사용자 비밀번호
export const CHANGE_PASSWORD = 'login/CHANGE_PASSWORD';
export const change_password = createAction(CHANGE_PASSWORD);

// 로그인 상태값 초기화
export const RESET_STATE = 'login/RESET_STATE';
export const reset_state = createAction(RESET_STATE);

// 사용자 이메일
export const CHANGE_USER_EMAIL = 'login/CHANGE_USER_EMAIL';
export const change_user_email = createAction(CHANGE_USER_EMAIL);

// 사용자 비밀번호
export const CHANGE_USER_PASSWORD = 'login/CHANGE_USER_PASSWORD';
export const change_user_password = createAction(CHANGE_USER_PASSWORD);

// 관리자 이메일
export const CHANGE_ADMIN_EMAIL = 'login/CHANGE_ADMIN_EMAIL';
export const change_admin_email = createAction(CHANGE_ADMIN_EMAIL);

// 관리자 비밀번호
export const CHANGE_ADMIN_PASSWORD = 'login/CHANGE_ADMIN_PASSWORD';
export const change_admin_password = createAction(CHANGE_ADMIN_PASSWORD);

// 로그인 시도
export const [
  POST_LOGIN,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILED,
] = createRequestActionTypes('login/POST_LOGIN');
export const post_login = createAction(POST_LOGIN);

// 일반 사용자 로그인
export const [
  POST_USER_LOGIN,
  POST_USER_LOGIN_SUCCESS,
  POST_USER_LOGIN_FAILED,
] = createRequestActionTypes('login/POST_USER_LOGIN');
export const post_user_login = createAction(POST_USER_LOGIN);

// 관리자 로그인
export const [
  POST_ADMIN_LOGIN,
  POST_ADMIN_LOGIN_SUCCESS,
  POST_ADMIN_LOGIN_FAILED,
] = createRequestActionTypes('login/POST_ADMIN_LOGIN');
export const post_admin_login = createAction(POST_ADMIN_LOGIN);

// jwt 초기화
export const RESET_JWT = 'login/RESET_JWT';
export const reset_jwt = createAction(RESET_JWT);
