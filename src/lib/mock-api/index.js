import { data, headers } from '../constants/json-stabs';

/** Get all projects */
export const getProjects = async () => {
  const ls = localStorage.getItem('projects');
  if (!ls) localStorage.setItem('projects', JSON.stringify(data));
  const parsed = ls ? JSON.parse(ls) : data;

  return new Promise((resolve) => resolve(parsed));
};

/** Get project by ID */
export const getProjectByID = async (id) => {
  const ls = localStorage.getItem('projects');
  const parsed = ls ? JSON.parse(ls) : [];

  const item = parsed.find((item) => item.id === id);

  return new Promise((resolve) => resolve(item));
};

/** Update project by ID */
export const updateProjectByID = async ({ id, payload }) => {
  if (!id) {
    throw new Error('An ID is required to update a project item.');
  }

  const ls = localStorage.getItem('projects');
  const parsed = ls ? JSON.parse(ls) : [];

  // Find the index of the item to update
  const index = parsed.findIndex((item) => item.id === id);

  if (index === -1) {
    throw new Error(`Project item with ID ${id} not found.`);
  }

  // Update the item
  parsed[index] = { ...parsed[index], ...payload };

  // Save updated data back to localStorage
  localStorage.setItem('projects', JSON.stringify(parsed));

  return new Promise((resolve) => resolve({ status: 200 }));
};

/** Get Headers */
export const getHeaders = async () => {
  return new Promise((resolve) => resolve(headers));
};
