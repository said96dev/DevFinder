import { db } from "@/db/index"
export default async function Home() {
  const room = await db.query.room.findMany()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        room.map((room) => (
          <div key={room.id}>
            <h1>{room.id}</h1>
          </div>
        ))
      }
    </main>
  );
}
