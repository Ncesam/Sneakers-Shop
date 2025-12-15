import { ChangeEvent } from 'react';
import { TextInputChangeEvent } from 'react-native';

export interface InputProps {
  helperText?: string;
  label?: string;
  type: string;
  value?: string | number;
  onChange?: (event: TextInputChangeEvent) => void;
  errorText?: string;
}
