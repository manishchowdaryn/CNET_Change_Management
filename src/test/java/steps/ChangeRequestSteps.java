package steps;

import java.awt.AWTException;
import java.io.IOException;
import java.util.Properties;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import baseClass.BaseUtil;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.deps.net.iharder.Base64.InputStream;
import pageObjects.AssessPage;
import pageObjects.ChangeRequest;
import pageObjects.FilterNavigation;
import pageObjects.Login;
import pageObjects.Logout;
import reusableFunction.Abstract;

public class ChangeRequestSteps extends BaseUtil {

	private static final Logger logger = Logger.getLogger(ChangeRequestSteps.class.getName());

	public BaseUtil base;
	public Login Login;
	public Logout Logout;
	public FilterNavigation FilterNavigation;
	public ChangeRequest ChangeRequest;
	public AssessPage AssessPage;
	public Abstract Abstract;
	static String folderName;
	static WebElement element;

	Properties prop = new Properties();
	InputStream input = null;

	public ChangeRequestSteps(BaseUtil base) {

		this.base = base;
		Login = new Login(base.driver);
		Logout = new Logout(base.driver);
		FilterNavigation = new FilterNavigation(base.driver);
		Abstract = new Abstract(base.driver);
		ChangeRequest = new ChangeRequest(base.driver);
		AssessPage = new AssessPage(base.driver);
	}

