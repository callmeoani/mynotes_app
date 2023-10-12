export const addToPersistence = (name, data) => {
  localStorage.setItem(`${name}`, JSON.stringify(data));
};

export const getFromPersistence = (name) => {
  JSON.parse(localStorage.setItem(`${name}`));
};
