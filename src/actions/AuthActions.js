import * as React from 'react';

// URL DINAMICA
const base_url = 'http://192.168.1.134:8081';

export const signInAction = async (login, password) => {

  const url = `${base_url}/login`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: login,
        senha: password
      })
    });

    const { ok, headers: { map: { authorization } } } = await JSON.parse(JSON.stringify(response));
    
    return ok;
  } catch (e) {
    console.log(e);
    return false;
  }
}