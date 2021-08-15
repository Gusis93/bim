import { BiSearchAlt, BiCaretDownSquare, BiReset } from 'react-icons/bi';

// Hooks
import { useForm } from './useForm';

// Components
import Input from './Input';
import Cta from './Cta';

// Inputs Data
import { initialInputs, hiddenInputs } from './inputsData';

// Styles
import './SearchForm.scss';

const Form = () => {
  const {
    inputs,
    submitHandler,
    changeHandler,
    resetForm,
    advancedSearch,
    handleCta,
  } = useForm({
    query: '',
    email: '',
    min: '',
    max: '',
  });

  const renderInput = ({ id, placeholder, ...rest }: any) => {
    return (
      <Input
        key={id}
        id={id}
        placeholder={placeholder}
        changeHandler={changeHandler}
        value={inputs[id]}
        {...rest}
      />
    );
  };

  const advancedClass = advancedSearch ? 'expanded' : 'collapsed';

  return (
    <form className='searchForm__form' role='search' onSubmit={submitHandler}>
      <fieldset
        className={`searchForm__fieldset searchForm__fieldset--${advancedClass}`}
      >
        <div className='searchForm__mainBar'>
          {initialInputs.map(renderInput)}

          <Cta
            type='button'
            clickHandler={resetForm}
            value='Reset'
            Icon={BiReset}
            text='Reset'
            modifier='searchForm__cta--reset'
          />
        </div>

        <div className='searchForm__advancedFieldset' id='advancedFieldset'>
          {hiddenInputs.map(renderInput)}
        </div>
      </fieldset>

      <Cta type='submit' value='Submit' Icon={BiSearchAlt} text='Search' />

      <Cta
        type='button'
        value='Advanced'
        Icon={BiCaretDownSquare}
        text='Advanced'
        clickHandler={handleCta}
        aria-controls='advancedFieldset'
        aria-expanded={advancedSearch}
        modifier={`searchForm__cta--${advancedClass}`}
      />
    </form>
  );
};

export default Form;
