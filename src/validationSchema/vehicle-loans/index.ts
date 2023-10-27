import * as yup from 'yup';

export const vehicleLoanValidationSchema = yup.object().shape({
  loan_amount: yup.number().integer().required(),
  loan_duration: yup.number().integer().required(),
  interest_rate: yup.number().integer().required(),
  vehicle_type: yup.string().required(),
  bank_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
