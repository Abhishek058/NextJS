import Card from "@/components/card";
import Link from "next/link";

export default function page() {
  return (
    <Card>
      Archived
      <Link href="/dashboard" className="text-blue-400">
        Default
      </Link>
    </Card>
  );
}
