const getCookie = (name: string) => {
  const re = new RegExp(`${name}=([^;]+)`);
  const match = re.exec(document.cookie);
  return match !== null ? match[1] : '';
};

const createLogger = () => {
  if (window.location.search.indexOf('log=true') > -1 || (process.env.NODE_ENV === 'development')) {
    // tslint:disable-next-line
    return console.log;
  }
  // tslint:disable-next-line
  return () => {};
};

const log = createLogger();

export function get(url: string) {
  return fetch(url, {
    credentials: 'include',
  })
    .then((res) => {
      if (res.status === 404) {
        throw new Error('404');
      } else if (res.status === 403) {
        return res.json();
      }
      if (res.status > 400) {
        throw new Error('Det oppstod en feil');
      }
      return res.json();
    })
    .catch((err) => {
      log(err);
      throw err;
    });
}

export function post(url: string, body: object) {
  return fetch(url, {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'NAV_CSRF_PROTECTION': getCookie('NAV_CSRF_PROTECTION'),
    },
  })
    .then((res) => {
      if (res.status > 400) {
        log(res);
        throw new Error('Forespørsel feilet');
      } else {
        return res;
      }
    })
    .catch((err) => {
      log(err);
      throw err;
    });
}

export function getWithoutThrows(url: string) {
  return fetch(url, {
    credentials: 'include',
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      log(err);
      throw err;
    });
}
