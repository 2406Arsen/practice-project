// import { useTheme } from "providers/ThemeProvider";
// import { FC, memo, useMemo } from "react";
// import { classNames } from "shared/lib/classNames/classNames";
// import cls from "./SelectInput.module.scss";
// import { TextFieldsState } from "../TextFields/TextFields";
// // import Select from 'react-select';

// interface SelectInputsProps {
//   value?: string;
//   state?: TextFieldsState;
//   className?: string | undefined;
//   label?: string;
//   disabled?:boolean;
//   error?: boolean;
// }

// const SelectInput: FC<SelectInputsProps> = memo((props) => {
//   const {
//     value,
//     state = TextFieldsState.DEFAULT,
//     className,
//     label,
//     disabled,
//     error = false,
//   } = props;

//   const { theme } = useTheme();

//   const mods = useMemo(() => ({}), []);

//   const inputClasses = classNames(cls.SelectInput, mods, [
//     className,
//     cls[state],
//     cls[theme],
//     cls.SelectInputLabel,
//   ]);
  
// //   const options = [
// // { value: 'hi', label: 'hi' },
// // { value: 'hello', label: 'hello' },
// // { value: 'heey', label: 'heey' }
// // ]
//   return (
//     <div className={classNames(cls.div,{},[cls[theme]])}>
//       {label && <label className={cls.SelectInputLabel}>{label}</label>}
//       <select
//         className={inputClasses}
//         value={value}
//         style={{ width: "367px", height: "66px", borderRadius: "8px" }}
//         disabled={disabled}
//       />
//       {/* <Select
//         className={inputClasses}
//         styles={{ width: "367px", height: "66px", borderRadius: "8px" }}
//         options={options} 
//        /> */}
//       {error && <div className={cls.SelectInputErrorText}>Error Message</div>}
//     </div>
//   );
// })
// export default SelectInput;


// import { useTheme } from "providers/ThemeProvider";
// import { FC, memo, useMemo } from "react";
// import { classNames } from "shared/lib/classNames/classNames";
// import cls from "./SelectInput.module.scss";
// import Select from "react-select"; // Import react-select
// import { TextFieldsState } from "../TextFields/TextFields";

// interface SelectInputsProps {
//   value?: string;
//   state?: TextFieldsState;
//   className?: string | undefined;
//   label?: string;
//   disabled?: boolean;
//   error?: boolean;
// }

// const SelectInput: FC<SelectInputsProps> = memo((props) => {
//   const {
//     value,
//     state = TextFieldsState.DEFAULT,
//     className,
//     label,
//     disabled,
//     error = false,
//   } = props;

//   const { theme } = useTheme();

//   const mods = useMemo(() => ({}), []);

//   const inputClasses = classNames(cls.SelectInput, mods, [
//     className,
//     cls[state],
//     cls[theme],
//     cls.SelectInputLabel,
//   ]);


//   const options = [
//     { value: "chocolate", label: "Chocolate" },
//     { value: "strawberry", label: "Strawberry" },
//     { value: "vanilla", label: "Vanilla" }
//   ];

//   return (
//     <div className={classNames(cls.div, {}, [cls[theme]])}>
//       {label && <label className={cls.SelectInputLabel}>{label}</label>}
//       <Select
//         options={options} 
//         className={inputClasses}
//         value={value ? options.find((option) => option.value === value) : null}
//         isDisabled={disabled}
//         styles={{ control: (provided) => ({ ...provided, width: "367px", height: "66px", borderRadius: "8px" }) }}
//       />
//       {error && <div className={cls.SelectInputErrorText}>Error Message</div>}
//     </div>
//   );
// });

// export default SelectInput;

import { useTheme } from "providers/ThemeProvider";
import { FC, memo, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SelectInput.module.scss";
import Select from "react-select";
import { TextFieldsState } from "../TextFields/TextFields";

interface SelectInputsProps {
  value?: string;
  state?: TextFieldsState;
  className?: string | undefined;
  label?: string;
  disabled?: boolean;
  error?: boolean;
}

const SelectInput: FC<SelectInputsProps> = memo((props) => {
  const {
    value,
    state = TextFieldsState.DEFAULT,
    className,
    label,
    disabled,
    error = false,
  } = props;

  const { theme } = useTheme();

  const mods = useMemo(() => ({}), []);

  const inputClasses = classNames(
    cls.SelectInput, mods, [
    className,
    cls[state],
    cls[theme]]
  );

  const options = [
    { value: "first", label: "first" },
    { value: "second", label: "second" },
    { value: "third", label: "third" },
  ];

  return (
    <>
      {label && <label className={cls.SelectInputLabel}>{label}</label>}
      <Select
        className={inputClasses}
        styles={{
          control: (provided) => ({
            ...provided,
            width: "367px",
            height: "66px",
            borderRadius: "8px",
            margin: "8px",
          }),
        }}
        options={options}
        isDisabled={disabled}
        value={options.find((option) => option.value === value)}
      />
      {error && <div className={cls.SelectInputErrorText}>Error Message</div>}
    </>
  );
});

export default SelectInput;
