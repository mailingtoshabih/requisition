import { Input } from "@chakra-ui/react";
import FormWrapper from "./FormWrapper";
import { IFormInputProps } from "@src/interface/forms";

// -------------
import React, { ChangeEvent } from "react";
import { 
  useDispatch, 
  useSelector 
} from 'react-redux';
import { updateRequisitionDetails } from '../../app/dataSlice';
// --------------

const FormInput = React.forwardRef<HTMLInputElement, IFormInputProps>(
  (
    {
      name,
      label,
      placeholder,
      type,
      value,
      onChange,
      onBlur,
      error,
      touched,
      inputProps = {},
      children,
      helperText,
      wrapperProps = {},
    },
    ref
  ) => {

    // ----------------------------------
    const dispatch = useDispatch();
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      dispatch(updateRequisitionDetails({ [name]: value }));
    };



    return (
      <FormWrapper
        isInvalid={Boolean(error && touched)}
        wrapperProps={wrapperProps}
        helperText={helperText}
        label={label}
        touched={touched}
        error={error as string}
      >
        <Input
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            }
            handleInputChange(e);
          }}
          // -------------

          onBlur={onBlur}
          width="100%"
          maxHeight="none !important"
          minW="272px"
          height="45px"
          fontSize="0.875rem"
          fontWeight="500"
          px="20px"
          border="1px solid #c0bcd7"
          bg="inputBg"
          borderRadius="10px"
          focusBorderColor="primary"
          errorBorderColor="errorRed"
          _placeholder={{
            color: "text.placeholder",
          }}
          ref={ref}
          {...inputProps}
        />
        {children}
      </FormWrapper>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
