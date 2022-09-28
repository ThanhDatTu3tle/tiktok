import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { 
  InboxIcon, 
  KeyboardIcon, 
  LanguageIcon, 
  MessagesIcon, 
  UploadIcon, 
  FeedbackIcon } from '~/components/Icons';
import Search from '../Search';

const cx = classNames.bind(styles)
const MENU_MOREINFO_ITEMS = [
  {
    icon: <LanguageIcon />,
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
    icon: <FeedbackIcon />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <KeyboardIcon />,
    title: 'Keyboard shortcuts',
  },
]

function Header() {

  const currentUser = true

  const handleMenuChange = (moreInfoMenu) => {
    switch (moreInfoMenu.type) {
      case 'Language':
        console.log(moreInfoMenu)
        break;
      default:
    }
  }

  const userMenu = [
    {
      icon: <img src={images.icon_profile} alt='profile'/>,
      title: 'View profile',
      // to: '/feedback',
    },
    {
      icon: <img src={images.icon_getcoins} alt='getcoins'/>,
      title: 'Get coins',
      // to: '/feedback',
    },
    {
      icon: <img src={images.icon_settings} alt='settings'/>,
      title: 'Settings',
      to: '/setting',
    },
    ...MENU_MOREINFO_ITEMS,
    {
      icon: <img src={images.icon_logout} alt='logout'/>,
      title: 'Logout',
      to: '/feedback',
      separate: true,
    },
  ]

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <div className={cx('logo')}>
          <Link to={config.routes.home}>
            <img src={images.logo} alt='Tiktok'/>
          </Link>
        </div>

        {/* Search */}
        <Search />

        {/* More info */}
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <button className={cx('upload-btn')}>
                <UploadIcon />
                Upload
              </button>

              <Tippy content="Messages">
                <button className={cx('messages-btn')}>
                    <MessagesIcon />
                </button>
              </Tippy>
              
              <Tippy content="Inbox">
                <button className={cx('inbox-btn')}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <button className={cx('upload-btn')}>
                <img src={images.icon_upload} alt='upload'/>
                Upload
              </button>

              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_MOREINFO_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <button className={cx('user-btn')} alt='bodangthuong'>
                <Image 
                  className={cx('user-icon')} 
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/324d3658d9f249c6de17426d23cc5206~c5_100x100.jpeg?x-expires=1664294400&x-signature=4hdUn6fY7k6decoMPZY9vS6FNR4%3D" 
                  alt='' 
                  fallback='https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'
                />
              </button>
            ) : (
              <button className={cx('moreinfo-btn')}>
                <img src={images.icon_moreinfo} alt='moreInfo'/>
              </button>
            )}
          </Menu>
        </div>
        
      </div>
    </header>
  )
}

export default Header;
