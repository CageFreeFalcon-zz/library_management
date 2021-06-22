/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserNotification = /* GraphQL */ `
  subscription OnCreateUserNotification {
    onCreateUserNotification {
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
    }
  }
`;
export const onUpdateUserNotification = /* GraphQL */ `
  subscription OnUpdateUserNotification {
    onUpdateUserNotification {
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
    }
  }
`;
export const onDeleteUserNotification = /* GraphQL */ `
  subscription OnDeleteUserNotification {
    onDeleteUserNotification {
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
    }
  }
`;
export const onCreateAdminNotification = /* GraphQL */ `
  subscription OnCreateAdminNotification {
    onCreateAdminNotification {
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
    }
  }
`;
export const onUpdateAdminNotification = /* GraphQL */ `
  subscription OnUpdateAdminNotification {
    onUpdateAdminNotification {
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
    }
  }
`;
export const onDeleteAdminNotification = /* GraphQL */ `
  subscription OnDeleteAdminNotification {
    onDeleteAdminNotification {
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
    }
  }
`;
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook {
    onCreateBook {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook {
    onUpdateBook {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook {
    onDeleteBook {
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
export const onCreateBookItem = /* GraphQL */ `
  subscription OnCreateBookItem {
    onCreateBookItem {
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
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateBookItem = /* GraphQL */ `
  subscription OnUpdateBookItem {
    onUpdateBookItem {
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
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteBookItem = /* GraphQL */ `
  subscription OnDeleteBookItem {
    onDeleteBookItem {
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
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateRack = /* GraphQL */ `
  subscription OnCreateRack {
    onCreateRack {
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
export const onUpdateRack = /* GraphQL */ `
  subscription OnUpdateRack {
    onUpdateRack {
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
export const onDeleteRack = /* GraphQL */ `
  subscription OnDeleteRack {
    onDeleteRack {
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
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor {
    onCreateAuthor {
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
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor {
    onUpdateAuthor {
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
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor {
    onDeleteAuthor {
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
export const onCreateBarcode = /* GraphQL */ `
  subscription OnCreateBarcode {
    onCreateBarcode {
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
export const onUpdateBarcode = /* GraphQL */ `
  subscription OnUpdateBarcode {
    onUpdateBarcode {
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
export const onDeleteBarcode = /* GraphQL */ `
  subscription OnDeleteBarcode {
    onDeleteBarcode {
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
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
    }
  }
`;
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
    }
  }
`;
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
    }
  }
`;
export const onCreateBookAuthor = /* GraphQL */ `
  subscription OnCreateBookAuthor {
    onCreateBookAuthor {
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
export const onUpdateBookAuthor = /* GraphQL */ `
  subscription OnUpdateBookAuthor {
    onUpdateBookAuthor {
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
export const onDeleteBookAuthor = /* GraphQL */ `
  subscription OnDeleteBookAuthor {
    onDeleteBookAuthor {
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