	@Then("^Enter Value in Filter Navigation Field Text Box \"([^\"]*)\"$")
	public void enter_Value_in_Filter_navigation_Field_Text_Box(String searchFilterValue) throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement searchFilter = Abstract.waitUntilConditionSatisfy(base, FilterNavigation.searchFilter());
		searchFilter.clear();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		searchFilter.sendKeys(searchFilterValue);
		Thread.sleep(12000);
		searchFilter.sendKeys(Keys.ENTER);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Enter value in filter navigation");

	}

	@Then("^Click on Create New Button$")
	public void clickOnNewButton() throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement newButton = Abstract.waitUntilConditionSatisfy(base, FilterNavigation.newButton());
		newButton.isEnabled();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		newButton.click();
		Thread.sleep(3000);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click on New Button");

	}

	@Then("^Click on All Button for change request scenario$")
	public void click_On_Service_Catalog_Order_Guides_Link() throws Throwable {

		WebElement allButton = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.allButton());
		allButton.click();
		allButton.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click on All Button Link");

	}

	@Then("^Click On Normal Link for change request scenario$")
	public void normalLink() throws Throwable {

		WebElement normalLink = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.normalLink());
		normalLink.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On Normal Link");

	}
	
	@Then("^Click On Standard Link for change request scenario$")
	public void standardLink() throws Throwable {

		WebElement standardLink = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.standardLink());
		standardLink.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On Standard Link");

	}
	
	@Then("^Click on Network Standard Changes$")
	public void networkStandardChanges() throws Throwable {

		WebElement networkStandardChanges = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.networkStandardChanges());
		networkStandardChanges.isEnabled();
		networkStandardChanges.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click on Network Standard Changes");

	}
	
	@Then("^Click on Add Network Switch$")
	public void addNetworkSwitch() throws Throwable {

		WebElement addNetworkSwitch = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.addNetworkSwitch());
		addNetworkSwitch.isEnabled();
		addNetworkSwitch.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click on Add Network Switch");

	}
	
	@Then("^Click On Emergency Link for change request scenario$")
	public void emergencyLink() throws Throwable {

		WebElement emergencyLink = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.emergencyLink());
		emergencyLink.click();
		Thread.sleep(5000);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On Emergency Link");

	}

	@Then("^Click On Configuration Item LookUP for change request scenario$")
	public void configurationItem() throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement configurationItem = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.configurationLookUP());
		configurationItem.click();
		Thread.sleep(6000);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On Configuration Item LookUP");

	}

	@Then("^Click On Assigned Group LookUP for change request scenario$")
	public void clickOnAssigedGroup() throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement assignmentGroup = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.assignmentGroup());
		assignmentGroup.click();
		Thread.sleep(6000);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On Assignment Group LookUP");

	}

	@Then("^Switch to Multiple Window and Select Text as \"([^\"]*)\" for change request scenario$")
	public void HandleMultipleWindows(String lookupValue) throws IOException, InterruptedException, AWTException {
		try {
			String mainWindow = base.driver.getWindowHandle();
			String windowTitle = base.driver.getTitle();
			Set<String> allWindowHandles = base.driver.getWindowHandles();
			for (String currentWindowHandle : allWindowHandles) {
				if (!currentWindowHandle.equals(mainWindow)) {
					base.driver.switchTo().window(currentWindowHandle);
					base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
					try {

						WebDriverWait wait = new WebDriverWait(base.driver, 10);
						wait.until(ExpectedConditions.elementToBeClickable(By.linkText(lookupValue)));
						base.driver.findElement(By.linkText(lookupValue)).click();
						base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
						logger.info("Switch to Multiple Window and Select Text as :" + lookupValue);
					} catch (WebDriverException e) {
						e.printStackTrace();
					}
				}
			}
			base.driver.switchTo().window(mainWindow);
			base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
			base.driver.switchTo().frame(Login.switch_to_Main_frame());

			logger.info("Switch to MainFrame");
		} catch (WebDriverException e) {
			e.printStackTrace();
		}
	}

	@Then("^Click On Assigned To LookUP for change request scenario$")
	public void clickOnAssignedTo() throws Throwable {

		WebElement assignedTo = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.assignedTo());
		assignedTo.click();
		Thread.sleep(6000);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On Assignment TO LookUP");

	}

	@Then("Select Priority Name as \"([^\"]*)\" for change request scenario$")
	public void priorityName(String priorityValue) throws IOException, AWTException, InterruptedException {
		WebElement priority = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.priority());
		Abstract.selectTheDropDownList(base, priority, priorityValue);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Select Type of priority as :" + priorityValue);
	}

	@Then("Select Risk Name as \"([^\"]*)\" for change request scenario$")
	public void riskName(String riskValue) throws IOException, AWTException, InterruptedException {
		WebElement risk = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.risk());
		Abstract.selectTheDropDownList(base, risk, riskValue);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Select Type of risk as :" + riskValue);
	}

	@Then("Select Impact Name as \"([^\"]*)\" for change request scenario$")
	public void impactName(String impactValue) throws IOException, AWTException, InterruptedException {
		WebElement impact = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.impact());
		Abstract.selectTheDropDownList(base, impact, impactValue);
		Thread.sleep(5000);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Select Type of impact as :" + impactValue);
	}

	@Then("Select State as \"([^\"]*)\" for change request scenario$")
	public void stateName(String stateValue) throws IOException, AWTException, InterruptedException {
		WebElement state = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.state());
		Abstract.selectTheDropDownList(base, state, stateValue);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Select Type of State as :" + stateValue);
	}

	@Then("^Enter short Description as \"([^\"]*)\" for change request scenario$")
	public void shortDescription(String shortDescriptionValue) throws Throwable {

		WebElement shortDescription = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.shortDescription());
		shortDescription.clear();
		shortDescription.sendKeys(shortDescriptionValue);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Enter Short Description");

	}

	@Then("^Click on Submit Button for change request scenario$")
	public void click_On_SubmitButton() throws Throwable {
		WebElement submitButton = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.submitButton());
		submitButton.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click on Submit Button");
	}

	@Then("^Click on Recently Created Incident for Standard$")
	public void standardRecentIncident() throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement standardIncident = Abstract.waitUntilConditionSatisfy(base, ChangeRequest.standardIncident());
		standardIncident.isEnabled();
		standardIncident.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click on Recently Created Incident for Standard");

	}
	
	@Then("^Click on recent Incident Created$")
	public void selectIncident() throws Throwable {
		WebElement selectIncident = Abstract.waitUntilConditionSatisfy(base, AssessPage.selectIncident());
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		selectIncident.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click on Recent Incident Created");
	}

	@When("^Click On Approval Tab$")
	public void approvalTab() throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		Thread.sleep(5000);
		Abstract.scrolldown(base);
		WebElement approvalTab = Abstract.waitUntilConditionSatisfy(base, AssessPage.approvalTab());
		approvalTab.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On Approval Tab");

	}

	@When("^Right Click On Approval Button and click on Approve Button for QA Group$")
	public void approvalButtonForQAGroup() throws Throwable {
		WebElement approvalButtonManeesh = Abstract.waitUntilConditionSatisfy(base, AssessPage.approvalButtonManeesh());
		Actions action = new Actions(base.driver).contextClick(approvalButtonManeesh);
		action.build().perform();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement approveButton = Abstract.waitUntilConditionSatisfy(base, AssessPage.approveButton());
		approveButton.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		Thread.sleep(6000);
		logger.info("Click On Approval Button For QA Group");

	}

	@When("^Right Click On Approval Button and click on Approve Button for CAB Approval$")
	public void approvalButtonForCabApproval() throws Throwable {
		Thread.sleep(6000);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement approvalButtonTest = Abstract.waitUntilConditionSatisfy(base, AssessPage.approveButtonTest());
		Actions action = new Actions(base.driver).contextClick(approvalButtonTest);
		action.build().perform();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement approveButton = Abstract.waitUntilConditionSatisfy(base, AssessPage.approveButton());
		approveButton.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On Approval Button For CAB Approval");

	}

	@When("^Click On Planning Tab$")
	public void planningTab() throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement planningTab = Abstract.waitUntilConditionSatisfy(base, AssessPage.planningTab());
		planningTab.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On Planning Tab");

	}

	@Then("^Enter Value in Implemenatation Plan Text Box \"([^\"]*)\"$")
	public void enter_Implementation_Plan(String implementationPlanValue) throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement implementationPlan = Abstract.waitUntilConditionSatisfy(base, AssessPage.implementationPlan());
		implementationPlan.clear();
		implementationPlan.sendKeys(implementationPlanValue);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Enter value in Implementation Plan");

	}

	@When("^Click On Implementation Button$")
	public void implementationButton() throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement implementationButton = Abstract.waitUntilConditionSatisfy(base, AssessPage.implementationButton());
		implementationButton.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On Implementation Button");

	}

	@When("^Click On Schedule Button$")
	public void scheduleButton() throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		Abstract.scrolldown(base);
		WebElement schedule = Abstract.waitUntilConditionSatisfy(base, AssessPage.schedule());
		schedule.click();
		Thread.sleep(5000);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On Schedule Button");

	}

	@When("^Select Planned Start Date$")
	public void plannedStartDate() throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		Abstract.scrolldown(base);
		Thread.sleep(5000);
		WebElement plannedStartDate = Abstract.waitUntilConditionSatisfy(base, AssessPage.plannedStartDate());
		plannedStartDate.isEnabled();
		plannedStartDate.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On Planned StartDate");

		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement GoToTodayDate = Abstract.waitUntilConditionSatisfy(base, AssessPage.GoToTodayDate());
		GoToTodayDate.isEnabled();
		GoToTodayDate.click();
		logger.info("Click On GoToToday Date");
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		
		WebElement selectOkButton = Abstract.waitUntilConditionSatisfy(base, AssessPage.selectOkButton());
		selectOkButton.isEnabled();
		selectOkButton.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("select Ok Button");

	}

	@When("^Select Planned End Date$")
	public void plannedEndDate() throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		Abstract.scrolldown(base);
		Thread.sleep(5000);
		WebElement plannedEndDate = Abstract.waitUntilConditionSatisfy(base, AssessPage.plannedEndDate());
		plannedEndDate.isEnabled();
		plannedEndDate.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On Planned End Date");

		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);

		WebElement EndGoToTodayDate = Abstract.waitUntilConditionSatisfy(base, AssessPage.GoToTodayDate());
		EndGoToTodayDate.isEnabled();
		EndGoToTodayDate.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On GoToToday Date");

		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement EndselectOkButton = Abstract.waitUntilConditionSatisfy(base, AssessPage.selectOkButton());
		EndselectOkButton.isEnabled();
		EndselectOkButton.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("select Ok Button");

	}

	@Then("^Click on review Button$")
	public void reviewButton() throws Throwable {
		WebElement reviewButton = Abstract.waitUntilConditionSatisfy(base, AssessPage.reviewButton());
		reviewButton.click();
		Thread.sleep(6000);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click on Review Button");
	}

	@When("^Click On Closure Information Tab$")
	public void closureInformationTab() throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		Abstract.scrolldown(base);
		WebElement closureInformationTab = Abstract.waitUntilConditionSatisfy(base, AssessPage.closureInformationTab());
		closureInformationTab.click();
		Thread.sleep(3000);
		closureInformationTab.click();
		closureInformationTab.click();
		Thread.sleep(3000);
		closureInformationTab.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On Closure Information Tab");

	}

	@Then("Select Close Code as \"([^\"]*)\" for change request scenario$")
	public void closeCode(String closeCodeValue) throws IOException, AWTException, InterruptedException {
		WebElement closeCode = Abstract.waitUntilConditionSatisfy(base, AssessPage.closeCode());
		Abstract.selectTheDropDownList(base, closeCode, closeCodeValue);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Select Type of Close Code as :" + closeCodeValue);
	}

	@Then("^Enter Close Notes Field Text Box \"([^\"]*)\"$")
	public void closeNotes(String closeNotesValue) throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		Abstract.scrolldown(base);
		WebElement closeNotes = Abstract.waitUntilConditionSatisfy(base, AssessPage.closeNotes());
		closeNotes.clear();
		closeNotes.sendKeys(closeNotesValue);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Enter value in Close Notes");

	}

	@When("^Click On Close Button$")
	public void closeButton() throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement closeButton = Abstract.waitUntilConditionSatisfy(base, AssessPage.closeButton());
		closeButton.click();
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Click On Close Button");

	}

	@Then("^Verify Authorize as \"([^\"]*)\"$")
	public void verifyAuthorize(String authorizeValue) throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement authorizeValueLoc = Abstract.waitUntilConditionSatisfy(base, AssessPage.Authorize());
		String authorizeValueText = authorizeValueLoc.getText();
		Assert.assertEquals(authorizeValueText, authorizeValue);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Verify Authorize Value");

	}

	@Then("^Verify Scheduled as \"([^\"]*)\"$")
	public void verifyScheduled(String scheduledValue) throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement scheduledValueLoc = Abstract.waitUntilConditionSatisfy(base, AssessPage.schedule());
		String scheduledValueText = scheduledValueLoc.getText();
		Assert.assertEquals(scheduledValueText, scheduledValue);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Verify Scheduled Value");

	}

	@Then("^Verify Implement as \"([^\"]*)\"$")
	public void verifyImplement(String implementValue) throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement implementValueLoc = Abstract.waitUntilConditionSatisfy(base, AssessPage.Implement());
		String implementValueText = implementValueLoc.getText();
		Assert.assertEquals(implementValueText, implementValue);
		Thread.sleep(6000);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Verify Implement Value");

	}

	@Then("^Verify Review as \"([^\"]*)\"$")
	public void verifyReview(String reviewValue) throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement reviewValueLoc = Abstract.waitUntilConditionSatisfy(base, AssessPage.Review());
		String reviewValueText = reviewValueLoc.getText();
		Assert.assertEquals(reviewValueText, reviewValue);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Verify Review Value");

	}

	@Then("^Verify Closed as \"([^\"]*)\"$")
	public void verifyClosed(String closedValue) throws Throwable {
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		WebElement closedValueLoc = Abstract.waitUntilConditionSatisfy(base, AssessPage.Closed());
		String closedValueText = closedValueLoc.getText();
		Assert.assertEquals(closedValueText, closedValue);
		base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		logger.info("Verify Closed Value");

	}

}
