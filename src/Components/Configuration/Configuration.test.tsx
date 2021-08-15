// Context
import { confReducer, initialState } from './reducer';

describe('Reducer actions', () => {
  it('Should return an updated query for "search" type', () => {
    const search = {
      query: 'Query',
      email: '',
      price: {
        min: 0,
        max: 'no-limit',
      },
    };

    const updateAction: any = {
      type: 'search',
      payload: search,
    };
    const updatedState = confReducer(initialState, updateAction);

    expect(updatedState.search).toEqual(search);
  });

  it('Should return an updated sort for "sort" type', () => {
    const sort = {
      sortBy: 'price',
      direction: 'desc',
    };

    const updateAction: any = {
      type: 'sort',
      payload: sort,
    };

    const updatedState = confReducer(initialState, updateAction);

    expect(updatedState.sort).toEqual(sort);
  });

  it('Should reset the form', () => {
    const updateAction: any = { type: 'reset' };

    const updatedState = confReducer(initialState, updateAction);

    expect(updatedState).toEqual(initialState);
  });
});
