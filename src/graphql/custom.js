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
      bookItem {
        id
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
        Transactions(filter: { status: { eq: ISSUED } }) {
          items {
            id
            username
            due_date
            fine
            status
            bookitemID
          }
        }
      }
    }
  }
`;
export const searchBookCustom = /* GraphQL */ `
  query SearchBook(
    $filter: SearchableBookFilterInput
    $sort: SearchableBookSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchBook(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
        BookItems {
          nextToken
        }
        Authors {
          items {
            author {
              id
              name
            }
          }
        }
      }
      nextToken
      total
    }
  }
`;
