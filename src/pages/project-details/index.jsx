import { Box, FormControl, FormLabel, Button, TextField } from '@mui/material';
import styled from '@emotion/styled';
import useViewModel from './use-view-model';

const StyledFormControl = styled(FormControl)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
  .MuiInput-root {
    margin-top: 0;
  }
  input {
    width: 300px;
    &:disabled {
      border: none;
    }
  }
  textarea {
    width: 300px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  margin-left: 0;
`;

const ProjectEditForm = () => {
  const { formData, handleChange, handleSubmit, error } = useViewModel();

  return (
    <Box className="w-full xl:w-1/2 py-4">
      <form onSubmit={handleSubmit}>
        <StyledFormControl>
          <FormLabel className="w-full md:w-[200px] md:text-right md:mr-7">Project ID</FormLabel>
          <TextField
            className="w-full md:w-auto"
            variant="outlined"
            name="id"
            disabled
            value={formData.id}
          />
          {error.id && <span className="text-red-500">{error.id}</span>}
        </StyledFormControl>
        <StyledFormControl>
          <FormLabel className="w-full md:w-[200px] md:text-right md:mr-7">Project Name</FormLabel>
          <TextField
            className="w-full md:w-auto"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            helperText={error.name}
            error={!!error.name}
          />
        </StyledFormControl>
        <StyledFormControl>
          <FormLabel className="w-full md:w-[200px] md:text-right md:mr-7">Description</FormLabel>
          <TextField
            className="w-full md:w-auto"
            variant="outlined"
            multiline
            name="description"
            value={formData.description}
            onChange={handleChange}
            minRows={3}
            helperText={error.description}
            error={!!error.description}
          />
        </StyledFormControl>
        <StyledFormControl>
          <FormLabel className="w-full md:w-[200px] md:text-right md:mr-7">Start Date</FormLabel>
          <TextField
            className="w-full md:w-auto"
            variant="outlined"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            helperText={error.startDate}
            error={!!error.startDate}
          />
        </StyledFormControl>
        <StyledFormControl>
          <FormLabel className="w-full md:w-[200px] md:text-right md:mr-7">End Date</FormLabel>
          <TextField
            className="w-full md:w-auto"
            variant="outlined"
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            helperText={error.endDate}
            error={!!error.endDate}
          />
        </StyledFormControl>
        <StyledFormControl>
          <FormLabel className="w-full md:w-[200px] md:text-right md:mr-7">
            Project Manager
          </FormLabel>
          <TextField
            className="w-full md:w-auto"
            variant="outlined"
            name="projectManager"
            value={formData.projectManager}
            onChange={handleChange}
            helperText={error.projectManager}
            error={!!error.projectManager}
          />
        </StyledFormControl>
        <StyledFormControl>
          <div className="w-full md:w-[200px] md:text-right md:mr-[1.75rem] xl:mr-[1.5rem]"></div>
          <StyledButton
            variant="contained"
            color="primary"
            type="submit"
            // className="w-full md:w-[200px]"
          >
            Update
          </StyledButton>
        </StyledFormControl>
      </form>
    </Box>
  );
};

export default ProjectEditForm;
