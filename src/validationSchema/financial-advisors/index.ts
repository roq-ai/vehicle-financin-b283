import * as yup from 'yup';

export const financialAdvisorValidationSchema = yup.object().shape({
  advisor_name: yup.string().required(),
  experience: yup.number().integer().required(),
  qualification: yup.string().required(),
  specialization: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
