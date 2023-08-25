import accountAuth from "./account/auth.json";
import account from "./account/index.json";
import accountPeople from "./account/people.json";
import onlineStoreAdmin from "./onlineStore/admin.json";
import onlineStoreCommon from "./onlineStore/common.json";
import onlineStore from "./onlineStore/index.json";

export const categories = [accountAuth, accountPeople];

const accountNamespace = account as any;

accountNamespace.categories = [accountAuth, accountPeople];

const onlineStoreNamespace = onlineStore as any;

onlineStoreNamespace.categories = [onlineStoreCommon, onlineStoreAdmin];

export const namespaces = [accountNamespace, onlineStoreNamespace];
