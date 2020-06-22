import data from "./data.json";

const delayResponse = (data) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(data), 300);
  });

export const getRecommendedPeople = () => {
  return delayResponse(data);
};

export const getPeopleDetail = (id) => {
  const people = data.find((item) => item.id === id);
  return delayResponse(people);
};
