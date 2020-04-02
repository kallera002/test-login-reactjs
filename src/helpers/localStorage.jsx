const LocalStorage = () => {

  const setToken = data => {
    localStorage.setItem(
      btoa(process.env.LOCALSTORAGE_KEY),
      JSON.stringify(data)
    );
  };

  const getToken = () => {
    const token = localStorage.getItem(btoa(process.env.LOCALSTORAGE_KEY));
    if (token) {
      // console.log(token);
      // const data = atob(token.split(".")[1]);
      
      return JSON.parse(token);
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
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  const clearToten = () => {
    localStorage.clear();
  };

  return {
    setToken,
    getToken,
    expiredToken,
    clearToten
  };
};

export default LocalStorage;
