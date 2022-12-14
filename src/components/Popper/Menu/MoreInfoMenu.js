import PropTypes from 'prop-types';
import Button from "~/components/Button";
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles)

function MoreInfoMenu({ data, onClick }) {
  return (
    <Button className={cx('info-item', { separate: data.separate, })} onClick={onClick}>
      <div className={cx('info-wrapper')}>
        <span className={cx('info-icon')}>{data.icon}</span>
        <span>{data.title}</span>
      </div>
    </Button>
  )
}

MoreInfoMenu.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}

export default MoreInfoMenu;
