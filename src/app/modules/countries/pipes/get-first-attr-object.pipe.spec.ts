import { GetFirstAttrCurrencyObjectPipe } from './get-first-attr-object.pipe';

xdescribe('GetFirstAttrObjectPipe', () => {
  it('create an instance', () => {
    const pipe = new GetFirstAttrCurrencyObjectPipe();
    expect(pipe).toBeTruthy();
  });
});
