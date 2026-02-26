"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRole } from "@/lib/hooks/useRole";
import clsx from "clsx";

interface NavItem {
  label: string;
  href: string;
  badge?: string;
  emoji: string;
}

export function Sidebar() {
  const pathname = usePathname();
  const { role, hasPendingRequest, isAuthority, loading } = useRole();

  const getRoleEmoji = (role: string | null) => {
    if (isAuthority) return "🔐";
    if (!role) return hasPendingRequest ? "📋" : "👤";
    const emojiMap: { [key: string]: string } = {
      producer: "🌱",
      factory: "🏭",
      retailer: "🏪",
      consumer: "👥",
    };
    return emojiMap[role] || "👤";
  };

  const getRoleLabel = (role: string | null) => {
    if (isAuthority) return "Autoridad";
    if (!role) return "Sin Rol";
    const labelMap: { [key: string]: string } = {
      producer: "Productor",
      factory: "Fábrica",
      retailer: "Minorista",
      consumer: "Consumidor",
    };
    return labelMap[role] || role;
  };

  let navItems: NavItem[] = [];

  if (loading) {
    return (
      <aside className="w-64 bg-white border-r border-4 border-black min-h-screen flex flex-col">
        <div className="p-6 border-b-4 border-black">
          <div className="text-2xl mb-2">⏳</div>
          <div className="text-sm text-gray-500 font-semibold">Loading...</div>
        </div>
      </aside>
    );
  }

  // Role selection or pending approval
  if (!role && hasPendingRequest) {
    navItems = [
      { label: "Solicitud Pendiente", href: "/register-role", badge: "pending", emoji: "⏱️" },
    ];
  } else if (!role) {
    navItems = [{ label: "Solicitar Rol", href: "/register-role", emoji: "📝" }];
  } else if (isAuthority) {
    navItems = [
      { label: "Inicializar", href: "/dashboard/authority/initialize", emoji: "🚀" },
      { label: "Validar Roles", href: "/dashboard/authority/validate-roles", emoji: "✓" },
    ];
  } else if (role === "producer") {
    navItems = [
      { label: "Crear Token", href: "/dashboard/producer/create-token", emoji: "📦" },
      { label: "Mis Tokens", href: "/dashboard/producer/my-tokens", emoji: "🌱" },
      { label: "Transferencias", href: "/dashboard/producer/transfers", emoji: "🔄" },
    ];
  } else if (role === "factory") {
    navItems = [
      { label: "Crear Producto", href: "/dashboard/factory/create-token", emoji: "⚙️" },
      { label: "Mis Productos", href: "/dashboard/factory/my-tokens", emoji: "🏭" },
      { label: "Transferencias", href: "/dashboard/factory/transfers", emoji: "🔄" },
    ];
  } else if (role === "retailer") {
    navItems = [
      { label: "Mi Inventario", href: "/dashboard/retailer/my-tokens", emoji: "🏪" },
      { label: "Transferencias", href: "/dashboard/retailer/transfers", emoji: "🔄" },
    ];
  } else if (role === "consumer") {
    navItems = [
      { label: "Mis Productos", href: "/dashboard/consumer/my-tokens", emoji: "🛒" },
      { label: "Transferencias", href: "/dashboard/consumer/transfers", emoji: "🔄" },
    ];
  }

  return (
    <aside className="w-64 bg-white border-r border-4 border-black min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="p-6 border-b-4 border-black bg-black text-white">
        <div className="text-4xl mb-3">{getRoleEmoji(role)}</div>
        <h2 className="text-xl font-black mb-1">{getRoleLabel(role)}</h2>
        <p className="text-xs text-gray-300 font-semibold">Solana Trazabilidad</p>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition transform text-sm",
              pathname === item.href
                ? "bg-black text-white shadow-lg border-2 border-black"
                : "text-black hover:bg-gray-100 hover:shadow-md hover:-translate-y-1"
            )}
          >
            <span className="text-xl">{item.emoji}</span>
            <span className="flex-1">{item.label}</span>
            {item.badge === "pending" && (
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-black rounded-full">
                ⏱️
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      {role && (
        <div className="p-4 border-t-4 border-black bg-gray-50">
          <p className="text-xs text-gray-600 font-semibold text-center">
            v1.0 • Supply Chain
          </p>
        </div>
      )}
    </aside>
  );
}
