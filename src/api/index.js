import { callApi, axiosCall } from "./callApi";

export const addNote = (note) => {
  return callApi({
    url: "/add-note",
    method: "POST",
    data: note,
  });
};
export const updateNote = (note) => {
  return callApi({
    url: "/update-note",
    method: "PUT",
    data: note,
  });
};
export const deleteNote = (id) => {
  return callApi({
    url: "/delete-note",
    method: "DELETE",
    params: id,
  });
};
export const searchNote = (searchParams) => {
  return callApi({
    url: "/search-note",
    method: "GET",
    params: searchParams,
  });
};
export const login = (userName, password) => {
  return axiosCall({
    url: "/login",
    method: "POST",
    data: { userName, password },
  }).then((response) => {
    localStorage.setItem("token", response.token);
    localStorage.setItem("refreshToken", response.refreshToken);
    return response;
  });
};
