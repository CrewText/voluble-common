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
    VolubleAdmin = "voluble:admin",
}
export interface Contact {
    first_name: string;
    surname: string;
    email_address: string;
    phone_number: string;
    ServicechainId?: string;
    OrganizationId?: string;
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
