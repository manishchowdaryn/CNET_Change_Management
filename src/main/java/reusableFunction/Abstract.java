package reusableFunction;

import java.awt.AWTException;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.cucumber.listener.Reporter;

import baseClass.BaseUtil;
import ru.yandex.qatools.allure.annotations.Step;

public class Abstract extends BaseUtil {

	public static final Logger logg = LoggerFactory.getLogger(Abstract.class);
	public static String folderName;

	public BaseUtil base;

	public Abstract(WebDriver driver) {

		PageFactory.initElements(driver, this);

	}

	@Step("Method to select by text from drop down")
	public void selectTheDropDownList(BaseUtil base, WebElement dropDown, String text) {
		try {
			Select select = new Select(dropDown);
			select.selectByVisibleText(text);
			base.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		} catch (NoSuchElementException exc) {
			exc.printStackTrace();

		} catch (Exception e) {
			e.printStackTrace();

		}
	}


	@Step("Method to wait until condition is satisfied")
	public WebElement waitUntilConditionSatisfy(BaseUtil base, WebElement webElement)
			throws IOException, AWTException, InterruptedException {
		base.driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		try {
			FluentWait<WebDriver> waitforelement = new FluentWait<WebDriver>(base.driver)
					.withTimeout(60, TimeUnit.SECONDS).pollingEvery(60, TimeUnit.MILLISECONDS)
					.ignoring(NoSuchElementException.class);
			waitforelement.until(ExpectedConditions.elementToBeClickable(webElement));
			base.driver.manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
		} catch (NoSuchElementException exc) {
			exc.printStackTrace();

		} catch (WebDriverException e) {
			e.printStackTrace();
			// Method to capture failed Screenshot
			screenshotcapture();

		}
		return webElement;
	}
	

	public void scrolldown(BaseUtil base) throws InterruptedException {

		JavascriptExecutor js = (JavascriptExecutor) base.driver;
        js.executeScript("javascript:window.scrollBy(250,350)");
        js.executeScript("window.scrollTo(0, Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, document.documentElement.clientHeight));");
        
        
	}

	public void screenshotcapture() throws IOException, AWTException {
		folderName = Reporter.getFolder();
		int i = Reporter.takescreenshot();
		Reporter.addScreenCaptureFromPath("./FailedScreenshot" + i + ".jpg", "CNET_Incident");

	}

}
