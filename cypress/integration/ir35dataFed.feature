Feature: Calculate IR35 pay

  I want to test using a data table

  Scenario: Calculate IR35 from a table
    Given I open the webpage
    Then I enter values
      | rate | type       | state   | value  |
      | 625  | DailyRate  | Inside  | £5,833 |
      | 550  | DailyRate  | Outside | £6,514 |
      | 25   | HourlyRate | Inside  | £2,126 |
