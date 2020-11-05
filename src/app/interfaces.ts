interface Player {
    firstname : string;
    lastname : string;
    age : number; // optional key
    position : string;
    teamid: number 
}

interface Todo {
    userId: number, 
    id: number, 
    title: string, 
    completed: boolean
}

export { Player }
export { Todo }