import {createAction} from 'redux-actions';
import {createRequestActionTypes} from '../../../libs/createRequestSaga';

// 회원가입 상태값 초기화
export const RESET_STATE = 'register/RESET_STATE';
export const reset_state = createAction(RESET_STATE);

// 이름
export const CHANGE_NAME = 'register/CHANGE_NAME';
export const change_name = createAction(CHANGE_NAME);

// 이메일
export const CHANGE_EMAIL = 'register/CHANGE_EMAIL';
export const change_email = createAction(CHANGE_EMAIL);

// 비밉번호
export const CHANGE_PASSWORD = 'register/CHANGE_PASSWORD';
export const change_password = createAction(CHANGE_PASSWORD);

// 비밀번호 확인
export const CHANGE_PASSWORD_CONFIRM = 'register/CHANGE_PASSWORD_CONFIRM';
export const change_password_confirm = createAction(CHANGE_PASSWORD_CONFIRM);

// 서비스 동의
export const CHANGE_AGREE_SERVICE = 'register/CHANGE_AGREE_SERVICE';
export const change_agree_service = createAction(CHANGE_AGREE_SERVICE);

// 정책 동의
export const CHANGE_AGREE_PRIVACY = 'register/CHANGE_AGREE_PRIVACY';
export const change_agree_privacy = createAction(CHANGE_AGREE_PRIVACY);

// 회원가입 시도
export const [
  POST_REGISTER,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_FAILED,
] = createRequestActionTypes('register/POST_REGISTER');
export const post_register = createAction(POST_REGISTER);
