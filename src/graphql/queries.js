/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserNotification = /* GraphQL */ `
  query GetUserNotification($id: ID!) {
    getUserNotification(id: $id) {
      id
      title
      subtitle
      content
      username
      status
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
        username
        status
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
        username
        status
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
      title
      subtitle
      content
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
        title
        subtitle
        content
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
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
        title
        subtitle
        content
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
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
      title
      subject
      publisher
      language
      edition
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
          status
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
        title
        subject
        publisher
        language
        edition
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
        title
        subject
        publisher
        language
        edition
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
      status
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
          Username
          due_date
          fine
          status
          bookitemID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
          username
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
        status
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
        status
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
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      BookItems {
        items {
          id
          status
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
        name
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
        name
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
      status
      bookItemID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      book {
        id
        status
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
        status
        bookItemID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        book {
          id
          status
          rackID
          bookID
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
        status
        bookItemID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        book {
          id
          status
          rackID
          bookID
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
      Username
      due_date
      fine
      status
      bookitemID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      username
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
        Username
        due_date
        fine
        status
        bookitemID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        username
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
        Username
        due_date
        fine
        status
        bookitemID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        username
      }
      nextToken
      startedAt
    }
  }
`;
export const getBookAuthor = /* GraphQL */ `
  query GetBookAuthor($id: ID!) {
    getBookAuthor(id: $id) {
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
        title
        subject
        publisher
        language
        edition
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
      author {
        id
        name
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
    }
  }
`;
export const listBookAuthors = /* GraphQL */ `
  query ListBookAuthors(
    $filter: ModelBookAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          title
          subject
          publisher
          language
          edition
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
          title
          subject
          publisher
          language
          edition
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
