// index.js
import Storage from './Storage';
import Classification from './Classification';
import Label from './Label';
import Search from './Search';
import Form from './Form';

export default class Api {
    Storage: any;
    Classification: any;
    Label: any;
    Search: any;
    Form: any;

    constructor() {
        this.Storage = new Storage();
        this.Classification = new Classification();
        this.Label = new Label();
        this.Search = new Search();
        this.Form = new Form();
    }
}
