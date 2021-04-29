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
}

export default new WebTable();