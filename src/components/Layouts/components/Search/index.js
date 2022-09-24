import { useEffect, useState, useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles)

function Search() {

    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)

    const inputRef = useRef()
  
    useEffect(() => {
      setTimeout(() => {
        setSearchResult([1])
      }, 0)
    }, [])

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <HeadlessTippy 
          interactive
          visible={showResult && searchResult.length > 0}
          onClickOutside={handleHideResult}
          render={(attrs) => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h4 className={cx('search-title')}>
                    Accounts
                  </h4>
                  <AccountItem />
                </PopperWrapper>
              </div>
          )}
        >
          <div className={cx('search')}>
            <input 
                ref={inputRef}
                value={searchValue}
                className={cx('input')} 
                placeholder='Search accounts and videos' 
                spellCheck='false'
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}
            />
            {!!searchValue && (
                <button 
                    className={cx('clear-btn')} 
                    onClick={() => { 
                        setSearchValue(''); 
                        setSearchResult([]);
                        inputRef.current.focus(); 
                    }
                }>
                    <img className={cx('clear-icon')} src={images.icon_clear} alt='clear'/>
                </button>
            )}
            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/> */}
            <span className={cx('span-divine')}></span>
            
            <button className={cx('search-btn')}>
                <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>
    )
}

export default Search;
