import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useMedia } from "react-use";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
interface ResponsiveModalProps {
    children: React.ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const ResponsiveModal = ({
    children,
    open,
    onOpenChange,
}: ResponsiveModalProps) => {
    const isDesktop = useMedia("(min-width: 1024px)", true);

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className="w-full sm:max-xlg p-0 border-none overflow-y-auto hide-scrollbar max-h-[86vh]">
                    {children}
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent>
                <DialogContent className=" overflow-y-auto hide-scrollbar max-h-[86vh]">
                    {children}
                </DialogContent>
            </DrawerContent>
        </Drawer>
    );
};
