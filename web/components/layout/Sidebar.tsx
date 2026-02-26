"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRole } from "@/lib/hooks/useRole";
import clsx from "clsx";

interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export function Sidebar() {
  const pathname = usePathname();
  const { role, hasPendingRequest, isAuthority, loading } = useRole();

  let navItems: NavItem[] = [];

  if (loading) {
    return (
      <aside className="w-64 bg-gray-50 border-r border-4 border-black min-h-screen">
        <nav className="p-4">
          <div className="text-sm text-gray-500">Loading...</div>
        </nav>
      </aside>
    );
  }

  // Role selection or pending approval
  if (!role && hasPendingRequest) {
    navItems = [
      { label: "Solicitud Pendiente", href: "/register-role", badge: "pending" },
    ];
  } else if (!role) {
    navItems = [{ label: "Solicitar Rol", href: "/register-role" }];
  } else if (isAuthority) {
    navItems = [
      { label: "Inicializar", href: "/dashboard/authority/initialize" },
      { label: "Validar Roles", href: "/dashboard/authority/validate-roles" },
    ];
  } else if (role === "producer") {
    navItems = [
      { label: "Crear Token", href: "/dashboard/producer/create-token" },
      { label: "Mis Tokens", href: "/dashboard/producer/my-tokens" },
      { label: "Transferencias", href: "/dashboard/producer/transfers" },
    ];
  } else if (role === "factory") {
    navItems = [
      { label: "Crear Token", href: "/dashboard/factory/create-token" },
      { label: "Mis Tokens", href: "/dashboard/factory/my-tokens" },
      { label: "Transferencias", href: "/dashboard/factory/transfers" },
    ];
  } else if (role === "retailer") {
    navItems = [
      { label: "Mis Tokens", href: "/dashboard/retailer/my-tokens" },
      { label: "Transferencias", href: "/dashboard/retailer/transfers" },
    ];
  } else if (role === "consumer") {
    navItems = [
      { label: "Mis Tokens", href: "/dashboard/consumer/my-tokens" },
      { label: "Transferencias", href: "/dashboard/consumer/transfers" },
    ];
  }

  return (
    <aside className="w-64 bg-gray-50 border-r border-4 border-black min-h-screen">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "block px-4 py-3 text-base rounded-lg text-sm font-medium transition",
              pathname === item.href
                ? "bg-white text-black placeholder-gray-700"
                : "text-black hover:bg-gray-200"
            )}
          >
            {item.label}
            {item.badge === "pending" && (
              <span className="ml-2 inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                Pendiente
              </span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
