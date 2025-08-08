export interface ButtonProps {
  variant: 'primary' | 'secondary';
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
   children?: React.ReactNode; 
  href?: string; 
  
}
