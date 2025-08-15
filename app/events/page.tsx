import Events from "@/ui/Events";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Events',
};

export default function Page() {
  return (
    <div>
      <Events />
    </div>
  );
}
