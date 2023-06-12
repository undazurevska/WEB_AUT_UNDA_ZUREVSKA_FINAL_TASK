import BasePage from "./Base.page";

class FormPage extends BasePage{
    static get firstName() {
        return cy.get("#firstName");
    }
    static get lastName() {
        return cy.get("#lastName");
    }
    static get email() {
        return cy.get("#userEmail");
    }
    static get genderButton() {
        return cy.get("#gender-radio-3");
    }
    static get number() {
        return cy.get("#userNumber");
    }
    static get dateOfBirthFieldOpening() {
        return cy.get("#dateOfBirthInput");
    }
    static get monthSelect() {
        return cy.get(".react-datepicker__month-select");
    }
    static get yearSelect() {
        return cy.get(".react-datepicker__year-select");
    }
    static get dateSelect() {
        return cy.get(".react-datepicker__day--028");
    }

    static get subjectField() {
        return cy.get("#subjectsContainer");

    }
    static get autoSubjectSelect() {
        return cy.get(".subjects-auto-complete__menu");
    }
    static get hobbiesCheck() {
        return cy.get("#hobbies-checkbox-3");
    }
    static get uploadFile() {
        return cy.get("input[type=file]");
    }
    static get currentAddress(){
        return cy.get("#currentAddress");
    }
    static get stateSelect(){
        return cy.get("#state");
    }
    static get stateSelectValue(){
        return cy.get("#state > div");
    }
    static get citySelect(){
        return cy.get("#city");
    }
    static get citySelectValue(){
        return cy.get("#city > div");
    }
    static get submitBtn(){
        return cy.get("#submit");
    }



}
export default FormPage;
