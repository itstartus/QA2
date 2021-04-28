class RadioButton {
  get yes() {
    return $("label[for = 'yesRadio']");
  }
  get no() {
    return $("label[for = 'noRadio']");
  }
  get impressive() {
    return $("label[for = 'impressiveRadio']");
  }
  get radioButtons(){
      return [this.yes, this.impressive, this.no];
  }
  get textSuccess(){
      return $('.text-success').getText();
  }
}

export default new RadioButton();
