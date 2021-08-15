import { FC } from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

// Interfaces
import { ItemProps } from '../../../interfaces';

const Item: FC<ItemProps> = ({ item, isFavourite, setFavourite, layout }) => {
  const { title, description, price, email } = item;

  const clickHandler = () => {
    setFavourite(item.id);
  };

  const localisedPrice = parseInt(price).toLocaleString('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  });

  return (
    <li className={`item__base item__base--${layout}`}>
      <div className='item__contentWrapper'>
        <div className='item__details'>
          <div className='item__head'>
            <span className='item__title'>{title}</span>

            <div className="item__action">
              {layout !== 'compact' && (
                <span className='item__price'>{localisedPrice}</span>
              )}
              {isFavourite ? (
                <BsHeartFill
                  className='item__cta item__cta--unfav'
                  onClick={clickHandler}
                />
              ) : (
                <BsHeart
                  className='item__cta item__cta--fav'
                  onClick={clickHandler}
                />
              )}
            </div>
          </div>

          {layout !== 'compact' && (
            <p className='item__description'>{description}</p>
          )}

          {layout !== 'compact' && (
            <span className='item__createdBy'>
              Created by:
              <span className='item__email'>{email}</span>
            </span>
          )}
        </div>
      </div>
    </li>
  );
};

export default Item;
