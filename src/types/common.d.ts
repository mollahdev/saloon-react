import { ROLES } from "types/enum"

export interface PageProps {
    menu?: {},
    title: string,
    location: object
}

export interface UserInterface {
    login   : boolean,
    role    : ROLES.ADMIN | ROLES.EDITOR | ROLES.VIEWER,
    image   : string,
    name    : string,
}