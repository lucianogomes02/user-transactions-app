import FormInputProps from './FormInputProps';

export default interface AsideFormProps {
    title: string;
    formInputs: FormInputProps[];
    checkboxLabel: string;
    buttonTitle: string;
    authSectionLabel: string;
    authSectionLink: string;
    authSectionLinkText: string;
    showForgotPassword: boolean;
    formType: "login" | "register";
  }