let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
    describe('Работа с АПИ', () => {
        beforeEach(() => {
            cy.login();
            cy.createArticle().then((article) => {
                currentArticleId = article.id;
                cy.visit(`/articles/${article.id}`);
            });
        });
        afterEach(() => {
            cy.removeArticle(currentArticleId);
        });
    });
    describe('Работа с АПИ', () => {

    });
    describe('Работа на фикстурах', () => {

    });
    // Создали статью, текстируем и удаляем
    it('и видит содержимое статьи', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('и видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it('и оставляет комментарий', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('и ставит оценку статье', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
    it('и ставит оценку статье (пример со стабом на фикстурах )', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
