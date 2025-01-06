import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProjectByID, useUpdateProject } from '../../lib/queries';

const useViewModel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetProjectByID(id);
  const updateProjectMutation = useUpdateProject();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const requiredFields = ['name', 'description', 'startDate', 'endDate', 'projectManager'];

    for (const field of requiredFields) {
      if (!formData[field]) {
        setError((prevError) => ({
          ...prevError,
          [field]: 'This field is required',
        }));
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) return;
    try {
      const res = await updateProjectMutation.mutateAsync({ id, payload: formData });
      setError({});
      res.status === 200 && navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  return {
    formData,
    handleChange,
    handleSubmit,
    error,
  };
};

export default useViewModel;
