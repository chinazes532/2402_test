const BASE_URL = 'http://localhost:3000';

describe("Первый тест", () => {
    beforeEach(() => {
        cy.visit(BASE_URL);
    })
    
    it("Заголовок", () => {
        cy.get('h1').contains('Первый тест')
    })
})