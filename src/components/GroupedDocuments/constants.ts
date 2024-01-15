import { generateDocumentsForCity } from './utils';

export const CITIES = [
  'Alabama',
  'California',
  'Colorado',
  'Florida',
  'Illinois',
  'Kansas',
  'New York',
  'Utah',
];

export const GROUPED_DOCUMENTS = [
  {
    id: 'drug-policies',
    title: 'Drug Policies',
    documents: generateDocumentsForCity('Drug Policy'),
  },
  {
    id: 'employee-handbooks',
    title: 'Employee Handbooks',
    documents: generateDocumentsForCity('Employee Handbook'),
  },
  {
    id: 'equipment-selection',
    title: 'Equipment Selection',
    documents: generateDocumentsForCity('Equipment Selection'),
  },
  {
    id: 'non-compete-agreements',
    title: 'Non-Compete Agreements',
    documents: generateDocumentsForCity('Non-Compete Agreemen'),
  },
  {
    id: 'payroll-handbook',
    title: 'Payroll Handbook',
    documents: generateDocumentsForCity('Payroll Handbook'),
  },
  {
    id: 'pto-policy',
    title: 'PTO Policy',
    documents: generateDocumentsForCity('PTO Policy'),
  },
  {
    id: 'safety-manuals',
    title: 'Safety Manuals',
    documents: generateDocumentsForCity('Safety Manual'),
  },
  {
    id: 'sexual-harassment',
    title: 'Sexual Harassment',
    documents: generateDocumentsForCity('Sexual Harassment'),
  },
];
