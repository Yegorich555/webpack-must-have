import { FC } from "react";
import styles from "./inputText.module.scss";

interface InputProps {
  message?: string;
  inputType: string;
  value: string;
  inputPlaceHolder?: string;
  onChange: (value: string) => void;
}

const InputText: FC<InputProps> = ({ message, inputType, value, inputPlaceHolder, onChange }) => {
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <>
      <label className={styles.inputLabel} htmlFor="finput">
        {message}
      </label>
      <input
        className={styles.inputText}
        type={inputType}
        value={value}
        placeholder={inputPlaceHolder}
        onChange={onchange}
      />
    </>
  );
};

export default InputText;
