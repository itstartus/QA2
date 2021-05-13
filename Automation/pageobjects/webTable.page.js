class WebTable{

    get btnAdd(){
        return $('#addNewRecordButton');
    }
    get modal(){
        return $('.modal-content');
    }
    get modalHeader(){
        return $('#registration-form-modal').getText();
    }
    get firstName(){
        return $('#firstName');
    }
    get lastName(){
        return $('#lastName');
    }
    get userEmail(){
        return $('#userEmail');
    }
    get age(){
        return $('#age');
    }
    get salary(){
        return $('#salary');
    }
    get department(){
        return $('#department');
    }
    get allFields(){
        return [
            this.firstName,
            this.lastName,
            this.userEmail,
            this.age,
            this.salary,
            this.department
        ]
    }
    get btnSubmit(){
        return $('#submit');
    }
    fillWebTableData(webTableData){
        this.firstName.setValue(webTableData.firstName);
        this.lastName.setValue(webTableData.lastName);
        this.userEmail.setValue(webTableData.userEmail);
        this.age.setValue(webTableData.age);
        this.salary.setValue(webTableData.salary);
        this.department.setValue(webTableData.department);
        this.btnSubmit.click();
        this.modal.waitForExist({ timeout: 5000, reverse : true });
    }
    get tableBody(){
        return $('.rt-tbody');
    }
    get tableRows(){
        return $$('.rt-tr-group');
    }
    btnDelete(a){
        return $(`#delete-record-${a}`);
    }
    btnEdit(a){
        return $(`#edit-record-${a}`);
    }
}

export default new WebTable();