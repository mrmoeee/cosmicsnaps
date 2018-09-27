export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: "api/users",
    data: { user }
  });
};

export const login = (user) => {
  return $.ajax({
    method: "POST",
    url: "api/session",
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "api/session",
  });
};

export const fetchAllUsers = () => {
  return $.ajax({
    method: "GET",
    url: 'api/users'
  });
};

export const editUserInfo = (user, id) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${id}`,
    data: {
      user
    },
    contentType: false,
    processData: false
  });
};