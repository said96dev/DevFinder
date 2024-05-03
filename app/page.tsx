import { db } from "@/db/index"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Room } from "@/db/schema"
import { GithubIcon } from "lucide-react";
import { getRooms } from "@/data-access/room"

function RoomCard({ room }: { room: Room }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {room.githubRepo && (
          <Link
            href={room.githubRepo}
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            Github Project
          </Link>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}


export default async function Home() {
  const room = await getRooms()
  return (
    <main className=" min-h-screen  p-16">
      <div className="mb-8 items-center flex justify-between w-full">
        <h1 className="text-4xl">Find Dev Rooms </h1>
        <Button asChild>
          <Link href="/create-room">
            Create Room
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {
          room.map((room) => (

            <RoomCard room={room} key={room.id} />

          ))
        }

      </div>
    </main>
  );
}
