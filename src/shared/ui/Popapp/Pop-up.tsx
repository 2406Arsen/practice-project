import React, { useEffect, useState } from 'react';
import styles from './Popup.module.scss';
import Button from '../Buttons/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'providers/ThemeProvider';
import popupTestImage from "shared/assets/images/popupTestImage.jpg"
interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  action: "remove-item" | "opps-button" | "opps" | "team-name";
  image?: boolean;
  imageSize?: "small" | "large"
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, action, image = false, imageSize }) => {
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
  const { theme } = useTheme()
  if (action === "remove-item") {
    return (
      <>
        {isVisible && (
          <div className={styles.popup} onAnimationEnd={handleAnimationEnd}>
            <div className={classNames(styles.content, {}, [styles[theme]])}>
              {image && imageSize === "large" && <div className={styles.imageLarge}>
                <img alt='' src={popupTestImage} />
              </div>
              }
              {image && imageSize === "small" && <div className={styles.imageSmall}>
                <img alt='' src={popupTestImage} />
              </div>}
              <div className={styles.title}>
                <h1 className={classNames(styles.text, {}, [styles[theme]])}>Remove item?</h1>
              </div>
              <div className={styles.massageParent}>
                <p className={classNames(styles.massage, {}, [styles[theme]])}>Are you sure want to remove this <br /> item from your cart?</p>
              </div>
              <br />
              <Button mode="Primary" size="block" state="Default" type="button" onClick={onClose} >Sure</Button>
              <br />
              <Button mode="Transparent" size="block" state="Default" type="button" onClick={onClose} >No, thanks</Button>
            </div>
          </div>
        )}
      </>
    )
  }
  if (action === "opps" || action === "opps-button") {
    return (
      <>
        {isVisible && (
          <div className={styles.popup} onAnimationEnd={handleAnimationEnd}>
            <div className={classNames(styles.content, {}, [styles[theme]])}>
              {
                image && imageSize === "large" &&
                <div className={styles.imageLarge}>
                  <img alt='' src={popupTestImage} />
                </div>
              }
              {image &&
                imageSize === "small"
                && action === "opps"
                && <div className={styles.imageMini}>
                  <img alt='' src={popupTestImage} />
                </div>
              }
              {image &&
                imageSize === "small" &&
                action === "opps-button" &&
                <div className={styles.imageSmall}>
                  <img alt='' src={popupTestImage} />
                </div>
              }
              <div className={styles.title}>
                <h1 className={classNames(styles.text, {}, [styles[theme]])}>Opps! <br /> Something went wrong</h1>
              </div>
              <div className={styles.massageParent}>
                <p className={classNames(styles.massage, {}, [styles[theme]])}>Please try again later.</p>
              </div>
              <br />
              {action === "opps-button" && <Button mode="Primary" size="block" state="Default" type="button" onClick={onClose} >Okay</Button>}
            </div>
          </div>
        )}
      </>
    )
  }
  if (action === "team-name") {
    return (
      <>
        {isVisible && (
          <div className={styles.popup} onAnimationEnd={handleAnimationEnd}>
            <div className={classNames(styles.content, {}, [styles[theme]])}>
              {image && imageSize === "large" && <div className={styles.imageLarge}><img alt='' src={popupTestImage} /></div>}
              {image && imageSize === "small" && <div className={styles.imageMini}><img alt='' src={popupTestImage} /></div>}
              <div className={styles.title}>
                <h1 className={classNames(styles.text, {}, [styles[theme]])}>What’s your team name</h1>
              </div>
              <div className={styles.massageParent}>
                <p className={classNames(styles.massage, {}, [styles[theme]])}>The team name will be shown for all <br /> members.</p>
              </div>
              <input type="text" placeholder='placeholder text' />
              <br />
              <Button mode="Primary" size="block" state="Default" type="button" onClick={onClose} >Confirm</Button>
              <br />
              <Button mode="Transparent" size="block" state="Default" type="button" onClick={onClose} >Cancel</Button>
            </div>
          </div>
        )}
      </>
    )
  }
  return (
    <>
      {isVisible && (
        <div className={styles.popup} onAnimationEnd={handleAnimationEnd}>
          <div className={styles.content}>
            {/* Add your component code here */}
            <Button mode="Primary" size="large" state="Default" type="button" onClick={onClose} >close Pop-up</Button>
            {/* <button onClick={onClose}>Close</button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
