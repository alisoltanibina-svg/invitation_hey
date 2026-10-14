import { invitation } from "@/lib/invitation-data";
import { formatJalaliLong } from "@/lib/persian";
import { cn } from "@/lib/utils";

export function ShamsiDate({
  className,
  dateTime = "2026-10-22",
}: {
  className?: string;
  dateTime?: string;
}) {
  return (
    <time
      dateTime={dateTime}
      dir="rtl"
      className={cn("block w-full text-center font-display", className)}
    >
      {formatJalaliLong(invitation.jalali)}
    </time>
  );
}
