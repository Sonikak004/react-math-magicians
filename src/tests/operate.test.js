import operate from '../logic/operate';

describe('operate function tests', () => {
  it('should perform addition', () => {
    expect(operate('2', '4', '+')).toBe('6');
    expect(operate('0', '10', '+')).toBe('10');
  });

  it('should perform subtraction', () => {
    expect(operate('8', '3', '-')).toBe('5');
  });

  it('should perform multiplication', () => {
    expect(operate('3', '4', 'x')).toBe('12');
  });

  it('should perform division', () => {
    expect(operate('10', '2', '÷')).toBe('5');
  });

  it('should perform modulo', () => {
    expect(operate('10', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operation', () => {
    expect(() => operate('10', '5', 'wrong')).toThrow("Unknown operation 'wrong'");
  });
});
