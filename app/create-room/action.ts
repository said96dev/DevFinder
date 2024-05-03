"use server"
import { Room, room } from "@/db/schema";
import { db } from "@/db/index";
import { revalidatePath } from "next/cache";

export async function createRoomAction(roomData: Omit<Room, "id">) {
    await db.insert(room).values({ ...roomData });
    revalidatePath("/")
}
