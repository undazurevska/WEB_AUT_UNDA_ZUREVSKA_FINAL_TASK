import FormPage from "../pageObjects/Form.Page";

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    FormPage.firstName.type("test");
    FormPage.lastName.type("test");
    FormPage.email.type("test@test.com");
    FormPage.genderButton.click({force: true});
    FormPage.number.type("1111111111");
    FormPage.dateOfBirthFieldOpening.click();
    FormPage.monthSelect.select("February");
    FormPage.yearSelect.select("1930");
    FormPage.dateSelect.eq(1).click();
    FormPage.subjectField.type("Eco");
    FormPage.autoSubjectSelect.click();
    FormPage.hobbiesCheck.click({force: true});
    FormPage.uploadFile.selectFile({
      contents: Cypress.Buffer.from('./files'),
      fileName: 'img.jpg',
      mimeType: 'text/plain',
      lastModified: Date.now(),
    })
    FormPage.currentAddress.type("test test");
    FormPage.stateSelect.click({force: true});
    FormPage.stateSelectValue.should('be.visible').eq(0).click({force: true} ).type('NCR{enter}');
    FormPage.citySelect.click({force: true});
    FormPage.citySelectValue.should('be.visible').eq(0).click({force: true} ).type('Delhi{enter}');
    FormPage.submitBtn.click({force: true});
    // Assuming you are on the success page or the page displaying the submitted information
    cy.contains('Student Name').next().should("contain.text", "test test");
    cy.contains('Student Email').next().should("contain.text", "test@test.com");
    cy.contains('Gender').next().should("contain.text", "Other");
    cy.contains('Mobile').next().should("contain.text", "1111111111");
    cy.contains('Date of Birth').next().should("contain.text", "28 February, 1930");
    cy.contains('Subjects').next().should("contain.text", "Economics");
    cy.contains('Hobbies').next().should("contain.text", "Music");
    cy.contains('Picture').next().should("contain.text", "img.jpg");
    cy.contains('Address').next().should("contain.text", "test test");
    cy.contains('State and City').next().should("contain.text", "NCR Delhi");
  })
})