export enum scopes {
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

export interface Contact {
    first_name: string,
    surname: string,
    email_address: string,
    phone_number: string,
    ServicechainId?: string,
    OrganizationId?: string
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
}

export interface Message {
    body: string
    ServicechainId: string,
    contact: string
    is_reply_to?: string | null | undefined
    direction: string,
    sent_time?: Date,
    message_state: string
}

export interface Org {
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,

    name: string,
    phone_number: string
}

export interface Service {
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,

    name: string,
    directory_name: string,
}

export interface Servicechain {
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    name: string,
    OrganizationId?: string
}

export interface ServicesInSC {
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    servicechainId: string,
    serviceId: string,
    priority: number
}

export interface User {
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    OrganizationId?: string,
    auth0_id: string,
}

export interface Blast {
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    name: string
}