const host = 'http://localhost/v1';
// const host = 'https://au-api.salt-mine.io/v1';
export const socketHost = 'http://localhost';
// export const socketHost = 'https://au-api.salt-mine.io';

export const urls = {
  users: `${host}/users`,
  did: `${host}/did`,
  transaction: `${host}/transaction`,
};

export const jsonHeader = () => ({
  'Content-Type': 'application/json',
});

export const jsonUserTokenHeader = (token) => ({
  'Content-Type': 'application/json',
  user_token: token,
});

export const headers = (token) => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
});

export const formDataHeaders = (token) => ({
  'Content-Type': 'multipart/form-data',
  Authorization: `Bearer ${token}`,
});

export const jsonClientTokenHeader = (token) => ({
  'Content-Type': 'application/json',
  client_token: token,
});

export const objToFormData = (obj) => {
  const formData = new FormData();

  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      for (const eachKey in obj[key]) {
        formData.append('productSub', obj[key][eachKey]);
      }
    }
    formData.append(key, obj[key]);
  }

  return formData;
};
