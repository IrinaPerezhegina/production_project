describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('/articles');
        });
    });
    it('и  статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it('На стабах(фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'article-list.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it('и  сортирует по названию', () => {
        cy.getByTestId('ArticleSortSelector').should('exist');
        cy.get(':nth-child(1) > .src-shared-ui-Select-Select-module__select--VOKOu')
            .select('названию');
    });
    it.skip('пример заскипанного теста', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('авав').should('exist');
    });
});
