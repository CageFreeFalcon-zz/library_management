// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const NotificationStatus = {
  READ: "READ",
  UNREAD: "UNREAD"
};

const BookStatus = {
  ISSUED: "ISSUED",
  NOTISSUED: "NOTISSUED",
  LOST: "LOST"
};

const TransactionStatus = {
  ISSUED: "ISSUED",
  RETURNED: "RETURNED"
};

const BarcodeStatus = {
  USED: "USED",
  UNUSED: "UNUSED"
};

const {
  UserNotification,
  AdminNotification,
  Book,
  BookItem,
  Transaction,
  BookAuthor,
  Author,
  Rack,
  Barcode
} = initSchema(schema);

export {
  UserNotification,
  AdminNotification,
  Book,
  BookItem,
  Transaction,
  BookAuthor,
  Author,
  Rack,
  Barcode,
  NotificationStatus,
  BookStatus,
  TransactionStatus,
  BarcodeStatus
};
