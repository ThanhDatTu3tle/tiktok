import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper} from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MoreInfoMenu from './MoreInfoMenu';
import Header from './Header';

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {

  const renderInfo = () => {
    return items.map((item, index) => (
      <MoreInfoMenu key={index} data={item}  />
    ))
  }

  return (
    <div>
      <Tippy 
        interactive
        visible
        delay={[0, 700]}
        placement={'bottom-end'}
        render={(attrs) => (
            <div className={cx('moreinfo-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper className={cx('wrapper-moreinfo')}>
                <Header title={'Language'}/>
                {renderInfo()}
              </PopperWrapper>
            </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  )
}

export default Menu;
