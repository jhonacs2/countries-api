import {GetFirstAttrCurrencyObjectPipe} from './get-first-attr-object.pipe';
import {countryCurrency} from '../../../spec-helpers/countries.spec-helper';

describe('GetFirstAttrObjectPipe', () => {
  let firstCurrencyPipe: GetFirstAttrCurrencyObjectPipe;

  beforeEach(() => {
    firstCurrencyPipe = new GetFirstAttrCurrencyObjectPipe();
  });

  it('get first currency country', () => {
    const currency = firstCurrencyPipe.transform(countryCurrency);
    expect(currency).toEqual('Swedish krona')
  });
});
