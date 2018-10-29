package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import baseClass.BaseUtil;

public class FilterNavigation {

	public BaseUtil base;

	public FilterNavigation(WebDriver driver) {

		PageFactory.initElements(driver, this);

	}

	@FindBy(how = How.XPATH, using = ".//*[@id='filter']")
	public WebElement searchFilter;

	@FindBy(how = How.ID, using = "nav_filter_controls")
	public WebElement searchFilterClick;

	@FindBy(how = How.XPATH, using = "//*[@id='b55b4ab0c0a80009007a9c0f03fb4da9']")
	public WebElement allButton;

	@FindBy(how = How.XPATH, using = "//*[@id='323bb07bc611227a018aea9eb8f3b35e']/div/div")
	public WebElement newButton;

	public WebElement searchFilter() {
		return searchFilter;
	}

	public WebElement searchFilterClick() {
		return searchFilterClick;
	}

	public WebElement allButton() {
		return allButton;
	}

	public WebElement newButton() {
		return newButton;
	}

}
