import { useGetProjects } from '../../lib/queries';

const useViewModel = () => {
  const { data } = useGetProjects();

  return {
    projects: data?.filter((project) => project.is_favorite === 1),
  };
};

export default useViewModel;
