$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CNET_ChangeRequestEmergency.feature");
formatter.feature({
  "line": 1,
  "name": "CNET CHANGE REQUEST AUTOMATION SCENARIOS",
  "description": "",
  "id": "cnet-change-request-automation-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CNET_ChangeRequest",
  "description": "",
  "id": "cnet-change-request-automation-scenarios;cnet-changerequest",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CNETChangeRequestForEmergency"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch Browser and Navigate to CNET INCIDENT URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Switch to MainFrame",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify whether Login page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username and Password as \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Value in Filter Navigation Field Text Box \"\u003cFilterValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then Click on All Button for change request scenario"
    },
    {
      "line": 11,
      "value": "#Then Switch to MainFrame"
    }
  ],
  "line": 12,
  "name": "Click on Create New Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Switch to MainFrame",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click On Emergency Link for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Select Priority Name as \"\u003cpriorityValue\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select Risk Name as \"\u003criskValue\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Select Impact Name as \"\u003cimpactValue\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click On Configuration Item LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Switch to Multiple Window and Select Text as \"\u003cconfigurationItem\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click On Assigned Group LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Switch to Multiple Window and Select Text as \"\u003cassignedGroup\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click On Assigned To LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Switch to Multiple Window and Select Text as \"\u003cassignedTO\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Select State as \"\u003cstate\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter short Description as \"\u003cshortDescription\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on Submit Button for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Click on recent Incident Created",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click On Approval Tab",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#When Right Click On Approval Button and click on Approve Button for QA Group"
    }
  ],
  "line": 30,
  "name": "Verify Authorize as \"\u003cauthorizeValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Right Click On Approval Button and click on Approve Button for CAB Approval",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Click On Schedule Button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Verify Scheduled as \"\u003cscheduledValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Select Planned Start Date",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Select Planned End Date",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Click On Planning Tab",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Enter Value in Implemenatation Plan Text Box \"\u003cimplementationPlanValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Click On Implementation Button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Verify Implement as \"\u003cimplementValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Click on review Button",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify Review as \"\u003creviewValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Click On Closure Information Tab",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Select Close Code as \"\u003ccloseCodeValue\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click On Closure Information Tab",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Enter Close Notes Field Text Box \"\u003ccloseNotesValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Click On Close Button",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Verify Closed as \"\u003cclosedValue\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "cnet-change-request-automation-scenarios;cnet-changerequest;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "FilterValue",
        "configurationItem",
        "priorityValue",
        "riskValue",
        "impactValue",
        "assignedGroup",
        "assignedTO",
        "state",
        "shortDescription",
        "implementationPlanValue",
        "closeCodeValue",
        "closeNotesValue",
        "authorizeValue",
        "scheduledValue",
        "implementValue",
        "reviewValue",
        "closedValue"
      ],
      "line": 50,
      "id": "cnet-change-request-automation-scenarios;cnet-changerequest;;1"
    },
    {
      "cells": [
        "admin",
        "Cnet345$",
        "Change",
        "*CAROL-IBM",
        "1 - Critical",
        "High",
        "1 - High",
        "CAB Approval",
        "Howard Johnson",
        "Authorize",
        "Sample Testing",
        "Testing Sample",
        "Successful",
        "Success",
        "Authorize",
        "Schedule",
        "Implement",
        "Review",
        "Closed"
      ],
      "line": 51,
      "id": "cnet-change-request-automation-scenarios;cnet-changerequest;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5063283355,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "CNET_ChangeRequest",
  "description": "",
  "id": "cnet-change-request-automation-scenarios;cnet-changerequest;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CNETChangeRequestForEmergency"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch Browser and Navigate to CNET INCIDENT URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Switch to MainFrame",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify whether Login page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username and Password as \"admin\" and \"Cnet345$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Value in Filter Navigation Field Text Box \"Change\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then Click on All Button for change request scenario"
    },
    {
      "line": 11,
      "value": "#Then Switch to MainFrame"
    }
  ],
  "line": 12,
  "name": "Click on Create New Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Switch to MainFrame",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click On Emergency Link for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Select Priority Name as \"1 - Critical\" for change request scenario",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select Risk Name as \"High\" for change request scenario",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Select Impact Name as \"1 - High\" for change request scenario",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click On Configuration Item LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Switch to Multiple Window and Select Text as \"*CAROL-IBM\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click On Assigned Group LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Switch to Multiple Window and Select Text as \"CAB Approval\" for change request scenario",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click On Assigned To LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Switch to Multiple Window and Select Text as \"Howard Johnson\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Select State as \"Authorize\" for change request scenario",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter short Description as \"Sample Testing\" for change request scenario",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on Submit Button for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Click on recent Incident Created",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click On Approval Tab",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "#When Right Click On Approval Button and click on Approve Button for QA Group"
    }
  ],
  "line": 30,
  "name": "Verify Authorize as \"Authorize\"",
  "matchedColumns": [
    14
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Right Click On Approval Button and click on Approve Button for CAB Approval",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Click On Schedule Button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Verify Scheduled as \"Schedule\"",
  "matchedColumns": [
    15
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Select Planned Start Date",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Select Planned End Date",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Click On Planning Tab",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Enter Value in Implemenatation Plan Text Box \"Testing Sample\"",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Click On Implementation Button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Verify Implement as \"Implement\"",
  "matchedColumns": [
    16
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Click on review Button",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify Review as \"Review\"",
  "matchedColumns": [
    17
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Click On Closure Information Tab",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Select Close Code as \"Successful\" for change request scenario",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click On Closure Information Tab",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Enter Close Notes Field Text Box \"Success\"",
  "matchedColumns": [
    13
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Click On Close Button",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Verify Closed as \"Closed\"",
  "matchedColumns": [
    18
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableSteps.launch_Browser_and_Navigate_to_CNet_Incident_URL()"
});
formatter.result({
  "duration": 31696141280,
  "status": "passed"
});
formatter.match({
  "location": "ReusableSteps.switch_to_MainFrame()"
});
formatter.result({
  "duration": 3074751747,
  "status": "passed"
});
formatter.match({
  "location": "ReusableSteps.verify_whether_Login_page_is_correctly_opened_or_not()"
});
formatter.result({
  "duration": 25326942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    },
    {
      "val": "Cnet345$",
      "offset": 44
    }
  ],
  "location": "ReusableSteps.enter_Username_and_Password_as_and(String,String)"
});
formatter.result({
  "duration": 703050882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change",
      "offset": 49
    }
  ],
  "location": "ChangeRequestSteps.enter_Value_in_Filter_navigation_Field_Text_Box(String)"
});
formatter.result({
  "duration": 15768437866,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.clickOnNewButton()"
});
formatter.result({
  "duration": 3397497370,
  "status": "passed"
});
formatter.match({
  "location": "ReusableSteps.switch_to_MainFrame()"
});
formatter.result({
  "duration": 3092799165,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.emergencyLink()"
});
formatter.result({
  "duration": 5378300419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 - Critical",
      "offset": 25
    }
  ],
  "location": "ChangeRequestSteps.priorityName(String)"
});
formatter.result({
  "duration": 598717039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "High",
      "offset": 21
    }
  ],
  "location": "ChangeRequestSteps.riskName(String)"
});
formatter.result({
  "duration": 398621672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 - High",
      "offset": 23
    }
  ],
  "location": "ChangeRequestSteps.impactName(String)"
});
formatter.result({
  "duration": 5316747778,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.configurationItem()"
});
formatter.result({
  "duration": 7203327574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "*CAROL-IBM",
      "offset": 46
    }
  ],
  "location": "ReusableSteps.HandleMultipleWindows(String)"
});
formatter.result({
  "duration": 10022249117,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.clickOnAssigedGroup()"
});
formatter.result({
  "duration": 6616166597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CAB Approval",
      "offset": 46
    }
  ],
  "location": "ChangeRequestSteps.HandleMultipleWindows(String)"
});
formatter.result({
  "duration": 1418421187,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.clickOnAssignedTo()"
});
formatter.result({
  "duration": 6451910757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Howard Johnson",
      "offset": 46
    }
  ],
  "location": "ReusableSteps.HandleMultipleWindows(String)"
});
formatter.result({
  "duration": 9857421504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authorize",
      "offset": 17
    }
  ],
  "location": "ChangeRequestSteps.stateName(String)"
});
formatter.result({
  "duration": 244428526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample Testing",
      "offset": 28
    }
  ],
  "location": "ChangeRequestSteps.shortDescription(String)"
});
formatter.result({
  "duration": 493572364,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.click_On_SubmitButton()"
});
formatter.result({
  "duration": 311520139,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.selectIncident()"
});
formatter.result({
  "duration": 2100276265,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.approvalTab()"
});
formatter.result({
  "duration": 5850897646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authorize",
      "offset": 21
    }
  ],
  "location": "ChangeRequestSteps.verifyAuthorize(String)"
});
formatter.result({
  "duration": 160312016,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.approvalButtonForCabApproval()"
});
formatter.result({
  "duration": 7317266522,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.scheduleButton()"
});
formatter.result({
  "duration": 5311161764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Schedule",
      "offset": 21
    }
  ],
  "location": "ChangeRequestSteps.verifyScheduled(String)"
});
formatter.result({
  "duration": 173746760,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.plannedStartDate()"
});
formatter.result({
  "duration": 6721704285,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.plannedEndDate()"
});
formatter.result({
  "duration": 6084482154,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.planningTab()"
});
formatter.result({
  "duration": 325902563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing Sample",
      "offset": 46
    }
  ],
  "location": "ChangeRequestSteps.enter_Implementation_Plan(String)"
});
formatter.result({
  "duration": 401776474,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.implementationButton()"
});
formatter.result({
  "duration": 231063490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Implement",
      "offset": 21
    }
  ],
  "location": "ChangeRequestSteps.verifyImplement(String)"
});
formatter.result({
  "duration": 6231608748,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.reviewButton()"
});
formatter.result({
  "duration": 6443361958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Review",
      "offset": 18
    }
  ],
  "location": "ChangeRequestSteps.verifyReview(String)"
});
formatter.result({
  "duration": 191230959,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.closureInformationTab()"
});
formatter.result({
  "duration": 6847738994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Successful",
      "offset": 22
    }
  ],
  "location": "ChangeRequestSteps.closeCode(String)"
});
formatter.result({
  "duration": 621881762,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.closureInformationTab()"
});
formatter.result({
  "duration": 6705296492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 34
    }
  ],
  "location": "ChangeRequestSteps.closeNotes(String)"
});
formatter.result({
  "duration": 315990403,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.closeButton()"
});
formatter.result({
  "duration": 254505333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Closed",
      "offset": 18
    }
  ],
  "location": "ChangeRequestSteps.verifyClosed(String)"
});
formatter.result({
  "duration": 156456290,
  "status": "passed"
});
formatter.after({
  "duration": 754563066,
  "status": "passed"
});
formatter.uri("CNET_ChangeRequestNormal.feature");
formatter.feature({
  "line": 1,
  "name": "CNET CHANGE REQUEST AUTOMATION SCENARIOS",
  "description": "",
  "id": "cnet-change-request-automation-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CNET_ChangeRequest",
  "description": "",
  "id": "cnet-change-request-automation-scenarios;cnet-changerequest",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CNETChangeRequestForNormal"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch Browser and Navigate to CNET INCIDENT URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Switch to MainFrame",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify whether Login page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username and Password as \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Value in Filter Navigation Field Text Box \"\u003cFilterValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then Click on All Button for change request scenario"
    },
    {
      "line": 11,
      "value": "#Then Switch to MainFrame"
    }
  ],
  "line": 12,
  "name": "Click on Create New Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Switch to MainFrame",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click On Normal Link for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Select Priority Name as \"\u003cpriorityValue\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select Risk Name as \"\u003criskValue\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Select Impact Name as \"\u003cimpactValue\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click On Configuration Item LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Switch to Multiple Window and Select Text as \"\u003cconfigurationItem\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click On Assigned Group LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Switch to Multiple Window and Select Text as \"\u003cassignedGroup\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click On Assigned To LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Switch to Multiple Window and Select Text as \"\u003cassignedTO\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Select State as \"\u003cstate\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter short Description as \"\u003cshortDescription\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on Submit Button for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Click on recent Incident Created",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click On Approval Tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Right Click On Approval Button and click on Approve Button for QA Group",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Verify Authorize as \"\u003cauthorizeValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Right Click On Approval Button and click on Approve Button for CAB Approval",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Click On Schedule Button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Verify Scheduled as \"\u003cscheduledValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Select Planned Start Date",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Select Planned End Date",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Click On Planning Tab",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Enter Value in Implemenatation Plan Text Box \"\u003cimplementationPlanValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Click On Implementation Button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Verify Implement as \"\u003cimplementValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Click on review Button",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify Review as \"\u003creviewValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Click On Closure Information Tab",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Select Close Code as \"\u003ccloseCodeValue\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click On Closure Information Tab",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Enter Close Notes Field Text Box \"\u003ccloseNotesValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Click On Close Button",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Verify Closed as \"\u003cclosedValue\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "cnet-change-request-automation-scenarios;cnet-changerequest;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "FilterValue",
        "configurationItem",
        "priorityValue",
        "riskValue",
        "impactValue",
        "assignedGroup",
        "assignedTO",
        "state",
        "shortDescription",
        "implementationPlanValue",
        "closeCodeValue",
        "closeNotesValue",
        "authorizeValue",
        "scheduledValue",
        "implementValue",
        "reviewValue",
        "closedValue"
      ],
      "line": 50,
      "id": "cnet-change-request-automation-scenarios;cnet-changerequest;;1"
    },
    {
      "cells": [
        "admin",
        "Cnet345$",
        "Change",
        "*CAROL-IBM",
        "1 - Critical",
        "High",
        "1 - High",
        "QA",
        "QA 1",
        "Assess",
        "Sample Testing",
        "Testing Sample",
        "Successful",
        "Success",
        "Authorize",
        "Schedule",
        "Implement",
        "Review",
        "Closed"
      ],
      "line": 51,
      "id": "cnet-change-request-automation-scenarios;cnet-changerequest;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4713358622,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "CNET_ChangeRequest",
  "description": "",
  "id": "cnet-change-request-automation-scenarios;cnet-changerequest;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CNETChangeRequestForNormal"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch Browser and Navigate to CNET INCIDENT URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Switch to MainFrame",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify whether Login page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username and Password as \"admin\" and \"Cnet345$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Value in Filter Navigation Field Text Box \"Change\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then Click on All Button for change request scenario"
    },
    {
      "line": 11,
      "value": "#Then Switch to MainFrame"
    }
  ],
  "line": 12,
  "name": "Click on Create New Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Switch to MainFrame",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click On Normal Link for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Select Priority Name as \"1 - Critical\" for change request scenario",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select Risk Name as \"High\" for change request scenario",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Select Impact Name as \"1 - High\" for change request scenario",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click On Configuration Item LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Switch to Multiple Window and Select Text as \"*CAROL-IBM\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click On Assigned Group LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Switch to Multiple Window and Select Text as \"QA\" for change request scenario",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Click On Assigned To LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Switch to Multiple Window and Select Text as \"QA 1\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Select State as \"Assess\" for change request scenario",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Enter short Description as \"Sample Testing\" for change request scenario",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on Submit Button for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Click on recent Incident Created",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click On Approval Tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Right Click On Approval Button and click on Approve Button for QA Group",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Verify Authorize as \"Authorize\"",
  "matchedColumns": [
    14
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Right Click On Approval Button and click on Approve Button for CAB Approval",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Click On Schedule Button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Verify Scheduled as \"Schedule\"",
  "matchedColumns": [
    15
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Select Planned Start Date",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Select Planned End Date",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Click On Planning Tab",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Enter Value in Implemenatation Plan Text Box \"Testing Sample\"",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Click On Implementation Button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Verify Implement as \"Implement\"",
  "matchedColumns": [
    16
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Click on review Button",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify Review as \"Review\"",
  "matchedColumns": [
    17
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Click On Closure Information Tab",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Select Close Code as \"Successful\" for change request scenario",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click On Closure Information Tab",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Enter Close Notes Field Text Box \"Success\"",
  "matchedColumns": [
    13
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Click On Close Button",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Verify Closed as \"Closed\"",
  "matchedColumns": [
    18
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableSteps.launch_Browser_and_Navigate_to_CNet_Incident_URL()"
});
formatter.result({
  "duration": 32089723051,
  "status": "passed"
});
formatter.match({
  "location": "ReusableSteps.switch_to_MainFrame()"
});
formatter.result({
  "duration": 3081812739,
  "status": "passed"
});
formatter.match({
  "location": "ReusableSteps.verify_whether_Login_page_is_correctly_opened_or_not()"
});
formatter.result({
  "duration": 24010623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    },
    {
      "val": "Cnet345$",
      "offset": 44
    }
  ],
  "location": "ReusableSteps.enter_Username_and_Password_as_and(String,String)"
});
formatter.result({
  "duration": 671479767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change",
      "offset": 49
    }
  ],
  "location": "ChangeRequestSteps.enter_Value_in_Filter_navigation_Field_Text_Box(String)"
});
formatter.result({
  "duration": 15759248869,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.clickOnNewButton()"
});
formatter.result({
  "duration": 3440334169,
  "status": "passed"
});
formatter.match({
  "location": "ReusableSteps.switch_to_MainFrame()"
});
formatter.result({
  "duration": 3091992182,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.normalLink()"
});
formatter.result({
  "duration": 324490878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 - Critical",
      "offset": 25
    }
  ],
  "location": "ChangeRequestSteps.priorityName(String)"
});
formatter.result({
  "duration": 1800284818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "High",
      "offset": 21
    }
  ],
  "location": "ChangeRequestSteps.riskName(String)"
});
formatter.result({
  "duration": 259713301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 - High",
      "offset": 23
    }
  ],
  "location": "ChangeRequestSteps.impactName(String)"
});
formatter.result({
  "duration": 5372161020,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.configurationItem()"
});
formatter.result({
  "duration": 7171001223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "*CAROL-IBM",
      "offset": 46
    }
  ],
  "location": "ReusableSteps.HandleMultipleWindows(String)"
});
formatter.result({
  "duration": 9983482727,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.clickOnAssigedGroup()"
});
formatter.result({
  "duration": 6423393091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA",
      "offset": 46
    }
  ],
  "location": "ChangeRequestSteps.HandleMultipleWindows(String)"
});
formatter.result({
  "duration": 1494088969,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.clickOnAssignedTo()"
});
formatter.result({
  "duration": 6473424309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA 1",
      "offset": 46
    }
  ],
  "location": "ReusableSteps.HandleMultipleWindows(String)"
});
formatter.result({
  "duration": 9832755288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Assess",
      "offset": 17
    }
  ],
  "location": "ChangeRequestSteps.stateName(String)"
});
formatter.result({
  "duration": 221778270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sample Testing",
      "offset": 28
    }
  ],
  "location": "ChangeRequestSteps.shortDescription(String)"
});
formatter.result({
  "duration": 613227332,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.click_On_SubmitButton()"
});
formatter.result({
  "duration": 233108530,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.selectIncident()"
});
formatter.result({
  "duration": 1885236963,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.approvalTab()"
});
formatter.result({
  "duration": 5317281491,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.approvalButtonForQAGroup()"
});
formatter.result({
  "duration": 7232263486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authorize",
      "offset": 21
    }
  ],
  "location": "ChangeRequestSteps.verifyAuthorize(String)"
});
formatter.result({
  "duration": 146935432,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.approvalButtonForCabApproval()"
});
formatter.result({
  "duration": 7358790852,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.scheduleButton()"
});
formatter.result({
  "duration": 5282331911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Schedule",
      "offset": 21
    }
  ],
  "location": "ChangeRequestSteps.verifyScheduled(String)"
});
formatter.result({
  "duration": 167662957,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.plannedStartDate()"
});
formatter.result({
  "duration": 6892076002,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.plannedEndDate()"
});
formatter.result({
  "duration": 6089543436,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.planningTab()"
});
formatter.result({
  "duration": 251162791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing Sample",
      "offset": 46
    }
  ],
  "location": "ChangeRequestSteps.enter_Implementation_Plan(String)"
});
formatter.result({
  "duration": 365089764,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.implementationButton()"
});
formatter.result({
  "duration": 319476637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Implement",
      "offset": 21
    }
  ],
  "location": "ChangeRequestSteps.verifyImplement(String)"
});
formatter.result({
  "duration": 6174044408,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.reviewButton()"
});
formatter.result({
  "duration": 6270756178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Review",
      "offset": 18
    }
  ],
  "location": "ChangeRequestSteps.verifyReview(String)"
});
formatter.result({
  "duration": 189206446,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.closureInformationTab()"
});
formatter.result({
  "duration": 6859292062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Successful",
      "offset": 22
    }
  ],
  "location": "ChangeRequestSteps.closeCode(String)"
});
formatter.result({
  "duration": 235982363,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.closureInformationTab()"
});
formatter.result({
  "duration": 6698289813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 34
    }
  ],
  "location": "ChangeRequestSteps.closeNotes(String)"
});
formatter.result({
  "duration": 343019835,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.closeButton()"
});
formatter.result({
  "duration": 205738259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Closed",
      "offset": 18
    }
  ],
  "location": "ChangeRequestSteps.verifyClosed(String)"
});
formatter.result({
  "duration": 158832761,
  "status": "passed"
});
formatter.after({
  "duration": 777670484,
  "status": "passed"
});
formatter.uri("CNET_ChangeRequestStandard.feature");
formatter.feature({
  "line": 1,
  "name": "CNET CHANGE REQUEST AUTOMATION SCENARIOS",
  "description": "",
  "id": "cnet-change-request-automation-scenarios",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "CNET_ChangeRequest",
  "description": "",
  "id": "cnet-change-request-automation-scenarios;cnet-changerequest",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CNETChangeRequestForStandard"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch Browser and Navigate to CNET INCIDENT URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Switch to MainFrame",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify whether Login page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username and Password as \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Value in Filter Navigation Field Text Box \"\u003cFilterValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then Click on All Button for change request scenario"
    }
  ],
  "line": 11,
  "name": "Click on Create New Button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Switch to MainFrame",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click On Standard Link for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click on Network Standard Changes",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on Add Network Switch",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select Priority Name as \"\u003cpriorityValue\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Select Risk Name as \"\u003criskValue\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click On Configuration Item LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Switch to Multiple Window and Select Text as \"\u003cconfigurationItem\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Select Impact Name as \"\u003cimpactValue\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click On Assigned Group LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Switch to Multiple Window and Select Text as \"\u003cassignedGroup\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click On Assigned To LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Switch to Multiple Window and Select Text as \"\u003cassignedTO\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Select State as \"\u003cstate\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#Then Enter short Description as \"\u003cshortDescription\u003e\" for change request scenario"
    },
    {
      "line": 27,
      "value": "#Then Click on recent Incident Created"
    },
    {
      "line": 28,
      "value": "#When Click On Approval Tab"
    },
    {
      "line": 29,
      "value": "#When Right Click On Approval Button and click on Approve Button for QA Group"
    },
    {
      "line": 30,
      "value": "#Then Verify Authorize as \"\u003cauthorizeValue\u003e\""
    },
    {
      "line": 31,
      "value": "#When Right Click On Approval Button and click on Approve Button for CAB Approval"
    }
  ],
  "line": 32,
  "name": "Click On Schedule Button",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 33,
      "value": "#Then Verify Scheduled as \"\u003cscheduledValue\u003e\""
    }
  ],
  "line": 34,
  "name": "Select Planned Start Date",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Select Planned End Date",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Click on Submit Button for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Switch to Multiple Window",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Switch to MainFrame",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Click on Recently Created Incident for Standard",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "# When Click On Planning Tab"
    },
    {
      "line": 41,
      "value": "#Then Enter Value in Implemenatatison Plan Text Box \"\u003cimplementationPlanValue\u003e\""
    }
  ],
  "line": 42,
  "name": "Click On Implementation Button",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Verify Implement as \"\u003cimplementValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on review Button",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Verify Review as \"\u003creviewValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Click On Closure Information Tab",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Select Close Code as \"\u003ccloseCodeValue\u003e\" for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Click On Closure Information Tab",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Enter Close Notes Field Text Box \"\u003ccloseNotesValue\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Click On Close Button",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Verify Closed as \"\u003cclosedValue\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "cnet-change-request-automation-scenarios;cnet-changerequest;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "FilterValue",
        "configurationItem",
        "priorityValue",
        "riskValue",
        "impactValue",
        "assignedGroup",
        "assignedTO",
        "state",
        "shortDescription",
        "implementationPlanValue",
        "closeCodeValue",
        "closeNotesValue",
        "authorizeValue",
        "scheduledValue",
        "implementValue",
        "reviewValue",
        "closedValue"
      ],
      "line": 54,
      "id": "cnet-change-request-automation-scenarios;cnet-changerequest;;1"
    },
    {
      "cells": [
        "admin",
        "Cnet345$",
        "Change",
        "*CAROL-IBM",
        "1 - Critical",
        "High",
        "1 - High",
        "CAB Approval",
        "Howard Johnson",
        "Scheduled",
        "Sample Testing",
        "Testing Sample",
        "Successful",
        "Success",
        "Authorize",
        "Schedule",
        "Implement",
        "Review",
        "Closed"
      ],
      "line": 55,
      "id": "cnet-change-request-automation-scenarios;cnet-changerequest;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5546095948,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "CNET_ChangeRequest",
  "description": "",
  "id": "cnet-change-request-automation-scenarios;cnet-changerequest;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CNETChangeRequestForStandard"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch Browser and Navigate to CNET INCIDENT URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Switch to MainFrame",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Verify whether Login page is correctly opened or not",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Enter Username and Password as \"admin\" and \"Cnet345$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter Value in Filter Navigation Field Text Box \"Change\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#Then Click on All Button for change request scenario"
    }
  ],
  "line": 11,
  "name": "Click on Create New Button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Switch to MainFrame",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click On Standard Link for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click on Network Standard Changes",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click on Add Network Switch",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select Priority Name as \"1 - Critical\" for change request scenario",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Select Risk Name as \"High\" for change request scenario",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click On Configuration Item LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Switch to Multiple Window and Select Text as \"*CAROL-IBM\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Select Impact Name as \"1 - High\" for change request scenario",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Click On Assigned Group LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Switch to Multiple Window and Select Text as \"CAB Approval\" for change request scenario",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click On Assigned To LookUP for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Switch to Multiple Window and Select Text as \"Howard Johnson\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Select State as \"Scheduled\" for change request scenario",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#Then Enter short Description as \"\u003cshortDescription\u003e\" for change request scenario"
    },
    {
      "line": 27,
      "value": "#Then Click on recent Incident Created"
    },
    {
      "line": 28,
      "value": "#When Click On Approval Tab"
    },
    {
      "line": 29,
      "value": "#When Right Click On Approval Button and click on Approve Button for QA Group"
    },
    {
      "line": 30,
      "value": "#Then Verify Authorize as \"\u003cauthorizeValue\u003e\""
    },
    {
      "line": 31,
      "value": "#When Right Click On Approval Button and click on Approve Button for CAB Approval"
    }
  ],
  "line": 32,
  "name": "Click On Schedule Button",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 33,
      "value": "#Then Verify Scheduled as \"\u003cscheduledValue\u003e\""
    }
  ],
  "line": 34,
  "name": "Select Planned Start Date",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Select Planned End Date",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Click on Submit Button for change request scenario",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Switch to Multiple Window",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Switch to MainFrame",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Click on Recently Created Incident for Standard",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "# When Click On Planning Tab"
    },
    {
      "line": 41,
      "value": "#Then Enter Value in Implemenatatison Plan Text Box \"\u003cimplementationPlanValue\u003e\""
    }
  ],
  "line": 42,
  "name": "Click On Implementation Button",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Verify Implement as \"Implement\"",
  "matchedColumns": [
    16
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on review Button",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Verify Review as \"Review\"",
  "matchedColumns": [
    17
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Click On Closure Information Tab",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "Select Close Code as \"Successful\" for change request scenario",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Click On Closure Information Tab",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Enter Close Notes Field Text Box \"Success\"",
  "matchedColumns": [
    13
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Click On Close Button",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "Verify Closed as \"Closed\"",
  "matchedColumns": [
    18
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ReusableSteps.launch_Browser_and_Navigate_to_CNet_Incident_URL()"
});
formatter.result({
  "duration": 33556243745,
  "status": "passed"
});
formatter.match({
  "location": "ReusableSteps.switch_to_MainFrame()"
});
formatter.result({
  "duration": 3097204427,
  "status": "passed"
});
formatter.match({
  "location": "ReusableSteps.verify_whether_Login_page_is_correctly_opened_or_not()"
});
formatter.result({
  "duration": 18657680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    },
    {
      "val": "Cnet345$",
      "offset": 44
    }
  ],
  "location": "ReusableSteps.enter_Username_and_Password_as_and(String,String)"
});
formatter.result({
  "duration": 642985622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Change",
      "offset": 49
    }
  ],
  "location": "ChangeRequestSteps.enter_Value_in_Filter_navigation_Field_Text_Box(String)"
});
formatter.result({
  "duration": 15858141674,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.clickOnNewButton()"
});
formatter.result({
  "duration": 3427966420,
  "status": "passed"
});
formatter.match({
  "location": "ReusableSteps.switch_to_MainFrame()"
});
formatter.result({
  "duration": 3109653001,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.standardLink()"
});
formatter.result({
  "duration": 405290505,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.networkStandardChanges()"
});
formatter.result({
  "duration": 1808579590,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.addNetworkSwitch()"
});
formatter.result({
  "duration": 934941882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 - Critical",
      "offset": 25
    }
  ],
  "location": "ChangeRequestSteps.priorityName(String)"
});
formatter.result({
  "duration": 3057951368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "High",
      "offset": 21
    }
  ],
  "location": "ChangeRequestSteps.riskName(String)"
});
formatter.result({
  "duration": 317068091,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.configurationItem()"
});
formatter.result({
  "duration": 6315938657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "*CAROL-IBM",
      "offset": 46
    }
  ],
  "location": "ReusableSteps.HandleMultipleWindows(String)"
});
formatter.result({
  "duration": 132125781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 - High",
      "offset": 23
    }
  ],
  "location": "ChangeRequestSteps.impactName(String)"
});
formatter.result({
  "duration": 5246459454,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.clickOnAssigedGroup()"
});
formatter.result({
  "duration": 6522247834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CAB Approval",
      "offset": 46
    }
  ],
  "location": "ChangeRequestSteps.HandleMultipleWindows(String)"
});
formatter.result({
  "duration": 1520848550,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.clickOnAssignedTo()"
});
formatter.result({
  "duration": 6416682347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Howard Johnson",
      "offset": 46
    }
  ],
  "location": "ReusableSteps.HandleMultipleWindows(String)"
});
formatter.result({
  "duration": 9872737498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Scheduled",
      "offset": 17
    }
  ],
  "location": "ChangeRequestSteps.stateName(String)"
});
formatter.result({
  "duration": 235897688,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.scheduleButton()"
});
formatter.result({
  "duration": 5280426285,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.plannedStartDate()"
});
formatter.result({
  "duration": 6642129459,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.plannedEndDate()"
});
formatter.result({
  "duration": 5892371939,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.click_On_SubmitButton()"
});
formatter.result({
  "duration": 326080467,
  "status": "passed"
});
formatter.match({
  "location": "ReusableSteps.switchToMultipleWindow()"
});
formatter.result({
  "duration": 26965283,
  "status": "passed"
});
formatter.match({
  "location": "ReusableSteps.switch_to_MainFrame()"
});
formatter.result({
  "duration": 3069145205,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.standardRecentIncident()"
});
formatter.result({
  "duration": 275666926,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.implementationButton()"
});
formatter.result({
  "duration": 1689173089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Implement",
      "offset": 21
    }
  ],
  "location": "ChangeRequestSteps.verifyImplement(String)"
});
formatter.result({
  "duration": 6567165596,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.reviewButton()"
});
formatter.result({
  "duration": 6279425576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Review",
      "offset": 18
    }
  ],
  "location": "ChangeRequestSteps.verifyReview(String)"
});
formatter.result({
  "duration": 163453133,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.closureInformationTab()"
});
formatter.result({
  "duration": 6759481085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Successful",
      "offset": 22
    }
  ],
  "location": "ChangeRequestSteps.closeCode(String)"
});
formatter.result({
  "duration": 257350086,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.closureInformationTab()"
});
formatter.result({
  "duration": 6733977950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success",
      "offset": 34
    }
  ],
  "location": "ChangeRequestSteps.closeNotes(String)"
});
formatter.result({
  "duration": 322681048,
  "status": "passed"
});
formatter.match({
  "location": "ChangeRequestSteps.closeButton()"
});
formatter.result({
  "duration": 286279155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Closed",
      "offset": 18
    }
  ],
  "location": "ChangeRequestSteps.verifyClosed(String)"
});
formatter.result({
  "duration": 138653061,
  "status": "passed"
});
formatter.after({
  "duration": 754752516,
  "status": "passed"
});
});