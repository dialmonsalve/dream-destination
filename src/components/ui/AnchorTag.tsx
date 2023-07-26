import { NavLink } from 'react-router-dom';

interface AnchorTagProps {
  href: string;
  label: string;
  onClick?: () => void;
}
export const AnchorTag = ({ href, label, ...props }: AnchorTagProps) => {

  // const { onToggleSidebar } = useHandlerAnimations()

  return (
    <li className={`item item--active`}
      {...props}
    >
      <NavLink
        className={`item__link item__link--medium `}
        to={href}
        // onClick={onToggleSidebar}
        {...props}
      >
        {label}
      </NavLink>
    </li>
  )
}