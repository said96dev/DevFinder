import { db } from "@/db/index"
export default async function Home() {
  const room = await db.query.room.findMany()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        room.map((room) => (
          <div key={room.id}>
            <h1>{room.id}</h1>
            <h1>{room.name}</h1>
            <p>{room.description}</p>
            <p>{room.githubRepo}</p>
            <p>{room.tags}</p>
          </div>
        ))
      }
    </main>
  );
}
