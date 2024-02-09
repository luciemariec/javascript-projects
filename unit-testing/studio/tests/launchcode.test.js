// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("Should output launch! with an even number as the parameter", function() {
    expect(launchcode.LaunchOutput(2)).toBe('Launch!');
  });
  test("Should output Code! when given a number divisible by 3", function() {
    expect(launchcode.LaunchOutput(3)).toBe('Code!');
  });
  test("Should output Rocks! when given a number divisible by 5", function() {
    expect(launchcode.LaunchOutput(5)).toBe('Rocks!');
  });
  test("Should output LaunchCode! when given a number divisible by 2 and 3", function() {
    expect(launchcode.LaunchOutput(6)).toBe('LaunchCode!');
  });
  test("The value of organization key should be nonprofit", function() {
    expect(launchcode.organization).toBe('nonprofit');
  });
  test("The value of the executiveDirector key should be Jeff", function() {
    expect(launchcode.executiveDirector).toBe('Jeff');
  });
  test("The value of the percentageCoolEmployees key should be 100", function() {
    expect(launchcode.percentageCoolEmployee).toBe(100);
  });
  test("The value of the programsOffered key should be 100 ['Web Development', 'Data Analysis', 'LiftOff']", function() {
    expect(launchcode.programOffered).toContain('Web Development');
    expect(launchcode.programOffered).toContain('Data Analysis');
    expect(launchcode.programOffered).toContain('LiftOff');
  });
});