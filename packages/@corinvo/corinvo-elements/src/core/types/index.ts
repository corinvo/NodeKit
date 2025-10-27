export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export interface InputProps {
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  disabled?: boolean;
}
