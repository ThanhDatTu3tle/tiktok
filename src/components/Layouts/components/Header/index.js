import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';



const cx = classNames.bind(styles)

function Header() {

  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([])
    }, 0)
  }, [])

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt='Tiktok'/>
        </div>

        <Tippy 
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h4 className={cx('search-title')}>
                    Accounts
                  </h4>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </PopperWrapper>
              </div>
          )}
        >
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
        </Tippy>
        <div className={cx('actions')}>
          <button className={cx('upload-btn')}>
            <img src={images.icon_upload} alt='upload'/>
            Upload
          </button>
          <Button primary>Log in</Button>
          <button className={cx('moreinfo-btn')}>
            <img src={images.icon_moreinfo} alt='moreInfo'/>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;
