class PracticeForm {
  get ddState() {
    return $("#state > div > div:nth-of-type(1)");
  }
  get ddStateList() {
    return $$("#state > div:nth-of-type(2) > div > div");
  }
  get ddCity() {
    return $("#city > div > div:nth-of-type(1)");
  }
  get ddCityList() {
    return $$("#city > div:nth-of-type(2) > div > div");
  }
  get inputDate(){
      return $('#dateOfBirthInput');
  }
}

export default new PracticeForm();
