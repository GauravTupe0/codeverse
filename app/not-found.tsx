import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="text-sm uppercase tracking-wide text-cyan-500">404</p>
      <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-muted-foreground">That lesson or route does not exist yet. Try a language track instead.</p>
      <Button asChild className="mt-6">
        <Link href="/languages">Explore languages</Link>
      </Button>
    </div>
  );
}
