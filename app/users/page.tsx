import { User, columns } from './columns'
import { DataTable } from '@/components/data-table'

async function getUsers(): Promise<User[]> {
  const res = await fetch(
    'https://665621609f970b3b36c4625e.mockapi.io/users'
  )
  const data = await res.json()
  return data
}

export default async function Page() {
  const data = await getUsers()

  return(
    <section className='py-24'>
      <div className='container'>
        <h1 className='mb-6 text-3xl font-bold'> 
          All Users
        </h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  )
}