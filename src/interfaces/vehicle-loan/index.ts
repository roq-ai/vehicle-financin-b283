import { BankInterface } from 'interfaces/bank';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VehicleLoanInterface {
  id?: string;
  loan_amount: number;
  loan_duration: number;
  interest_rate: number;
  vehicle_type: string;
  bank_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  bank?: BankInterface;
  user?: UserInterface;
  _count?: {};
}

export interface VehicleLoanGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_type?: string;
  bank_id?: string;
  user_id?: string;
}
