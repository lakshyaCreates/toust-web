import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { ensureUser } from "@/helpers/ensure-user";

import { AppSidebar } from "./_components/app-sidebar";

export default async function MainLayout({
    children,
    breadcrumbs,
}: {
    children: React.ReactNode;
    breadcrumbs: React.ReactNode;
}) {
    const userId = await ensureUser();

    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 h-4"
                            />
                            {breadcrumbs}
                        </div>
                    </header>
                    <div className="-mt-4 size-full p-4">
                        <div className="size-full">{children}</div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </>
    );
}
