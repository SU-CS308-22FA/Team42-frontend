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

    def test_search(self):
        driver = self.driver
        time.sleep(2)

        driver.get("https://cs308-frontend42.herokuapp.com/searchevent")
        search = driver.find_element(By.XPATH,"//input[@placeholder='Search...']")
        time.sleep(2)
        search.send_keys("ere")
        time.sleep(2)
        self.assertIn("Eren", driver.page_source)
       
        
    def tearDown(self):
        self.driver.close()


if __name__ == "__main__":
    unittest.main()