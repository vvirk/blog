import { addId } from './addId';

it('returns the last value of the object', () => {
  const id = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const result = addId(id);

  expect(result).toBe(4);
});
