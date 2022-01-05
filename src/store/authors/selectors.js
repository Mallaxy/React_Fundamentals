export const getAuthors = (state) => state.authors;

export const getCourseAuthors = (courseAuthorsIDs) => (state) => {
  const authors = getAuthors(state);

  return authors?.filter((item) =>
    courseAuthorsIDs.some((id) => id === item.id)
  );
};
export const getAvailableAuthors = (courseAuthorsIDs) => (state) => {
  const authors = getAuthors(state);

  if (!courseAuthorsIDs.length) return authors;
  return authors.filter(
    (item) => !courseAuthorsIDs.some((id) => id === item.id)
  );
};
export const getCourseAuthorNamesString = (courseAuthorsIDs) => (state) => {
  const courseAuthors = getCourseAuthors(courseAuthorsIDs)(state);

  return courseAuthors.map((author) => author.name).join(', ');
};
