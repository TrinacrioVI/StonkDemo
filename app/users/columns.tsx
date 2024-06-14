'use client'

import { ColumnDef } from '@tanstack/react-table'

export type User = {
    id:string 
    name: string
    email: string
    image: string
    lastSeen: string
    
}


export const columns: ColumnDef<User>[] = [
    {
        accessorKey: 'name',
        header: 'Name'
    },
    {
        accessorKey: 'email',
        header: 'Email'
    },
    {
        accessorKey: 'lastSeen',
        header: 'Last Seen'
    }
]