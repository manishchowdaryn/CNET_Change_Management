package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import baseClass.BaseUtil;

public class ChangeRequest {

	public BaseUtil base;

	public ChangeRequest(WebDriver driver) {

		PageFactory.initElements(driver, this);

	}

	
	@FindBy(how = How.XPATH, using = "//*[@id='3264ded3c611227a019523c8448d2d91']")
	public WebElement allButton;
	
	@FindBy(how = How.XPATH, using = "/html/body/form/div[2]/a")
	public WebElement normalLink;
	
	@FindBy(how = How.XPATH, using = "/html/body/form/div[3]/a")
	public WebElement standardLink;
	
	@FindBy(how = How.XPATH, using = "//table/tbody[2]/tr/td/table/tbody/tr[1]/td[2]/div[1]/a")
	public WebElement networkStandardChanges;
	
	@FindBy(how = How.XPATH, using = "//*[@id='item_link_508e02ec47410200e90d87e8dee49058']")
	public WebElement addNetworkSwitch;
	
	@FindBy(how = How.XPATH, using = "/html/body/form/div[4]/a")
	public WebElement emergencyLink;

	@FindBy(how = How.XPATH, using = "//*[@id='lookup.change_request.cmdb_ci']")
	public WebElement configurationLookUP;

	@FindBy(how = How.XPATH, using = "//*[@id='change_request.priority']")
	public WebElement priority;

	@FindBy(how = How.XPATH, using = "//*[@id='change_request.risk']")
	public WebElement risk;

	@FindBy(how = How.XPATH, using = "//*[@id='change_request.impact']")
	public WebElement impact;

	@FindBy(how = How.XPATH, using = "//*[@id='change_request.state']")
	public WebElement state;

	@FindBy(how = How.XPATH, using = "//*[@id='lookup.change_request.assignment_group']")
	public WebElement assignmentGroup;

	@FindBy(how = How.XPATH, using = "//*[@id='lookup.change_request.assigned_to']")
	public WebElement assignedTo;

	@FindBy(how = How.XPATH, using = "//*[@id='change_request.short_description']")
	public WebElement shortDescription;

	@FindBy(how = How.XPATH, using = "//*[@id='sysverb_insert']")
	public WebElement submitButton;

	@FindBy(how = How.XPATH, using = "//*[@placeholder='Search' and @class='form-control']")
	public WebElement searchButton;
	
	@FindBy(how = How.XPATH, using = "//*[@id='output_messages']/div/div/div/a")
	public WebElement standardIncident;
	
	
	public WebElement allButton() {
		return allButton;
	}
	
	public WebElement normalLink() {
		return normalLink;
	}
	
	public WebElement standardLink() {
		return standardLink;
	}
	
	public WebElement networkStandardChanges() {
		return networkStandardChanges;
	}
	
	public WebElement addNetworkSwitch() {
		return addNetworkSwitch;
	}
	
	public WebElement emergencyLink() {
		return emergencyLink;
	}

	public WebElement configurationLookUP() {
		return configurationLookUP;
	}

	public WebElement priority() {
		return priority;
	}

	public WebElement risk() {
		return risk;
	}

	public WebElement impact() {
		return impact;
	}

	public WebElement assignmentGroup() {
		return assignmentGroup;
	}

	public WebElement state() {
		return state;
	}

	public WebElement assignedTo() {
		return assignedTo;
	}

	public WebElement shortDescription() {
		return shortDescription;
	}

	public WebElement submitButton() {
		return submitButton;
	}
	
	public WebElement searchButton() {
		return searchButton;
	}
	
	public WebElement standardIncident() {
		return standardIncident;
	}
	
	

}
