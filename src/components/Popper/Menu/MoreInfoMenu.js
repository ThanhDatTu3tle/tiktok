import Button from "~/components/Button";
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles)


function MoreInfoMenu({ data, onClick }) {
  return (
    <Button className={cx('info-item')} onClick={onClick}>
      <div className={cx('info-wrapper')}>
        <span className={cx('info-icon')}>{data.icon}</span>
        <span>{data.title}</span>
      </div>
    </Button>
  )
}

export default MoreInfoMenu;
