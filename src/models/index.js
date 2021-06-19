// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const NotificationStatus = {
  UNREAD: "UNREAD",
  READ: "READ"
};

const BookStatus = {
  NOTISSUED: "NOTISSUED",
  ISSUED: "ISSUED",
  LOST: "LOST"
};

const TransactionStatus = {
  ISSUED: "ISSUED",
  RETURNED: "RETURNED"
};

const BarcodeStatus = {
  UNUSED: "UNUSED",
  USED: "USED"
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
