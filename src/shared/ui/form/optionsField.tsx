import { DetailedHTMLProps, forwardRef } from 'react';
import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';

import '@app/index.css';

interface IOptionsFieldProps
  extends DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  label: string;
  options: string[] | undefined;
  id: string;
  registration?: UseFormRegisterReturn;
  errors?: FieldErrors;
}

export const OptionsField = forwardRef(
  (props: IOptionsFieldProps, ref: IOptionsFieldProps['ref']) => {
    const { label, options, id, registration, errors, ...otherProps } = props;
    return (
      <div className="form-field">
        <label htmlFor={id} className="form-field__label">
          {label}
        </label>
        <select
          id={id}
          className="form-field__input form-field__input_type_options"
          {...registration}
          {...otherProps}
        >
          {/* <option value="empty">Выберите один вариант</option> */}
          {options?.map((elem) => (
            <option key={elem} value={elem}>
              {elem}
            </option>
          ))}
        </select>
        {errors?.[id]?.type === 'required' && (
          <p role="alert" className="form-field__alert">
            Это поле обязательно для заполнения
          </p>
        )}
      </div>
    );
  },
);
