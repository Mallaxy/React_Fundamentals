export const getCourses = (state) => state.courses;
export const getCourseById = (id) => (state) => {
  const courses = getCourses(state);

  return courses.find((item) => item.id === id);
};

export const filterCoursesByTitleOrId = (searchedValue) => (state) => {
  const courses = getCourses(state);
  if (searchedValue) {
    const regex = new RegExp(`${searchedValue}`, 'i');
    const regexTest = (string) => regex.test(string);
    const filteredItems = courses.filter(
      ({ id, title }) => regexTest(id) || regexTest(title)
    );
    return filteredItems;
  } else {
    return courses;
  }
};
