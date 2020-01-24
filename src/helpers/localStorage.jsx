const LocalStorage = () => {
  // const [values, setValues] = useState(token);
  // // Return a wrapped version of useState's setter function that ...
  // // ... persists the new value to localStorage.
  const setToken = data => {
    localStorage.setItem(
      btoa(process.env.LOCALSTORAGE_KEY),
      JSON.stringify(data)
    );
  };

  const getToken = () => {
    const token = localStorage.getItem(btoa(process.env.LOCALSTORAGE_KEY));
    if (token) {
      const data = atob(token.split(".")[1]);
      return JSON.parse(data);
    } else {
      return null;
    }
  };

  const expiredToken = () => {
    const token = getToken();
    if (token) {
      const exp = token.exp;
      if (exp < Date.now() / 1000) {
        localStorage.clear();
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };

  return {
    setToken,
    getToken,
    expiredToken
  };
};

export default LocalStorage;
