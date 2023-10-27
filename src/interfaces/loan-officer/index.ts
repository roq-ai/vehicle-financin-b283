import { BankInterface } from 'interfaces/bank';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LoanOfficerInterface {
  id?: string;
  officer_name: string;
  experience: number;
  qualification: string;
  bank_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  bank?: BankInterface;
  user?: UserInterface;
  _count?: {};
}

export interface LoanOfficerGetQueryInterface extends GetQueryInterface {
  id?: string;
  officer_name?: string;
  qualification?: string;
  bank_id?: string;
  user_id?: string;
}
