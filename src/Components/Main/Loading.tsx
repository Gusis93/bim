// Styles
import './Loading.scss';

const Loading = () => {
  return (
    <div className='grid-container'>
      <div className='loading__base'>
        <span className='is-visuallyHidden'>Loading</span>

        <div className='loading__spinner'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
