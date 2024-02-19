import Card from "@/components/card";
import Link from "next/link";

export default function page() {
  return (
    <Card>
      Notification
      <Link href="/dashboard/archived" className="text-blue-400">
        Archived
      </Link>
    </Card>
  );
}
