import Image from "next/image";
import Link from "next/link";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@workspace/ui/components/sidebar";

import { Nav } from "./nav";
import { UserDropdown } from "./user-dropdown";
import { getCurrentUser } from "@/queries";

export async function AppSidebar({
    ...props
}: React.ComponentProps<typeof Sidebar>) {
    const user = await getCurrentUser();

    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <Image
                                        src={`/toust-icon.png`}
                                        alt="Toust Icon"
                                        width={124}
                                        height={124}
                                        className="size-8"
                                    />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">
                                        TOUST
                                    </span>
                                    <span className="truncate text-xs">
                                        open-source
                                    </span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <Nav />
            </SidebarContent>
            <SidebarFooter>
                <UserDropdown
                    user={{
                        email: user!.email,
                        avatar: user!.image!,
                        name: user!.name!,
                    }}
                />
            </SidebarFooter>
        </Sidebar>
    );
}
