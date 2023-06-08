import { Newasdfghjkl as TNewasdfghjkl } from "../api/newasdfghjkl/Newasdfghjkl";

export const NEWASDFGHJKL_TITLE_FIELD = "name";

export const NewasdfghjklTitle = (record: TNewasdfghjkl): string => {
  return record.name || String(record.id);
};
