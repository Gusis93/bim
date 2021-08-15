import React, { useEffect, useState } from 'react';

// Hooks
import { useGetConfiguration } from '../../Configuration/useGetConfiguration';

// Interfaces
import { InitialInput, UseFormReturn } from '../../../interfaces';

// Misc
import { normalizeString } from '../../../utils/normalizeString';

export const useForm = (initial: InitialInput): UseFormReturn => {
  const { dispatchConfiguration } = useGetConfiguration();
  const [inputs, setInputs] = useState<InitialInput>(initial);
  const [advancedSearch, setAdvancedSearch] = useState(false);

  const initialValues = Object.values(initial).join('');
  useEffect(() => setInputs(initial), [initialValues]);

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let { value, name } = e.target;

    setInputs({ ...inputs, [name]: value });
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const { query, email, min, max } = inputs;
    const normalizedQuery = normalizeString(query);
    const normalizedEmail = normalizeString(email);

    dispatchConfiguration({
      type: 'search',
      payload: {
        query: normalizedQuery,
        email: normalizedEmail,
        price: {
          min: Math.ceil(parseInt(min)) || 0,
          max: Math.ceil(parseInt(max)) || 'no-limit',
        },
      },
    });
  };

  const resetForm = () => {
    setInputs(initial);

    dispatchConfiguration({
      type: 'reset',
    });
  };

  const handleCta = () => setAdvancedSearch(!advancedSearch);

  return {
    inputs,
    advancedSearch,
    changeHandler,
    submitHandler,
    resetForm,
    handleCta,
  };
};
