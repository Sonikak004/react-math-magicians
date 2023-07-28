import operate from '../logic/operate';

describe('operate function tests', () => {
  it('should perform addition correctly', () => {
    expect(operate('2', '4', '+')).toBe('6');
    expect(operate('0', '10', '+')).toBe('10');
  });
});
