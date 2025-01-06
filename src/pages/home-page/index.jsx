import TableComponent from '../../components/table';
import useViewModel from './use-view-model';

const HomePage = () => {
  const { data, headers, onEdit } = useViewModel();

  if (!data || !headers) {
    return null;
  }

  return <TableComponent headers={headers} data={data} onEdit={onEdit} />;
};

export default HomePage;
