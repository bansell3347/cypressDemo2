Feature: Calculate IR35 pay

  I want to work out inside and outside IR35 pay

  Scenario: Opening ir35 calculator webpage
    Given I open the webpage
    Then I enter "625" as the day rate
    Then I set the rate type to "DailyRate"
    Then I set IR35 status to "Inside"
    Then I calculate and verify the result is "£5,833"


  Scenario: Calculate IR35 from a table
    Given I open the webpage
    Then I enter values
      | rate | type       | state   | value  |
      | 625  | DailyRate  | Inside  | £5,833 |
      | 550  | DailyRate  | Outside | £6,514 |
      | 25   | HourlyRate | Inside  | £2,126 |
