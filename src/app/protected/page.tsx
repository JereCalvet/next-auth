import { send, sendToAll } from "@/src/lib/actions/firebase-messaging";
import initAdmin from "@/src/lib/firebase-admin-sdk";

export default async function Page() {
    await initAdmin();
    //send();
    //sendToAll();
    return <div>Protected - Sending MSG</div>;
}