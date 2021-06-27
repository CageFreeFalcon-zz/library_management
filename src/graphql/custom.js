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
      Authors {
        items {
          author {
            id
            name
          }
        }
      }
    }
  }
`;
export const getBarcodeCustom = /* GraphQL */ `
  query GetBarcode($id: ID!) {
    getBarcode(id: $id) {
      id
      status
      bookitem {
        book {
          id
          title
          subject
          publisher
          language
          edition
          copies_present
          copies_issued
        }
      }
    }
  }
`;
