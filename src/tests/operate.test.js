import operate from "../logic/operate";

test("should correctly perform addition", () => {
  expect(operate("3", "5", "+")).toBe("8");
});

test("should correctly perform subtraction", () => {
  expect(operate("7", "2", "-")).toBe("5");
});

test("should correctly perform multiplication", () => {
  expect(operate("4", "6", "x")).toBe("24");
});

test("should correctly perform division", () => {
  expect(operate("10", "2", "÷")).toBe("5");
});

test("should correctly perform modulo", () => {
  expect(operate("10", "3", "%")).toBe("1");
});

test("should return 'Can't divide by 0.' for division by zero", () => {
  expect(operate("5", "0", "÷")).toBe("Can't divide by 0.");
});

test("should return 'Can't find modulo as can't divide by 0.' for modulo by zero", () => {
  expect(operate("5", "0", "%")).toBe(
    "Can't find modulo as can't divide by 0."
  );
});

test("should throw an error for an unknown operation", () => {
  expect(() => operate("3", "5", "unknown")).toThrow(
    "Unknown operation 'unknown'"
  );
});
