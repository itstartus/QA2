class RadioButton {
  get yes() {
    return $("#yesRadio");
  }
  get no() {
    return $("#noRadio");
  }

  get impressive() {
    return $("#impressiveRadio");
  }
  get radioButtons() {
    return [this.yes, this.impressive, this.no];
  }
  get textSuccess() {
    return $(".text-success").getText();
  }
}

export default new RadioButton();
