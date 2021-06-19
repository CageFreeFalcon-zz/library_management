/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserNotification = /* GraphQL */ `
  subscription OnCreateUserNotification($owner: String) {
    onCreateUserNotification(owner: $owner) {
      id
      title
      subtitle
      content
      link
      username
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
export const onUpdateUserNotification = /* GraphQL */ `
  subscription OnUpdateUserNotification($owner: String) {
    onUpdateUserNotification(owner: $owner) {
      id
      title
      subtitle
      content
      link
      username
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
export const onDeleteUserNotification = /* GraphQL */ `
  subscription OnDeleteUserNotification($owner: String) {
    onDeleteUserNotification(owner: $owner) {
      id
      title
      subtitle
      content
      link
      username
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
export const onCreateAdminNotification = /* GraphQL */ `
  subscription OnCreateAdminNotification($owner: String) {
    onCreateAdminNotification(owner: $owner) {
      id
      title
      subtitle
      content
      link
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
export const onUpdateAdminNotification = /* GraphQL */ `
  subscription OnUpdateAdminNotification($owner: String) {
    onUpdateAdminNotification(owner: $owner) {
      id
      title
      subtitle
      content
      link
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
export const onDeleteAdminNotification = /* GraphQL */ `
  subscription OnDeleteAdminNotification($owner: String) {
    onDeleteAdminNotification(owner: $owner) {
      id
      title
      subtitle
      content
      link
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
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook($owner: String) {
    onCreateBook(owner: $owner) {
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
      owner
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
          owner
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
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook($owner: String) {
    onUpdateBook(owner: $owner) {
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
      owner
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
          owner
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
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook($owner: String) {
    onDeleteBook(owner: $owner) {
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
      owner
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
          owner
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
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateBookItem = /* GraphQL */ `
  subscription OnCreateBookItem($owner: String) {
    onCreateBookItem(owner: $owner) {
      id
      status
      rackID
      bookID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateBookItem = /* GraphQL */ `
  subscription OnUpdateBookItem($owner: String) {
    onUpdateBookItem(owner: $owner) {
      id
      status
      rackID
      bookID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteBookItem = /* GraphQL */ `
  subscription OnDeleteBookItem($owner: String) {
    onDeleteBookItem(owner: $owner) {
      id
      status
      rackID
      bookID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateRack = /* GraphQL */ `
  subscription OnCreateRack($owner: String) {
    onCreateRack(owner: $owner) {
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
          owner
        }
        nextToken
        startedAt
      }
      owner
    }
  }
`;
export const onUpdateRack = /* GraphQL */ `
  subscription OnUpdateRack($owner: String) {
    onUpdateRack(owner: $owner) {
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
          owner
        }
        nextToken
        startedAt
      }
      owner
    }
  }
`;
export const onDeleteRack = /* GraphQL */ `
  subscription OnDeleteRack($owner: String) {
    onDeleteRack(owner: $owner) {
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
          owner
        }
        nextToken
        startedAt
      }
      owner
    }
  }
`;
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor($owner: String) {
    onCreateAuthor(owner: $owner) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor($owner: String) {
    onUpdateAuthor(owner: $owner) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor($owner: String) {
    onDeleteAuthor(owner: $owner) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
          owner
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateBarcode = /* GraphQL */ `
  subscription OnCreateBarcode($owner: String) {
    onCreateBarcode(owner: $owner) {
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
        owner
        Transactions {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onUpdateBarcode = /* GraphQL */ `
  subscription OnUpdateBarcode($owner: String) {
    onUpdateBarcode(owner: $owner) {
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
        owner
        Transactions {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onDeleteBarcode = /* GraphQL */ `
  subscription OnDeleteBarcode($owner: String) {
    onDeleteBarcode(owner: $owner) {
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
        owner
        Transactions {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction($owner: String) {
    onCreateTransaction(owner: $owner) {
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
    }
  }
`;
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction($owner: String) {
    onUpdateTransaction(owner: $owner) {
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
    }
  }
`;
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction($owner: String) {
    onDeleteTransaction(owner: $owner) {
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
    }
  }
`;
export const onCreateBookAuthor = /* GraphQL */ `
  subscription OnCreateBookAuthor($owner: String) {
    onCreateBookAuthor(owner: $owner) {
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
        owner
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
        owner
        books {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onUpdateBookAuthor = /* GraphQL */ `
  subscription OnUpdateBookAuthor($owner: String) {
    onUpdateBookAuthor(owner: $owner) {
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
        owner
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
        owner
        books {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
export const onDeleteBookAuthor = /* GraphQL */ `
  subscription OnDeleteBookAuthor($owner: String) {
    onDeleteBookAuthor(owner: $owner) {
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
        owner
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
        owner
        books {
          nextToken
          startedAt
        }
      }
      owner
    }
  }
`;
