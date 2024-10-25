let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`/articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
        cy.visit(`/articles/${currentArticleId}`);
    });
    // Создали статью, текстируем и удаляем
    it('и видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
});
