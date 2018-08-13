export const fetchAllPictures = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/pictures'
  });
};

export const fetchPicture = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `api/pictures/${userId}`
  });
};

export const createPicture = (picture) => {
  return $.ajax({
    method: 'POST',
    url: `api/pictures/`,
    data: { picture }
  });
};
