export class User implements I_User {

    id: number | null = null
    username: string | null = null
    slug: string | null = null

}

interface I_User{
    
    id: number | null
    username: string | null
    slug: string | null
    
}