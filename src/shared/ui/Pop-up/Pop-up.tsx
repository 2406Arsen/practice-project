import React, { useEffect, useState } from 'react';
import styles from './Popup.module.scss';
import Button from '../Buttons/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'providers/ThemeProvider';
import popupTestImage from "shared/assets/images/popupTestImage.jpg"
import { useClickOutside } from 'hooks/use-click-outside';
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsVisible(false);
    }
  };
  const handleOutsideClick = () => {
    console.log('Clicked outside');
    onClose()
  };

  const ref = useClickOutside(handleOutsideClick)
  const { theme } = useTheme()
    return (
      <>
        {isVisible && (
          <div className={styles.popup} onAnimationEnd={handleAnimationEnd}>
            <div ref={ref} className={classNames(styles.content, {}, [styles[theme]])}>
              {children}
            </div>
          </div>
        )}
      </>
    )
};

export default Popup;
