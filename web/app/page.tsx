"use client";

import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRole } from "@/lib/hooks/useRole";
import { Header } from "@/components/layout/Header";

export default function HomePage() {
  const { publicKey } = useWallet();
  const { role, isAuthority } = useRole();

  const dashboardLabel = isAuthority
    ? "Go to Dashboard (Authority)"
    : role
    ? `Go to Dashboard (${role.charAt(0).toUpperCase() + role.slice(1)})`
    : "Go to Dashboard";

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <section className="border-b-4 border-black bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-sm font-bold tracking-wide uppercase mb-4">
            Cadena de proceso del Cacao
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-6xl mb-6">🍫</div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                Trazabilidad de cacao
                <br />
                sobre Solana
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-medium max-w-2xl mb-8">
                Sistema descentralizado para registrar y verificar el ciclo de vida
                de un lote de cacao desde origen hasta exportación, con eventos,
                estados y certificados on-chain.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/dashboard"
                  className="px-6 py-3 bg-white text-black font-black rounded-lg hover:bg-gray-200 transition"
                >
                  📊 {dashboardLabel}
                </Link>

                <Link
                  href="/register-role"
                  className="px-6 py-3 border-2 border-white text-white font-black rounded-lg hover:bg-white hover:text-black transition"
                >
                  🧾 Register Actor
                </Link>
              </div>

              {publicKey && (
                <p className="mt-6 text-sm text-gray-300 font-medium break-all">
                  Connected wallet: {publicKey.toString()}
                </p>
              )}
            </div>

            <div className="bg-white text-black border-4 border-white rounded-2xl p-8">
              <h2 className="text-2xl font-black mb-6">Lifecycle Overview</h2>

              <div className="space-y-3">
                {[
                  "created",
                  "harvested",
                  "fermented",
                  "dried",
                  "inTransit",
                  "stored",
                  "certified",
                  "exported",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 border-2 border-black rounded-lg px-4 py-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-black text-sm">
                      {index + 1}
                    </div>
                    <div className="font-bold capitalize">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="text-5xl mb-4">🔄</div>
          <h2 className="text-4xl font-black mb-4">Cadena de valor del cacao</h2>
          <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto">
            Cada actor registra eventos y transiciones de estado según su rol,
            manteniendo un historial verificable del lote en blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="bg-white border-4 border-black rounded-xl p-6">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-2xl font-black mb-3">Producer</h3>
            <p className="text-gray-700 font-medium mb-4">
              Crea el lote de cacao, registra la cosecha y marca el lote como harvested.
            </p>
            <div className="space-y-2 text-sm font-semibold text-gray-700">
              <p>✓ Create batch</p>
              <p>✓ Record harvest</p>
              <p>✓ Update to harvested</p>
            </div>
          </div>

          <div className="bg-white border-4 border-black rounded-xl p-6">
            <div className="text-5xl mb-4">🏭</div>
            <h3 className="text-2xl font-black mb-3">Processor</h3>
            <p className="text-gray-700 font-medium mb-4">
              Procesa el lote mediante fermentación y secado antes de la fase logística.
            </p>
            <div className="space-y-2 text-sm font-semibold text-gray-700">
              <p>✓ Record fermentation</p>
              <p>✓ Record drying</p>
              <p>✓ Update to dried</p>
            </div>
          </div>

          <div className="bg-white border-4 border-black rounded-xl p-6">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-2xl font-black mb-3">Transporter</h3>
            <p className="text-gray-700 font-medium mb-4">
              Registra transporte y almacenamiento del lote hasta dejarlo listo para certificación.
            </p>
            <div className="space-y-2 text-sm font-semibold text-gray-700">
              <p>✓ Record transport</p>
              <p>✓ Record storage</p>
              <p>✓ Update to stored</p>
            </div>
          </div>

          <div className="bg-white border-4 border-black rounded-xl p-6">
            <div className="text-5xl mb-4">🏛️</div>
            <h3 className="text-2xl font-black mb-3">Authority</h3>
            <p className="text-gray-700 font-medium mb-4">
              Valida actores, emite certificados y confirma oficialmente la certificación del lote.
            </p>
            <div className="space-y-2 text-sm font-semibold text-gray-700">
              <p>✓ Validate actors</p>
              <p>✓ Issue certificate</p>
              <p>✓ Update to certified</p>
            </div>
          </div>

          <div className="bg-white border-4 border-black rounded-xl p-6">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-black mb-3">Exporter</h3>
            <p className="text-gray-700 font-medium mb-4">
              Registra la exportación del lote certificado y lo lleva al estado final exported.
            </p>
            <div className="space-y-2 text-sm font-semibold text-gray-700">
              <p>✓ Record export</p>
              <p>✓ Update to exported</p>
              <p>✓ Final traceability stage</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y-4 border-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <div className="text-5xl mb-4">📌</div>
            <h2 className="text-4xl font-black mb-4">Qué registra el sistema</h2>
            <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto">
              El MVP registra lotes, eventos, certificados y estados de forma
              separada para mantener trazabilidad detallada y control explícito del ciclo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border-4 border-black rounded-xl p-6">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-black mb-2">Batches</h3>
              <p className="text-gray-700 font-medium">
                Cada lote de cacao se representa como una cuenta on-chain derivada por PDA.
              </p>
            </div>

            <div className="bg-white border-4 border-black rounded-xl p-6">
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-xl font-black mb-2">Events</h3>
              <p className="text-gray-700 font-medium">
                Cada etapa relevante queda registrada en el timeline con actor,
                ubicación, timestamp y metadata.
              </p>
            </div>

            <div className="bg-white border-4 border-black rounded-xl p-6">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="text-xl font-black mb-2">Certificates</h3>
              <p className="text-gray-700 font-medium">
                La autoridad puede emitir y revocar certificados verificables asociados al lote.
              </p>
            </div>

            <div className="bg-white border-4 border-black rounded-xl p-6">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-black mb-2">Status</h3>
              <p className="text-gray-700 font-medium">
                El estado oficial del lote se controla por transiciones válidas y permisos por rol.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="text-5xl mb-4">🚀</div>
          <h2 className="text-4xl font-black mb-4">Cómo empezar</h2>
          <p className="text-lg text-gray-700 font-medium max-w-3xl mx-auto">
            Sigue este recorrido para probar el sistema completo de trazabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="bg-white border-4 border-black rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">1️⃣</div>
            <h3 className="text-xl font-black mb-2">Connect Wallet</h3>
            <p className="text-gray-700 font-medium text-sm">
              Conecta tu wallet de Solana a la aplicación local.
            </p>
          </div>

          <div className="bg-white border-4 border-black rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">2️⃣</div>
            <h3 className="text-xl font-black mb-2">Register Actor</h3>
            <p className="text-gray-700 font-medium text-sm">
              Registra tu rol en la cadena: producer, processor, transporter, authority o exporter.
            </p>
          </div>

          <div className="bg-white border-4 border-black rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">3️⃣</div>
            <h3 className="text-xl font-black mb-2">Authority Approval</h3>
            <p className="text-gray-700 font-medium text-sm">
              La autoridad valida el actor antes de habilitar su dashboard.
            </p>
          </div>

          <div className="bg-white border-4 border-black rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">4️⃣</div>
            <h3 className="text-xl font-black mb-2">Record Lifecycle</h3>
            <p className="text-gray-700 font-medium text-sm">
              Registra eventos y estados del lote en cada etapa del flujo.
            </p>
          </div>

          <div className="bg-white border-4 border-black rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">5️⃣</div>
            <h3 className="text-xl font-black mb-2">Verify History</h3>
            <p className="text-gray-700 font-medium text-sm">
              Consulta el detalle del lote, sus eventos y certificados en el dashboard.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="text-6xl mb-4">🌍</div>
          <h2 className="text-4xl font-black mb-4">
            Trazabilidad completa desde origen hasta exportación
          </h2>
          <p className="text-lg text-gray-300 font-medium max-w-3xl mx-auto mb-8">
            Un MVP académico construido en Solana para demostrar trazabilidad
            alimentaria verificable, bajo costo transaccional y auditoría on-chain.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/dashboard"
              className="px-6 py-3 bg-white text-black font-black rounded-lg hover:bg-gray-200 transition"
            >
              🚀 Access Dashboard
            </Link>
            <Link
              href="/register-role"
              className="px-6 py-3 border-2 border-white text-white font-black rounded-lg hover:bg-white hover:text-black transition"
            >
              🧾 Register Actor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}