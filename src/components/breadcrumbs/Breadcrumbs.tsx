"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback } from "react";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Credit https://dev.to/dan_starner/building-dynamic-breadcrumbs-in-nextjs-17oa
  const generateBreadcrumbs = useCallback(() => {
    if (!pathname) {
      return [];
    }

    // Remove any query parameters, as those aren't included in breadcrumbs
    const asPathWithoutQuery = pathname.split("?")[0];

    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter((v) => v.length > 0);

    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.
    const crumblist = asPathNestedRoutes.map((subpath, idx) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      // The title will just be the route string for now
      const title = subpath.replace(/-/g, " ");
      return { href, title };
    });

    // Add in a default "Home" crumb for the top-level
    return [...crumblist];
  }, [pathname]);

  // Call the function to generate the breadcrumbs list
  const breadcrumbs = generateBreadcrumbs();

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map(({ href, title }, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={href} className="capitalize">
                  {title}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
