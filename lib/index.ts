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
    CreditsUpdate = "credits:update",
    VolubleAdmin = "voluble:admin"
}

export enum MessageStates {
    MSG_PENDING = "MSG_PENDING",
    MSG_SENDING = "MSG_SENDING",
    MSG_DELIVERED_SERVICE = "MSG_DELIVERED_SERVICE",
    MSG_DELIVERED_USER = "MSG_DELIVERED_USER",
    MSG_READ = "MSG_READ",
    MSG_REPLIED = "MSG_REPLIED",
    MSG_FAILED = "MSG_FAILED",
    MSG_ARRIVED = "MSG_ARRIVED"
}

export interface SequelizeModel {
    readonly updatedAt: Date
    readonly createdAt: Date
}

export enum MessageDirections {
    INBOUND = "INBOUND",
    OUTBOUND = "OUTBOUND"
}

export enum PlanTypes {
    PAYG = "PAYG",
    PAY_IN_ADVANCE = "PAY_IN_ADVANCE"
}

export interface Contact extends SequelizeModel {
    title: string,
    first_name: string,
    surname: string,
    email_address: string,
    phone_number: string,
    servicechain: string,
    organization?: string
    category?: string
    id: string,
}

export interface Category extends SequelizeModel {
    id: string
    organization?: string
    name: string
}

export interface Message extends SequelizeModel {
    id: string
    body: string
    servicechain: string,
    contact: string
    user?: string
    is_reply_to?: string | null | undefined
    direction: MessageDirections,
    sent_time?: Date,
    message_state: MessageStates,
    cost: number
}

export interface Org extends SequelizeModel {
    id: string,
    name: string,
    phone_number: string
    credits?: number
    plan: PlanTypes
}

export interface Service extends SequelizeModel {
    id: string,

    name: string,
    directory_name: string,
}

export interface Servicechain extends SequelizeModel {
    id: string,
    name: string,
    organization?: string
}

export interface ServicesInSC extends SequelizeModel {
    id: string,
    servicechain: string,
    service: string,
    priority: number
}

export interface User extends SequelizeModel {
    id: string,
    organization?: string,
}

export interface Blast extends SequelizeModel {
    id: string,
    name: string
}