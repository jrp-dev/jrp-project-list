import { useGetHeaders, useGetProjects } from '../../lib/queries';
import { useNavigate } from 'react-router-dom';

const useViewModel = () => {
  const navigate = useNavigate();
  const { data } = useGetProjects();

  const { data: headers } = useGetHeaders();

  const onEdit = (id) => {
    navigate(`/projects/${id}`);
  };

  return {
    data,
    headers,
    onEdit,
  };
};

export default useViewModel;
