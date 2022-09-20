import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt='Tiktok'/>
        </div>

        <div className={cx('search')}>
          <input className={cx('input')} placeholder='Search accounts and videos' spellCheck='false'/>
          <button className={cx('clear-btn')}>
            <img className={cx('clear-icon')} src={images.icon_clear} alt='clear'/>
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
          <span className={cx('span-divine')}></span>
          <button className={cx('search-btn')}>
            <img className={cx('search-icon')} src={images.icon_search} alt='search'/>
          </button>
        </div>

        <div className={cx('actions')}>
          <h3>Upload</h3>
          <h3>Login</h3>
        </div>
      </div>
    </header>
  )
}

export default Header;
