import App from '../component/app';
require('jest');
import{tokenSet} from '../action/auth-actions';

describe('Test true to be true', () => {
  let token = {type: 'TOKEN_SET', payload: 'roger'};
  it('should retutn a payload', () => {
    expect(tokenSet(token)).toEqual({'payload': {'payload': 'roger', 'type': 'TOKEN_SET'}, 'type': 'TOKEN_SET'});

  });
});
