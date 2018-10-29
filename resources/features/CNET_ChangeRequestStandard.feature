Feature: CNET CHANGE REQUEST AUTOMATION SCENARIOS

  @CNETChangeRequestForStandard
  Scenario Outline: CNET_ChangeRequest
    Given Launch Browser and Navigate to CNET INCIDENT URL
    Then Switch to MainFrame
    Then Verify whether Login page is correctly opened or not
    Then Enter Username and Password as "<Username>" and "<Password>"
    Then Enter Value in Filter Navigation Field Text Box "<FilterValue>"
    #Then Click on All Button for change request scenario
    Then Click on Create New Button
    Then Switch to MainFrame
    Then Click On Standard Link for change request scenario
    And Click on Network Standard Changes
    And Click on Add Network Switch
    Then Select Priority Name as "<priorityValue>" for change request scenario
    Then Select Risk Name as "<riskValue>" for change request scenario
    Then Click On Configuration Item LookUP for change request scenario
    Then Switch to Multiple Window and Select Text as "<configurationItem>"
    Then Select Impact Name as "<impactValue>" for change request scenario
    Then Click On Assigned Group LookUP for change request scenario
    Then Switch to Multiple Window and Select Text as "<assignedGroup>" for change request scenario
    Then Click On Assigned To LookUP for change request scenario
    Then Switch to Multiple Window and Select Text as "<assignedTO>"
    Then Select State as "<state>" for change request scenario
    #Then Enter short Description as "<shortDescription>" for change request scenario
    #Then Click on recent Incident Created
    #When Click On Approval Tab
    #When Right Click On Approval Button and click on Approve Button for QA Group
    #Then Verify Authorize as "<authorizeValue>"
    #When Right Click On Approval Button and click on Approve Button for CAB Approval
    When Click On Schedule Button
    #Then Verify Scheduled as "<scheduledValue>"
    When Select Planned Start Date
    When Select Planned End Date
    Then Click on Submit Button for change request scenario
    Then Switch to Multiple Window
    Then Switch to MainFrame
    Then Click on Recently Created Incident for Standard
    # When Click On Planning Tab
    #Then Enter Value in Implemenatatison Plan Text Box "<implementationPlanValue>"
    When Click On Implementation Button
    Then Verify Implement as "<implementValue>"
    Then Click on review Button
    Then Verify Review as "<reviewValue>"
    When Click On Closure Information Tab
    Then Select Close Code as "<closeCodeValue>" for change request scenario
    When Click On Closure Information Tab
    Then Enter Close Notes Field Text Box "<closeNotesValue>"
    When Click On Close Button
    Then Verify Closed as "<closedValue>"

    Examples: 
      | Username | Password | FilterValue | configurationItem | priorityValue | riskValue | impactValue | assignedGroup | assignedTO     | state     | shortDescription | implementationPlanValue | closeCodeValue | closeNotesValue | authorizeValue | scheduledValue | implementValue | reviewValue | closedValue |
     | admin    | Cnet345$     | Change      | *CAROL-IBM        | 1 - Critical  | High      | 1 - High    | CAB Approval  | Howard Johnson | Scheduled | Sample Testing   | Testing Sample          | Successful     | Success         | Authorize      | Schedule       | Implement      | Review      | Closed      |
