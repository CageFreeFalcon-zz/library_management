export const schema = {
  models: {
    UserNotification: {
      name: "UserNotification",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: []
        },
        title: {
          name: "title",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: []
        },
        subtitle: {
          name: "subtitle",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: []
        },
        content: {
          name: "content",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: []
        },
        link: {
          name: "link",
          isArray: false,
          type: "AWSURL",
          isRequired: true,
          attributes: []
        },
        username: {
          name: "username",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: []
        },
        status: {
          name: "status",
          isArray: false,
          type: {
            enum: "NotificationStatus"
          },
          isRequired: false,
          attributes: []
        }
      },
      syncable: true,
      pluralName: "UserNotifications",
      attributes: [
        {
          type: "model",
          properties: {}
        },
        {
          type: "key",
          properties: {
            name: "byUsername",
            fields: ["username"],
            queryField: "notificationByUser"
          }
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"]
              }
            ]
          }
        }
      ]
    },
    AdminNotification: {
      name: "AdminNotification",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: []
        },
        title: {
          name: "title",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: []
        },
        subtitle: {
          name: "subtitle",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: []
        },
        content: {
          name: "content",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: []
        },
        link: {
          name: "link",
          isArray: false,
          type: "AWSURL",
          isRequired: true,
          attributes: []
        },
        status: {
          name: "status",
          isArray: false,
          type: {
            enum: "NotificationStatus"
          },
          isRequired: false,
          attributes: []
        }
      },
      syncable: true,
      pluralName: "AdminNotifications",
      attributes: [
        {
          type: "model",
          properties: {}
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"]
              }
            ]
          }
        }
      ]
    },
    Book: {
      name: "Book",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: []
        },
        isbn: {
          name: "isbn",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: []
        },
        title: {
          name: "title",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: []
        },
        subject: {
          name: "subject",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: []
        },
        publisher: {
          name: "publisher",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: []
        },
        language: {
          name: "language",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: []
        },
        edition: {
          name: "edition",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: []
        },
        copies_present: {
          name: "copies_present",
          isArray: false,
          type: "Int",
          isRequired: false,
          attributes: []
        },
        copies_issued: {
          name: "copies_issued",
          isArray: false,
          type: "Int",
          isRequired: false,
          attributes: []
        },
        BookItems: {
          name: "BookItems",
          isArray: true,
          type: {
            model: "BookItem"
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "bookID"
          }
        },
        Authors: {
          name: "Authors",
          isArray: true,
          type: {
            model: "BookAuthor"
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "book"
          }
        }
      },
      syncable: true,
      pluralName: "Books",
      attributes: [
        {
          type: "model",
          properties: {}
        },
        {
          type: "searchable",
          properties: {
            queries: {
              search: "searchBook"
            }
          }
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"]
              }
            ]
          }
        }
      ]
    },
    BookItem: {
      name: "BookItem",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: []
        },
        status: {
          name: "status",
          isArray: false,
          type: {
            enum: "BookStatus"
          },
          isRequired: true,
          attributes: []
        },
        Transactions: {
          name: "Transactions",
          isArray: true,
          type: {
            model: "Transaction"
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "bookitemID"
          }
        },
        rackID: {
          name: "rackID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: []
        },
        bookID: {
          name: "bookID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: []
        }
      },
      syncable: true,
      pluralName: "BookItems",
      attributes: [
        {
          type: "model",
          properties: {}
        },
        {
          type: "key",
          properties: {
            name: "byRack",
            fields: ["rackID"]
          }
        },
        {
          type: "key",
          properties: {
            name: "byBook",
            fields: ["bookID"]
          }
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"]
              }
            ]
          }
        }
      ]
    },
    Transaction: {
      name: "Transaction",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: []
        },
        Username: {
          name: "Username",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: []
        },
        due_date: {
          name: "due_date",
          isArray: false,
          type: "AWSDate",
          isRequired: true,
          attributes: []
        },
        fine: {
          name: "fine",
          isArray: false,
          type: "Int",
          isRequired: false,
          attributes: []
        },
        status: {
          name: "status",
          isArray: false,
          type: {
            enum: "TransactionStatus"
          },
          isRequired: true,
          attributes: []
        },
        bookitemID: {
          name: "bookitemID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: []
        }
      },
      syncable: true,
      pluralName: "Transactions",
      attributes: [
        {
          type: "model",
          properties: {}
        },
        {
          type: "key",
          properties: {
            name: "byUsername",
            fields: ["Username"],
            queryField: "transactionByUser"
          }
        },
        {
          type: "key",
          properties: {
            name: "byBookItem",
            fields: ["bookitemID"]
          }
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"]
              }
            ]
          }
        }
      ]
    },
    BookAuthor: {
      name: "BookAuthor",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: []
        },
        book: {
          name: "book",
          isArray: false,
          type: {
            model: "Book"
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetName: "bookID"
          }
        },
        author: {
          name: "author",
          isArray: false,
          type: {
            model: "Author"
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetName: "authorID"
          }
        }
      },
      syncable: true,
      pluralName: "BookAuthors",
      attributes: [
        {
          type: "model",
          properties: {}
        },
        {
          type: "key",
          properties: {
            name: "byBook",
            fields: ["bookID", "authorID"]
          }
        },
        {
          type: "key",
          properties: {
            name: "byAuthor",
            fields: ["authorID", "bookID"]
          }
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"]
              },
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"]
              }
            ]
          }
        }
      ]
    },
    Author: {
      name: "Author",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: []
        },
        name: {
          name: "name",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: []
        },
        books: {
          name: "books",
          isArray: true,
          type: {
            model: "BookAuthor"
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "author"
          }
        }
      },
      syncable: true,
      pluralName: "Authors",
      attributes: [
        {
          type: "model",
          properties: {}
        },
        {
          type: "searchable",
          properties: {
            queries: {
              search: "searchAuthor"
            }
          }
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"]
              }
            ]
          }
        }
      ]
    },
    Rack: {
      name: "Rack",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: []
        },
        BookItems: {
          name: "BookItems",
          isArray: true,
          type: {
            model: "BookItem"
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "rackID"
          }
        }
      },
      syncable: true,
      pluralName: "Racks",
      attributes: [
        {
          type: "model",
          properties: {}
        },
        {
          type: "searchable",
          properties: {
            queries: {
              search: "searchRack"
            }
          }
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"]
              }
            ]
          }
        }
      ]
    },
    Barcode: {
      name: "Barcode",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: []
        },
        status: {
          name: "status",
          isArray: false,
          type: {
            enum: "BarcodeStatus"
          },
          isRequired: true,
          attributes: []
        },
        book: {
          name: "book",
          isArray: false,
          type: {
            model: "BookItem"
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetName: "bookItemID"
          }
        }
      },
      syncable: true,
      pluralName: "Barcodes",
      attributes: [
        {
          type: "model",
          properties: {}
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"]
              }
            ]
          }
        }
      ]
    }
  },
  enums: {
    NotificationStatus: {
      name: "NotificationStatus",
      values: ["READ", "UNREAD"]
    },
    BookStatus: {
      name: "BookStatus",
      values: ["ISSUED", "NOTISSUED", "LOST"]
    },
    TransactionStatus: {
      name: "TransactionStatus",
      values: ["ISSUED", "RETURNED"]
    },
    BarcodeStatus: {
      name: "BarcodeStatus",
      values: ["USED", "UNUSED"]
    }
  },
  nonModels: {},
  version: "6b847a3eea2eac3ba2da38b99c3e6ed0"
};
