// Components
import SearchForm from './SearchForm/SearchForm';
import ActionBar from './ActionBar/ActionBar';

// Styles
import './Header.scss';

const Header = () => {
  return (
    <header className='header__base'>
      <div className='header__wrapper'>
        <div className='header__wrapperForm grid-container '>
          <h1 className='header__pageHL'>
            <span className='header__pageHL--title'>BIM</span>
          </h1>

          <SearchForm />
        </div>
      </div>

      <ActionBar />
    </header>
  );
};

export default Header;
