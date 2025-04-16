interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label = 'Button', onClick}): React.ReactNode => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default Button;