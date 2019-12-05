export declare enum scopes {
    ContactAdd = "contact:add",
    ContactView = "contact:view",
    ContactEdit = "contact:edit",
    ContactDelete = "contact:delete",
    MessageRead = "message:read",
    MessageSend = "message:send",
    BlastSend = "blast:send",
    UserAdd = "user:add",
    UserEdit = "user:edit",
    UserDelete = "user:delete",
    UserView = "user:view",
    OrganizationEdit = "organization:edit",
    OrganizationDelete = "organization:delete",
    OrganizationOwner = "organization:owner",
    ServiceView = "service:view",
    ServicechainView = "servicechain:view",
    ServicechainAdd = "servicechain:add",
    ServicechainDelete = "servicechain:delete",
    ServicechainEdit = "servicechain:edit",
    VolubleAdmin = "voluble:admin"
}
export declare enum MessageStates {
    MSG_PENDING = "MSG_PENDING",
    MSG_SENDING = "MSG_SENDING",
    MSG_DELIVERED_SERVICE = "MSG_DELIVERED_SERVICE",
    MSG_DELIVERED_USER = "MSG_DELIVERED_USER",
    MSG_READ = "MSG_READ",
    MSG_REPLIED = "MSG_REPLIED",
    MSG_FAILED = "MSG_FAILED",
    MSG_ARRIVED = "MSG_ARRIVED"
}
export declare enum MessageDirections {
    INBOUND = "INBOUND",
    OUTBOUND = "OUTBOUND"
}
export interface Contact {
    title: string;
    first_name: string;
    surname: string;
    email_address: string;
    phone_number: string;
    ServicechainId?: string;
    OrganizationId?: string;
    CategoryId?: string;
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface Category {
    id?: string;
    OrganizationId?: string;
    name: string;
}
export interface Message {
    id?: string;
    body: string;
    ServicechainId: string;
    contact: string;
    is_reply_to?: string | null | undefined;
    direction: MessageDirections;
    sent_time?: Date;
    message_state: MessageStates;
}
export interface Org {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    name: string;
    phone_number: string;
}
export interface Service {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    name: string;
    directory_name: string;
}
export interface Servicechain {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    name: string;
    OrganizationId?: string;
}
export interface ServicesInSC {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    servicechain: string;
    service: string;
    priority: number;
}
export interface User {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    OrganizationId?: string;
    auth0_id: string;
}
export interface Blast {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    name: string;
}
