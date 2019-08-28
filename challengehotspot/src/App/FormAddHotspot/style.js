import styled from 'styled-components';

const defaultForm = () => `
  padding: 8px;
  border-radius: 5px;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 50%;
  }
  textarea,
  button {
    flex: 1;
  }

  input,
  textarea {
    border: 1px solid #ddd;
    font-size: 14px;
    ${defaultForm}
    margin-bottom: 12px;
  }

  .required {
    border: 1px solid #ff0000;
    margin-bottom: 0;
  }
  .required-message {
    color: #ff0000;
    margin-bottom: 12px;
    font-size: 12px;
  }


  button {
    background: ${props => props.theme.primary};
    color: #fff;
    border: none;
    ${defaultForm}
    font-weight: 700;
    font-size: 15px;

    :hover {
      outline: none;
      cursor: pointer;
    }
  }
`;

export default FormWrapper;
