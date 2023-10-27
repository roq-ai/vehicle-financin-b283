interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Loan Officer', 'Financial Advisor'],
  tenantName: 'Bank',
  applicationName: 'Vehicle Financing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal information',
    'Apply for vehicle loans',
    'Interact with financial advisors',
    'Interact with loan officers',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage bank details',
    'Manage vehicle loan details',
    'Manage business information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/128c21ea-1144-4499-b64d-3f8311f7f961',
};
