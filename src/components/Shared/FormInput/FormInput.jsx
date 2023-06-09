import { useState } from "react";
import style from "./formInput.module.scss";

const FormInput = props => {
	const { placeholder, label, errorMessage, type, value, onChange, name, pattern, required } =
		props;
	const [IsFocused, setIsFocused] = useState(false);
	const handleFocused = () => {
		setIsFocused(true);

	};

	return (
		<div className={style.formInput}>
			{label && (
				<label htmlFor='input' className={required ? style.required : ""}>
					{label}
				</label>
			)}
			<input
				type={type}
				value={value}
				onChange={onChange}
				focused={IsFocused.toString()}
				pattern={pattern}
				placeholder={placeholder}
				name={name}
				required={required}
				onBlur={handleFocused}
				onFocus={() => name === "password" && setIsFocused(true)}
			/>
			<span>{errorMessage}</span>
		</div>
	);
};

export default FormInput;
