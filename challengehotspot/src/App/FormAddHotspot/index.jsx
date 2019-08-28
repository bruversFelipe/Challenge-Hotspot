import React, { useState, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import FormWrapper from './style';

const defaultValues = {
  titulo: '',
  mensagem: '',
};

const FormAddHotspot = memo(({ submitHotspot }) => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [required, setRequired] = useState(false);

  const changeValues = useCallback((evt) => {
    const { id, value } = evt.target;
    const newValue = { ...formValues, [id]: value };

    if (newValue.titulo !== '') {
      setRequired(false);
    }
    setFormValues(newValue);
  }, [formValues]);

  const onSave = useCallback((evt) => {
    evt.preventDefault();
    if (formValues.titulo !== '') {
      submitHotspot(formValues);
      setFormValues(defaultValues);
      setRequired(false);
    } else {
      setRequired(true);
    }
  }, [formValues, submitHotspot]);

  return (
    <FormWrapper>
      <input
        placeholder="Título"
        onChange={changeValues}
        id="titulo"
        value={formValues.titulo}
        className={required ? 'required' : ''}
      />
      {required && <div className="required-message">Obrigatório</div>}
      <textarea placeholder="Mensagem" onChange={changeValues} id="mensagem" value={formValues.mensagem} />
      <button onClick={onSave} type="submit">Salvar</button>
    </FormWrapper>
  );
});

FormAddHotspot.propTypes = {
  submitHotspot: PropTypes.func.isRequired,
};

export default FormAddHotspot;
