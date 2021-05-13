class CheckBox {
  get mainPageElements() {
    return $$(".category-cards > div")[0];
  }
  get elements() {
    return $$(".accordion > .element-group")[0];
  }
  get checkbox(){
    return this.elements.$$('div > ul > li')[1];
  }
  get mainHeader(){
      return $(".main-header");
  }
  get expandAll(){
      return $("button[title = 'Expand all']");
  }
  listItem(a){
      return $(`//*[text() = '${a}']`);
  }
  get allTitles(){
      return $$('span.rct-title').map(el => el.getText());
  }
  get checkedElements(){
      return $$(':checked ~ span.rct-title').map(el => el.getText().toLowerCase());
  }
  get result(){
      return $$('#result > span.text-success').map(el => el.getText().toLowerCase());
  }

}

export default new CheckBox();
