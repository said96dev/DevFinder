import { getRoom } from "@/data-access/room"
import { GithubIcon } from "lucide-react";
import { splitTags } from "@/lib/utils";
import { TagsList } from "@/components/tags-list";

import Link from "next/link";
async function RoomPage(props: { params: { roomId: string } }) {
    const roomId = props.params.roomId
    const room = await getRoom(roomId)
    if (!room) {
        return <div>No room of this ID found</div>;
    }
    return (
        <div className="grid grid-cols-4 min-h-screen ">
            <div className="col-span-3 p-4 pr-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm drop-shadow-lg bg-gray-100 p-4 ">
                    video
                </div>
            </div>
            <div className="col-span-1 p-4 pl-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
                    <h1 className="text-base">{room?.name}</h1>

                    {room.githubRepo && (
                        <Link
                            href={room.githubRepo}
                            className="flex items-center gap-2 text-center text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GithubIcon />
                            Github Project
                        </Link>
                    )}

                    <p className="text-base text-gray-600">{room?.description}</p>
                    <TagsList tags={splitTags(room.tags)} />

                </div>
            </div>
        </div>
    )
}

export default RoomPage