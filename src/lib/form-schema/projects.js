import { z } from 'zod';

export const updateProjectSchema = z.object({
  id: z.string(), // Assuming 'id' is a string like 'project_a'
  name: z.string().min(3, { message: 'Project name must be at least 3 characters long' }), // Name should have at least 3 characters
  description: z.string().min(10, { message: 'Description must be at least 10 characters long' }), // Description should be at least 10 characters
  startDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), { message: 'Please provide a valid start date' }), // Validate the start date format
  endDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), { message: 'Please provide a valid end date' }), // Validate the end date format
  is_favorite: z.boolean(), // Assuming 0/1 is mapped to true/false
  projectManager: z
    .string()
    .min(3, { message: 'Project Manager name must be at least 3 characters long' }), // Project Manager should have at least 3 characters
});
