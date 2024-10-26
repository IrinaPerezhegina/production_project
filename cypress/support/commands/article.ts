import { Article } from '../../../src/entities/Article/model/types/article';

const defaultArticle = {
    title: 'Test article',
    subtitle: 'Test',
    img: 'https://d3mxt5v3yxgcsr.cloudfront.net/courses/15007/course_15007_image.png',
    views: 100,
    createdAt: '26.02.2015',
    userId: '1',
    type: ['TEST'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { Authorization: 'aaa' },
        body: article ?? defaultArticle,
    }).then((resp) => resp.body);
};

export const removeArticle = (articleId:string) => cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'aaa' },
});

declare global {
    namespace Cypress {
      interface Chainable {
        createArticle(article?: Article): Chainable<Article>
        removeArticle(articleId:string): Chainable<void>

      }
    }
  }
