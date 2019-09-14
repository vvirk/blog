export const addId = arr => {
  const lastPost = arr.length - 1;
  const id = arr[lastPost].id + 1;
  return id;
};

export default addId;
