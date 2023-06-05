export const searchFromList = (data, searchValue) => {
  const searchingItems = data.filter((obj) =>
    obj.name.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return searchingItems;
};
