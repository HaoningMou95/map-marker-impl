from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import time
from selenium.webdriver.common.by import By


TEST_DATA = {'id': 10, 'name': 'test1', 'position': '-37.905556, 145.059444'}


# Launch the browser and navigate to the webpage
driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get('http://localhost:3000')

# Test that the page title is correct
assert driver.title == 'Map marker'

# test that the leaflet css link is loaded correctly
leaflet_css_link = driver.find_element(By.CSS_SELECTOR, 'link[href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"]')
assert leaflet_css_link is not None

# test the "add new marker" button is functional 
add_marker_button = driver.find_element(By.XPATH, "//button[text()='Add new marker']")
add_marker_button.click()

# test that the "add new marker" form is displayed
add_new_marker_area = driver.find_element(By.XPATH,"//h2[text()='Add a new marker']")
input_marker_name = add_new_marker_area.find_element(By.XPATH,"//p[text()='Marker Name']")
assert add_new_marker_area.is_displayed()
assert input_marker_name is not None

# test that the "add new marker" form is functional
marker_input_area = add_new_marker_area.find_element(By.XPATH,"//input[@placeholder='Marker name']")
position_input_area = add_new_marker_area.find_element(By.XPATH,"//input[@placeholder='Position']")
assert marker_input_area is not None
assert position_input_area is not None

# test that the add function is functional
marker_input_area.send_keys(TEST_DATA['name'])
position_input_area.send_keys(TEST_DATA['position'])
add_button = driver.find_element(By.XPATH, "//button[text()='Add']")
add_button.click()
time.sleep(2)

# test that the marker is added 
new_marker = driver.find_element(By.XPATH, f"//li[text()='{TEST_DATA['name']}']")
assert new_marker is not None

# test that the cancel button is functional
add_marker_button = driver.find_element(By.XPATH, "//button[text()='Add new marker']")
add_marker_button.click()
cancel_button = driver.find_element(By.XPATH, "//button[text()='Cancel']")
cancel_button.click()
assert not driver.find_elements(By.XPATH,'//*[contains(text(), \'Add a new marker\')]')

# Close the browser
driver.quit()
