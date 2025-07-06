export interface DynamicFormField {
  type: 'text' | 'email' | 'checkbox' | 'password';
  label: string;
  name: string;
  required?: boolean;
}

