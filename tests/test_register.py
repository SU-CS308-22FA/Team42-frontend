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
        self.driver = webdriver.Chrome()
    
    def test_register(self):
        driver = self.driver
        time.sleep(2)

        driver.get("https://cs308-frontend42.herokuapp.com/signup")
        email = driver.find_element(By.NAME, "email")
        phone = driver.find_element(By.NAME, "phone")
        fullname = driver.find_element(By.NAME, "fullname")
        password = driver.find_element(By.NAME, "password")
        phone.send_keys("5315313131")
        fullname.send_keys("eren girisken")
        email.send_keys("try@gmail.com")
        time.sleep(2)
        password.send_keys("tr1111111111111y")
        time.sleep(2)
        password.send_keys(Keys.RETURN)
        
        time.sleep(2)
        self.assertIn("email", driver.page_source)
    def tearDown(self):
        self.driver.quit()


if __name__ == "__main__":
    unittest.main()