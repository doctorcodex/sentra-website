// Developed by doctorcodex
// Breadcrumb primitives (shadcn-style), semantic nav/ol/li wrappers

import { cn } from "@/lib/utils";
import * as React from "react";

const Breadcrumb = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <nav aria-label="Breadcrumb" className={cn("text-sm", className)} {...props} />
);

const BreadcrumbList = ({ className, ...props }: React.OlHTMLAttributes<HTMLOListElement>) => (
  <ol className={cn("flex items-center gap-2", className)} {...props} />
);

const BreadcrumbItem = ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
  <li className={cn("inline-flex items-center", className)} {...props} />
);

const BreadcrumbLink = ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className={cn("underline-offset-4 hover:underline", className)} {...props} />
);

const BreadcrumbPage = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span aria-current="page" className={cn("text-muted-foreground", className)} {...props} />
);

const BreadcrumbSeparator = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span role="presentation" className={cn("text-muted-foreground", className)} {...props}>
    /
  </span>
);

const BreadcrumbEllipsis = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={16} height={16} className={className} {...props}>
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
  </svg>
);

export {
    Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem,
    BreadcrumbLink, BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
};



