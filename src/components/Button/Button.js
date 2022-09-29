import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function Button({ 
  to, 
  href, 
  primary = false, 
  outline = false, 
  small = false, 
  large = false, 
  disable = false,
  children, 
  onClick, 
  ...passProps }) 
{

  let Comp = 'button'
  const props = {
    onClick,
    ...passProps,
  }

  // remove even listener when button is disabled
  if (disable) {
    Object.keys(props).forEach(key => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key]
      }
    })
  }

  // 
  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    large,
    disable
  })

  return (
    <Comp className={classes} {...props}>
      <span>{children}</span> 
    </Comp>
  )
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool, 
  outline: PropTypes.bool, 
  small: PropTypes.bool, 
  large: PropTypes.bool, 
  disable: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default Button;
