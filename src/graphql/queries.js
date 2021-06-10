/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserNotification = /* GraphQL */ `
  query GetUserNotification($id: ID!) {
    getUserNotification(id: $id) {
      id
      title
      subtitle
      content
      img_path
      userna
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listUserNotifications = /* GraphQL */ `
  query ListUserNotifications(
    $filter: ModelUserNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        subtitle
        content
        img_path
        userna
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserNotifications = /* GraphQL */ `
  query SyncUserNotifications(
    $filter: ModelUserNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        subtitle
        content
        img_path
        userna
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAdminNotification = /* GraphQL */ `
  query GetAdminNotification($id: ID!) {
    getAdminNotification(id: $id) {
      id
      type
      title
      subtitle
      content
      data
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listAdminNotifications = /* GraphQL */ `
  query ListAdminNotifications(
    $filter: ModelAdminNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdminNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        title
        subtitle
        content
        data
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAdminNotifications = /* GraphQL */ `
  query SyncAdminNotifications(
    $filter: ModelAdminNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAdminNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        title
        subtitle
        content
        data
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      isbn
      title
      subject
      publisher
      language
      edition
      no_of_pages
      copies_present
      copies_issued
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      BookItems {
        items {
          id
          price
          status
          added_on
          rackID
          bookID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Authors {
        items {
          id
          bookID
          authorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isbn
        title
        subject
        publisher
        language
        edition
        no_of_pages
        copies_present
        copies_issued
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        BookItems {
          nextToken
          startedAt
        }
        Authors {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const searchBooks = /* GraphQL */ `
  query SearchBooks(
    $filter: SearchableBookFilterInput
    $sort: SearchableBookSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchBooks(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        isbn
        title
        subject
        publisher
        language
        edition
        no_of_pages
        copies_present
        copies_issued
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        BookItems {
          nextToken
          startedAt
        }
        Authors {
          nextToken
          startedAt
        }
      }
      nextToken
      total
    }
  }
`;
export const syncBooks = /* GraphQL */ `
  query SyncBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBooks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        isbn
        title
        subject
        publisher
        language
        edition
        no_of_pages
        copies_present
        copies_issued
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        BookItems {
          nextToken
          startedAt
        }
        Authors {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getBookItem = /* GraphQL */ `
  query GetBookItem($id: ID!) {
    getBookItem(id: $id) {
      id
      price
      status
      added_on
      rackID
      bookID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        items {
          id
          issue_date
          due_date
          status
          bookitemID
          Username
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listBookItems = /* GraphQL */ `
  query ListBookItems(
    $filter: ModelBookItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        price
        status
        added_on
        rackID
        bookID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Transactions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBookItems = /* GraphQL */ `
  query SyncBookItems(
    $filter: ModelBookItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBookItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        price
        status
        added_on
        rackID
        bookID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Transactions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getRack = /* GraphQL */ `
  query GetRack($id: ID!) {
    getRack(id: $id) {
      id
      number
      location
      recently_used
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      BookItems {
        items {
          id
          price
          status
          added_on
          rackID
          bookID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listRacks = /* GraphQL */ `
  query ListRacks(
    $filter: ModelRackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        number
        location
        recently_used
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        BookItems {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRacks = /* GraphQL */ `
  query SyncRacks(
    $filter: ModelRackFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRacks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        number
        location
        recently_used
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        BookItems {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      books {
        items {
          id
          bookID
          authorID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        books {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAuthors = /* GraphQL */ `
  query SyncAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuthors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        books {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getBarcode = /* GraphQL */ `
  query GetBarcode($id: ID!) {
    getBarcode(id: $id) {
      id
      code
      status
      created_at
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Book {
        id
        isbn
        title
        subject
        publisher
        language
        edition
        no_of_pages
        copies_present
        copies_issued
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        BookItems {
          nextToken
          startedAt
        }
        Authors {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listBarcodes = /* GraphQL */ `
  query ListBarcodes(
    $filter: ModelBarcodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBarcodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        status
        created_at
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Book {
          id
          isbn
          title
          subject
          publisher
          language
          edition
          no_of_pages
          copies_present
          copies_issued
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBarcodes = /* GraphQL */ `
  query SyncBarcodes(
    $filter: ModelBarcodeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBarcodes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        code
        status
        created_at
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Book {
          id
          isbn
          title
          subject
          publisher
          language
          edition
          no_of_pages
          copies_present
          copies_issued
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      issue_date
      due_date
      status
      bookitemID
      Username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        issue_date
        due_date
        status
        bookitemID
        Username
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTransactions = /* GraphQL */ `
  query SyncTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        issue_date
        due_date
        status
        bookitemID
        Username
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBookAuthors = /* GraphQL */ `
  query SyncBookAuthors(
    $filter: ModelBookAuthorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBookAuthors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        bookID
        authorID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        book {
          id
          isbn
          title
          subject
          publisher
          language
          edition
          no_of_pages
          copies_present
          copies_issued
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        author {
          id
          name
          description
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
