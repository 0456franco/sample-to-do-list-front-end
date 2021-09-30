export class Project implements I_Project{
    
    id: number | null = null
    name: string | null = null
    estimatedHours: number | null = null
    slug: string | null = null

}

interface I_Project{

    id: number | null
    name: string | null
    estimatedHours: number | null
    slug: string | null

}