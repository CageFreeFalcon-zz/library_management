export const getBookCustom = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      subject
      publisher
      language
      edition
      copies_present
      copies_issued
      createdAt
      updatedAt
      Authors {
        items {
          id
          bookID
          authorID
          author {
            id
            name
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
