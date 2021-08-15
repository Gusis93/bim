import { FC } from 'react';

//Styles
import './Message.scss';

const Message: FC<{ message: string }> = ({ message }) => {
  return (
    <div className='grid-container message__base'>
      <p className='message__txt'>{message}</p>
    </div>
  );
};

export default Message;
