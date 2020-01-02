const errorHandler422 = async data => {
  let errorList = {};
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    errorList = { ...errorList, ...element };
  }
  return errorList;
};

export default errorHandler422;
