import * as yup from 'yup';

export const loanOfficerValidationSchema = yup.object().shape({
  officer_name: yup.string().required(),
  experience: yup.number().integer().required(),
  qualification: yup.string().required(),
  bank_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
