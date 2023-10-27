import { LoanOfficerInterface } from 'interfaces/loan-officer';
import { VehicleLoanInterface } from 'interfaces/vehicle-loan';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BankInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  loan_officer?: LoanOfficerInterface[];
  vehicle_loan?: VehicleLoanInterface[];
  user?: UserInterface;
  _count?: {
    loan_officer?: number;
    vehicle_loan?: number;
  };
}

export interface BankGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
