import { Outlet } from "react-router-dom";

import { Card } from "@/components/ui/card";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";

export default function Root() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Card className="text-sm max-w-6xl mx-auto mt-5 min-h-[90%] flex flex-col justify-between">
                <div>
                    <Header />
                    <Outlet />
                </div>
                <footer className="mx-5 pb-5 text-foreground/60 font-thin text-center">
                    &copy; 2019-2024 哪吒监控
                </footer>
            </Card>
            <Toaster />
        </ThemeProvider>
    );
}