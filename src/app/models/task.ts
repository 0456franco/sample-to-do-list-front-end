import { Project } from "./project"
import { User } from "./user"

export class Task implements I_Task {

    id: number | null = null
    user_id: number | null = null
    name: string | null = null
    estimated_hours: number = 0

    user_list: Array<User> = []
    project: Project = new Project()

}

interface I_Task {

    id: number | null
    user_id: number | null
    name: string | null
    estimated_hours: number | null

    user_list: Array<User>
    project: Project

}