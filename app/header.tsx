"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteIcon, LogInIcon, LogOutIcon } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useState } from "react";

function AccountDropdown() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently remove your
                            account and any data your have.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction

                        >
                            Yes, delete my account
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"link"}>
                        <Avatar className="mr-2">
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem

                    >
                        <LogOutIcon className="mr-2" /> Sign Out
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        <DeleteIcon className="mr-2" /> Delete Account
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}

export function Header() {

    return (
        <header className="bg-gray-100 py-2 dark:bg-gray-900 z-10 relative">
            <div className="container mx-auto flex justify-between items-center">
                <Link
                    href="/"
                    className="flex gap-2 items-center text-xl hover:underline"
                >
                    DevFinder
                </Link>

                <nav className="flex gap-8">

                    <>
                        <Link className="hover:underline" href="/browse">
                            Browse
                        </Link>

                        <Link className="hover:underline" href="/your-rooms">
                            Your Rooms
                        </Link>
                    </>

                </nav>

                <div className="flex items-center gap-4">
                    <AccountDropdown />

                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}