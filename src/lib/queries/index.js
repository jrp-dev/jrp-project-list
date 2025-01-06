import { useMutation, useQuery } from '@tanstack/react-query';
import { getHeaders, getProjectByID, getProjects, updateProjectByID } from '../mock-api';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

/** get all projects tanstack useQuery */
export const useGetProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });
};

/** Get Headers */
export const useGetHeaders = () => {
  return useQuery({
    queryKey: ['headers'],
    queryFn: getHeaders,
  });
};

/** Get Project By ID */
export const useGetProjectByID = (id) => {
  return useQuery({
    queryKey: ['projects', id],
    queryFn: () => getProjectByID(id),
  });
};

/** Update Project Details Mutation */
export const useUpdateProject = () => {
  return useMutation({
    mutationFn: (params) => updateProjectByID({ id: params.id, payload: params.payload }),
    onSuccess: () => {
      queryClient.invalidateQueries(['projects']);
    },
  });
};
