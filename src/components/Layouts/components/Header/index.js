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
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles)
const MENU_MOREINFO_ITEMS = [
  {
    icon: <img src={images.icon_language} alt='language'/>,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'Language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
        {
          type: 'Language',
          code: 'en',
          title: 'English',
        },
      ]
    }
  },
  {
    icon: <img src={images.icon_feedback} alt='feedback'/>,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <img src={images.icon_keyboard} alt='keyboard'/>,
    title: 'Keyboard shortcuts',
  },
]

function Header() {

  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([])
    }, 0)
  }, [])

  const handleMenuChange = (moreInfoMenu) => {
    switch (moreInfoMenu.type) {
      case 'Language':
        console.log(moreInfoMenu)
        break;
      default:
    }
  }

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
          <Menu
            items={MENU_MOREINFO_ITEMS}
            onChange={handleMenuChange}
          >
            <button className={cx('moreinfo-btn')}>
              <img src={images.icon_moreinfo} alt='moreInfo'/>
            </button>
          </Menu>
        </div>
      </div>
    </header>
  )
}

export default Header;
