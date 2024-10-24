export const updateProfile = (firstname:string, lastname:string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId:string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'aaa' },
    body: {
        id: '4',
        first: 'Test',
        lastname: 'Test',
        age: 25,
        currency: 'RUB',
        country: 'Belarus',
        city: 'Moskow',
        username: 'testuser',
        avatar: 'https://papik.pro/grafic/uploads/posts/2023-04'
        + '/1682609980_papik-pro-p-smail-podderzhka-kartinka-png-46.png',
    },
});

declare global {
    namespace Cypress {
      interface Chainable {
        updateProfile(firstname:string, lastname:string): Chainable<void>
        resetProfile(profileId:string): Chainable<void>

      }
    }
  }
