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
    if (isAuthority || role === "authority") return "🛡️";
    if (!role) return hasPendingRequest ? "📋" : "👤";

    const emojiMap: Record<string, string> = {
      producer: "🌱",
      processor: "🏭",
      transporter: "🚚",
      exporter: "📦",
      authority: "🛡️",
    };

    return emojiMap[role] || "👤";
  };

  const getRoleLabel = (role: string | null) => {
    if (isAuthority || role === "authority") return "Authority";
    if (!role) return "No Role";

    const labelMap: Record<string, string> = {
      producer: "Producer",
      processor: "Processor",
      transporter: "Transporter",
      exporter: "Exporter",
      authority: "Authority",
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

  if (!role && hasPendingRequest) {
    navItems = [
      {
        label: "Pending Registration",
        href: "/register-role",
        badge: "pending",
        emoji: "⏱️",
      },
    ];
  } else if (!role && !isAuthority) {
    navItems = [
      {
        label: "Register Actor",
        href: "/register-role",
        emoji: "📝",
      },
    ];
  } else if (isAuthority || role === "authority") {
    navItems = [
      { label: "Authority Dashboard", href: "/dashboard/authority", emoji: "🛡️" },
      { label: "Register Actor", href: "/register-role", emoji: "📝" },
    ];
  } else if (role === "producer") {
    navItems = [
      { label: "Producer Dashboard", href: "/dashboard/producer", emoji: "🌱" },
      { label: "Create Batch", href: "/dashboard/producer/create-batch", emoji: "🍫" },
      { label: "Record Harvest", href: "/dashboard/producer/record-harvest", emoji: "🌾" },
      { label: "My Batches", href: "/dashboard/producer/my-batches", emoji: "📋" },
    ];
  } else if (role === "processor") {
    navItems = [
      { label: "Processor Dashboard", href: "/dashboard/processor", emoji: "🏭" },
      { label: "Fermentation", href: "/dashboard/processor/record-fermentation", emoji: "🧪" },
      { label: "Drying", href: "/dashboard/processor/record-drying", emoji: "☀️" },
      { label: "Update Status", href: "/dashboard/processor/update-status", emoji: "🔄" },
    ];
  } else if (role === "transporter") {
    navItems = [
      { label: "Transporter Dashboard", href: "/dashboard/transporter", emoji: "🚚" },
      { label: "Record Transport", href: "/dashboard/transporter/record-transport", emoji: "🚚" },
      { label: "Record Storage", href: "/dashboard/transporter/record-storage", emoji: "🏬" },
      { label: "Update Status", href: "/dashboard/transporter/update-status", emoji: "🔄" },
    ];
  } else if (role === "exporter") {
    navItems = [
      { label: "Exporter Dashboard", href: "/dashboard/exporter", emoji: "📦" },
      { label: "Record Export", href: "/dashboard/exporter/record-export", emoji: "🌍" },
      { label: "Update Status", href: "/dashboard/exporter/update-status", emoji: "🔄" },
      { label: "My Batches", href: "/dashboard/exporter/my-batches", emoji: "📋" },
    ];
  }

  return (
    <aside className="w-64 bg-white border-r border-4 border-black min-h-screen flex flex-col">
      <div className="p-6 border-b-4 border-black bg-black text-white">
        <div className="text-4xl mb-3">{getRoleEmoji(role)}</div>
        <h2 className="text-xl font-black mb-1">{getRoleLabel(role)}</h2>
        <p className="text-xs text-gray-300 font-semibold">
          Cacao Traceability
        </p>
      </div>

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

      {(role || isAuthority) && (
        <div className="p-4 border-t-4 border-black bg-gray-50">
          <p className="text-xs text-gray-600 font-semibold text-center">
            v2.0 • Cacao Supply Chain
          </p>
        </div>
      )}
    </aside>
  );
}