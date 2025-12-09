export interface InputProps {
  helperText?: string;
  label?: string;
  type: string;
  value?: string | number,
  onChange?: (event: Event) => void;
}