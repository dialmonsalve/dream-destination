interface ButtonProps {
  backgroundColor?: 'blue' | 'red' | 'green' | 'primary' | 'primary-dark';
  hasBackground?: boolean;
  isAnimated?: boolean;
  label: string;
  margin?: string
  size?: 'small' | 'medium' | 'large' | 'toTable';
  type?: 'button' | 'submit';
  color?: string
  disabled?: boolean
  onClick?: () => void;
  width?:string;
}

export const Button = ({
  backgroundColor = 'blue',
  hasBackground = true,
  isAnimated = false,
  label,
  margin = '0px',
  size = 'medium',
  type = 'button',
  color,
  disabled,
  width,
  ...props
}: ButtonProps) => {

  const bg = `btn--${hasBackground ? backgroundColor : `outlined-${backgroundColor}`}`;
  const animated = isAnimated ? 'btn--animated' : '';

  const isDisabled = disabled ? 'disabled' : ''

  return (
    <button
      type={type}
      className={`btn ${bg} btn--${size} ${animated} ${isDisabled}`}
      style={{ margin, color, width}}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
