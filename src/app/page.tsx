import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="">
            <Button>
                <Link href="/sign-in">Login</Link>
            </Button>
        </div>
    );
}
