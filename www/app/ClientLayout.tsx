"use client";

import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noContainerPages = ["/login", "/register"];
  const isNoContainer = noContainerPages.includes(pathname);

  return (
    <main>
      {isNoContainer ? (
        <>{children}</>
      ) : (
        <div>{children}</div>
        // className="container mx-auto p-4"
      )}
    </main>
  );
}
