import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles)

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/324d3658d9f249c6de17426d23cc5206~c5_100x100.jpeg?x-expires=1664100000&x-signature=fJVGoTg27rXWNVXTUV%2Bkwv7A6TY%3D" alt="user-avatar"/>
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          Bơ Đáng Thương
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>bodangthuong</span>
      </div>
    </div>
  )
}

export default AccountItem;
