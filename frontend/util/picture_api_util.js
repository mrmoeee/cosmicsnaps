export const fetchAllPictures = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/pictures'
  });
};

export const fetchPicture = (picId) => {
  return $.ajax({
    method: 'GET',
    url: `api/pictures/${picId}`
  });
};

export const createPicture = (picture) => {
  return $.ajax({
    method: 'POST',
    url: `api/pictures/`,
    data: picture,
    contentType: false,
    processData: false
  });
};

export const editPicture = (picture, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/pictures/${id}`,
    data: picture,
    contentType: false,
    processData: false
  });
};

export const deletePicture = (picId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/pictures/${picId}`
  });
};
