import { uid } from "uid";
let mockNotes = [
  {
    id: uid(),
    title: "Note 1",
    desc: "Note 1 description",
    priority: 5,
    status: "Pending",
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
  {
    id: uid(),
    title: "Note 1",
    desc: "Note 1 description",
    priority: 5,
    status: "Pending",
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
  {
    id: uid(),
    title: "Note 2",
    desc: "Note 2 description",
    priority: 3,
    status: "Pending",
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
  {
    id: uid(),
    title: "Note 3",
    desc: "Note 3 description",
    priority: 1,
    status: "Pending",
    createdAt: "2024-03-12T05:19:29.533Z",
    updatedAt: "2024-03-12T05:19:29.533Z",
  },
];

const addMockNote = (requestConfig) => {
  const newNote = {
    id: uid(),
    ...requestConfig.data,
  };
  mockNotes.push(newNote);
  return Promise.resolve(newNote);
};
const updateMockNote = (requestConfig) => {
  const updateNote = {
    ...requestConfig.data,
  };
  mockNotes = mockNotes.map((x) => {
    if (x.id === updateNote.id) {
      x = updateNote;
    }
    return x;
  });
  return Promise.resolve(updateNote);
};
const searchMockNote = (requestConfig) => {
  const searchKey = requestConfig.params.searchKey;
  return Promise.resolve(
    mockNotes.filter((x) => {
      return x.title.includes(searchKey);
    })
  );
};
export const mockApi = (requestConfig) => {
  switch (requestConfig.url) {
    case "/add-note":
      return addMockNote(requestConfig);
    case "/update-note":
      return updateMockNote(requestConfig);
    case "/search-note":
      return searchMockNote(requestConfig);
    default:
      break;
  }
};
