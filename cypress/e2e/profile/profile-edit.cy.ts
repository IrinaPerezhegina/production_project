describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            cy.visit(`/profile/${data.id}`);
        });
    });
    it('и редактирует его', () => {
        // cy.visit('https://example.cypress.io');
    });
});
