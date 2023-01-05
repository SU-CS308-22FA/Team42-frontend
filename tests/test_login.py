import unittest
from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoAlertPresentException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time


class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome('./chromedriver')

    def test_login(self):
        driver = self.driver
        time.sleep(2)

        driver.get("https://cs308-frontend42.herokuapp.com/login")
        email = driver.find_element(By.NAME, "email")
        password = driver.find_element(By.NAME, "password")
        email.send_keys("qqqqqq@gmail.com")
        time.sleep(2)
        password.send_keys("qqqqqqqqqqqqqqqqqqqqqqqq")
        time.sleep(2)
        password.send_keys(Keys.RETURN)
        time.sleep(2)
        self.assertIn("email", driver.page_source)
        
    def tearDown(self):
        self.driver.close()


if __name__ == "__main__":
    unittest.main()