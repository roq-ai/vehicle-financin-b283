import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { vehicleLoanValidationSchema } from 'validationSchema/vehicle-loans';
import { BankInterface } from 'interfaces/bank';
import { UserInterface } from 'interfaces/user';
import { VehicleLoanInterface } from 'interfaces/vehicle-loan';

function VehicleLoanCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: VehicleLoanInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.vehicle_loan.create({ data: values as RoqTypes.vehicle_loan });
      resetForm();
      router.push('/vehicle-loans');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<VehicleLoanInterface>({
    initialValues: {
      loan_amount: 0,
      loan_duration: 0,
      interest_rate: 0,
      vehicle_type: '',
      bank_id: (router.query.bank_id as string) ?? null,
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: vehicleLoanValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Vehicle Loans',
              link: '/vehicle-loans',
            },
            {
              label: 'Create Vehicle Loan',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Vehicle Loan
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Loan Amount"
            formControlProps={{
              id: 'loan_amount',
              isInvalid: !!formik.errors?.loan_amount,
            }}
            name="loan_amount"
            error={formik.errors?.loan_amount}
            value={formik.values?.loan_amount}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('loan_amount', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Loan Duration"
            formControlProps={{
              id: 'loan_duration',
              isInvalid: !!formik.errors?.loan_duration,
            }}
            name="loan_duration"
            error={formik.errors?.loan_duration}
            value={formik.values?.loan_duration}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('loan_duration', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Interest Rate"
            formControlProps={{
              id: 'interest_rate',
              isInvalid: !!formik.errors?.interest_rate,
            }}
            name="interest_rate"
            error={formik.errors?.interest_rate}
            value={formik.values?.interest_rate}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('interest_rate', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.vehicle_type}
            label={'Vehicle Type'}
            props={{
              name: 'vehicle_type',
              placeholder: 'Vehicle Type',
              value: formik.values?.vehicle_type,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<BankInterface>
            formik={formik}
            name={'bank_id'}
            label={'Select Bank'}
            placeholder={'Select Bank'}
            fetcher={() => roqClient.bank.findManyWithCount({})}
            labelField={'name'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/vehicle-loans')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'vehicle_loan',
    operation: AccessOperationEnum.CREATE,
  }),
)(VehicleLoanCreatePage);
