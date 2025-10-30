import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React from "react";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export default function ActiveLink({
  children,
  href,
  ...rest
}: ActiveLinkProps) {
  const router = useRouter();
  console.log(router.pathname);
  const isCurrentPath =
    router.asPath === href ||
    router.asPath === rest.as ||
    router.asPath.startsWith(String(rest.as));

  return (
    <Link
      className={cn(
        "text-sm font-medium transition-colors hover:text-blue-500",
        isCurrentPath ? "text-blue-500" : "text-muted-foreground"
      )}
      href="/"
    >
      {children}
    </Link>
  );
}
