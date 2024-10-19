package edu.gsu.da.service;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserContext;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Download;
import com.microsoft.playwright.Locator;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;
import com.microsoft.playwright.options.AriaRole;
import org.springframework.stereotype.Service;

import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

@Service
public class EmDatServiceImpl implements EmDatService{
    @Override
    public Map<String, String> downloadData(int fromYear, int toYear) {
        Map<String, String> response = new HashMap<>();

        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false)); // Set headless to false for testing
            BrowserContext context = browser.newContext();
            Page page = context.newPage();

            // Navigate to the URL
            page.navigate("https://public.emdat.be/");

            // Click "Go" button
            page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Go")).first().click();

            // Enter username and password
            page.locator("#username").click();
            page.locator("#username").fill("vmedida1@student.gsu.edu");
            page.locator("#password").click();
            page.locator("#password").fill("Gsumajor#1");

            // Click "OK" button to log in
            page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("OK")).click();

            // Click "Go" button again
            page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Go")).first().click();

            // Select options and fill in year fields
            page.getByLabel("Include Historical events (pre-2000)").click();
            page.locator(".ant-select-selector").first().click();
            page.locator("div").filter(new Locator.FilterOptions().setHasText(Pattern.compile("^Natural$"))).locator("path").click();
            page.locator("div:nth-child(3) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner").click();
            page.locator("div:nth-child(5) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner").click();
            page.locator("div:nth-child(6) > .ant-select-tree-checkbox > .ant-select-tree-checkbox-inner").click();

            // Fill the "From" and "To" year fields
            page.getByText("FromTo").click();
            page.getByLabel("From").click();
            page.getByLabel("From").fill(String.valueOf(fromYear));
            page.getByLabel("To", new Page.GetByLabelOptions().setExact(true)).click();
            page.getByLabel("To", new Page.GetByLabelOptions().setExact(true)).fill(String.valueOf(toYear));
            page.getByLabel("To", new Page.GetByLabelOptions().setExact(true)).press("Enter");

            // Wait for the download and click the download link
            Download download = page.waitForDownload(() -> {
                page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("download Download")).click();
            });

            // Save the downloaded file
            String downloadPath = "src/main/resources/downloaded/file.xlsx";
            download.saveAs(Paths.get(downloadPath));

            // Logout after download
            page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("Logout")).click();

            // Success response
            response.put("status", "success");
            response.put("message", "File downloaded successfully.");
            response.put("filePath", downloadPath);

        } catch (Exception e) {
            e.printStackTrace();
            // Error response
            response.put("status", "error");
            response.put("message", "An error occurred: " + e.getMessage());
        }
        return response;
    }
}
