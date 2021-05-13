class Links{

    get allLinks(){
        return $$('a');
    }
    get allHrefs(){
        return this.allLinks.map(el => 'https://github.com' + el.getAttribute('href'));
    }

}

export default new Links();