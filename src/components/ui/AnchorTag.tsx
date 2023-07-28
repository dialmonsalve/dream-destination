import { NavLink } from 'react-router-dom';

interface AnchorTagProps {
  href: string;
  label: string;
  onClick?: () => void;
  itemClassName:string
  linkClassName:string
}
export const AnchorTag = ({ href, label,itemClassName,linkClassName, ...props }: AnchorTagProps) => {

  return (
    <li className={itemClassName}
      {...props}
    >
      <NavLink
        className={linkClassName}
        to={href}
        {...props}
      >
        {label}
      </NavLink>
    </li>
  )
}