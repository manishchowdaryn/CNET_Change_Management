package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import baseClass.BaseUtil;

public class AssessPage {

	public BaseUtil base;

	public AssessPage(WebDriver driver) {

		PageFactory.initElements(driver, this);

	}

	@FindBy(how = How.XPATH, using = "//*[@class='list2_body']/tr[1]/td[3]/a")
	public WebElement selectIncident;

	@FindBy(how = How.XPATH, using = "//*[@id='tabs2_list']/span[3]/span")
	public WebElement approvalTab;

	@FindBy(how = How.XPATH, using = "//a[contains(text(),'QA 1')]")
	public WebElement approvalButtonManeesh;

	@FindBy(how = How.XPATH, using = "//*[@id='context_list_rowchange_request.sysapproval_approver.sysapproval']/div[11]")
	public WebElement approveButton;
	
	@FindBy(how = How.XPATH, using = "//a[contains(text(), 'Howard Johnson')]")
	public WebElement approveButtonTest;
	
	@FindBy(how = How.XPATH, using = "//*[@id='tabs2_section']/span[1]/span")
	public WebElement planningTab;
	
	@FindBy(how = How.XPATH, using = "//*[@id='change_request.implementation_plan']")
	public WebElement implementationPlan;
	
	@FindBy(how = How.XPATH, using = "//*[@id='state_model_move_to_implement']")
	public WebElement implementationButton;	
	
	@FindBy(how = How.XPATH, using = "//*[@id='tabs2_section']/span[2]/span/span[2]")
	public WebElement schedule;	
	
	@FindBy(how = How.XPATH, using = "//*[@id='element.change_request.start_date']/div[2]/div[2]/span/span")
	public WebElement plannedStartDate;	
	
	@FindBy(how = How.XPATH, using = "//*[@id='element.change_request.end_date']/div[2]/div[2]/span/span")
	public WebElement plannedEndDate;	
	
	@FindBy(how = How.XPATH, using = "//*[@id='GwtDateTimePicker_header_contents']/div/table/tbody/tr/td/table/tbody/tr[9]")
	public WebElement GoToTodayDate;	
	
	@FindBy(how = How.XPATH, using = "//*[@id='GwtDateTimePicker_ok']")
	public WebElement selectOkButton;
	
	@FindBy(how = How.XPATH, using = "//*[@id='state_model_move_to_review']")
	public WebElement reviewButton;
	
	@FindBy(how = How.XPATH, using = "//*[@id='tabs2_section']/span[5]/span[1]/span[2]")
	public WebElement closureInformationTab;
	
	@FindBy(how = How.XPATH, using = "//*[@id='change_request.close_code']")
	public WebElement closeCode;
	
	@FindBy(how = How.XPATH, using = "//*[@id='change_request.close_notes']")
	public WebElement closeNotes;
	
	@FindBy(how = How.XPATH, using = "//*[@id='state_model_move_to_closed']")
	public WebElement closeButton;
	
	@FindBy(how = How.XPATH, using = "//*[@id='cd591479c0a801640182b9b52e6f070b']/div[1]/div/div/table/tbody/tr/td/ol/li[3]/a")
	public WebElement Authorize;
	
	@FindBy(how = How.XPATH, using = "//*[@id='cd591479c0a801640182b9b52e6f070b']/div[1]/div/div/table/tbody/tr/td/ol/li[4]/a")
	public WebElement Scheduled;
		
	@FindBy(how = How.XPATH, using = "//*[@id='cd591479c0a801640182b9b52e6f070b']/div[1]/div/div/table/tbody/tr/td/ol/li[5]/a")
	public WebElement Implement;
	
	@FindBy(how = How.XPATH, using = "//*[@id='cd591479c0a801640182b9b52e6f070b']/div[1]/div/div/table/tbody/tr/td/ol/li[6]/a")
	public WebElement Review;
	
	@FindBy(how = How.XPATH, using = "//*[@id='cd591479c0a801640182b9b52e6f070b']/div[1]/div/div/table/tbody/tr/td/ol/li[7]/a")
	public WebElement Closed;
	
		
	public WebElement planningTab() {
		return planningTab;
	}

	public WebElement approvalTab() {
		return approvalTab;
	}

	public WebElement approvalButtonManeesh() {
		return approvalButtonManeesh;
	}

	public WebElement approveButton() {
		return approveButton;
	}

	public WebElement approveButtonTest() {
		return approveButtonTest;
	}
	
	public WebElement selectIncident() {
		return selectIncident;
	}
	
	public WebElement implementationPlan() {
		return implementationPlan;
	}

	public WebElement implementationButton() {
		return implementationButton;
	}
	
	public WebElement schedule() {
		return schedule;
	}

	public WebElement plannedStartDate() {
		return plannedStartDate;
	}

	public WebElement plannedEndDate() {
		return plannedEndDate;
	}

	public WebElement GoToTodayDate() {
		return GoToTodayDate;
	}

	public WebElement selectOkButton() {
		return selectOkButton;
	}
	
	public WebElement reviewButton() {
		return reviewButton;
	}
	
	public WebElement closureInformationTab() {
		return closureInformationTab;
	}
	
	public WebElement closeCode() {
		return closeCode;
	}

	public WebElement closeNotes() {
		return closeNotes;
	}
	
	public WebElement closeButton() {
		return closeButton;
	}
	
	public WebElement Authorize() {
		return Authorize;
	}
	
	public WebElement Scheduled() {
		return Scheduled;
	}
	
	public WebElement Implement() {
		return Implement;
	}
	
	public WebElement Review() {
		return Review;
	}
	
	public WebElement Closed() {
		return Closed;
	}
	
	
}
