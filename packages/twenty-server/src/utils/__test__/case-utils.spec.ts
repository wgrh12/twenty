import { camelCaseDeep } from '../camel-case';
import { snakeCaseDeep } from '../snake-case';

describe('case utils deep functions', () => {
  class Base { baseProp = 'base'; }

  it('camelCaseDeep should ignore prototype properties', () => {
    class Foo extends Base { foo_bar = 'baz'; }
    const obj = new Foo();
    const result = camelCaseDeep(obj);
    expect(result).toEqual({ fooBar: 'baz' });
  });

  it('snakeCaseDeep should ignore prototype properties', () => {
    class Foo extends Base { fooBar = 'baz'; }
    const obj = new Foo();
    const result = snakeCaseDeep(obj);
    expect(result).toEqual({ foo_bar: 'baz' });
  });
});
