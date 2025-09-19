import { Link } from 'react-router';

type RouterLinkProps = React.ComponentProps<'a'>;

export function RouterLink(props: RouterLinkProps) {
  return (
    <Link {...props} to={props.href || '/'}>
      {props.children}
    </Link>
  );
}
