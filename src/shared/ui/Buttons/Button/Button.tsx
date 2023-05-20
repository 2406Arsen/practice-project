import styles from "./Button.module.scss";
import { ReactComponent as Arrow } from 'shared/assets/icons/arrow-right.svg';
import { ReactComponent as Comment } from 'shared/assets/icons/message-circle.svg';
import { useTheme } from 'providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';


type ButtonProps = {
  className?: string
  size: 'small' | 'large' | 'block';
  type: 'button' | 'submit' | 'reset';
  mode: 'Primary' | 'Secondary' | 'Outline' | 'Transparent';
  state: 'Default' | 'Disabled';
  icon?: boolean;
  iconPosition?: 'left' | "side" | 'right';
  children: React.ReactNode
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  className = undefined,
  size = 'block',
  type = 'button',
  mode = 'Primary',
  state = 'Default',
  icon = false,
  iconPosition = 'left',
  children,
  onClick,
}) => {
  const buttonClassNames = [styles[`Button--${mode}`], styles[`Button--${size}`], styles[`Button--${state}`]];
  if (icon) {
    buttonClassNames.push(styles[`Button--icon ${styles[`Button--icon-${iconPosition}`]}`]);
  }
  const { theme } = useTheme()
  let Icon = (iconPosition === 'right' ? Arrow : Comment)
  return (
    <button disabled={state === 'Disabled' ? true : false} className={classNames(buttonClassNames.join(" "), {}, [className, styles[theme]])} type={type} onClick={onClick}>
      {icon && iconPosition === 'left' && <Icon className={styles["icon"]} />}
      {children &&
        <div className={styles["icon-position"]}>
          {icon && iconPosition === 'side' && <Icon className={styles["icon"]} />}
          <span>
            {children}
          </span>
        </div>}
      {icon && iconPosition === 'right' && <Icon className={styles["icon"]} />}
    </button>
  );
};
export default Button;