// Developed by doctorcodex
// AADI team avatars component - 21st.dev style

"use client";

import { AvatarSmartGroup } from "@/components/ui/avatar-smart-group";
import SentraTerminal from "@/components/ui/sentra-terminal";

export default function TeamAvatars() {
  const sentraTeam = [
    {
      name: "Aurora",
      role: "Asisten Inovasi",
      image: "/avatar/ara.png",
    },
    {
      name: "Atlas",
      role: "Research & Forecasting Analyst",
      image: "/avatar/atlas.png",
    },
    {
      name: "Codex",
      role: "Brainstorming",
      image: "/avatar/codex.png",
    },
    {
      name: "Dexton",
      role: "Strategis",
      image: "/avatar/dexton.png",
    },
    {
      name: "Kod",
      role: "Assistant Software Engineer",
      image: "/avatar/kod.png",
    },
    {
      name: "Nova",
      role: "Administrator Digital Document",
      image: "/avatar/nova.png",
    },
    {
      name: "Rex",
      role: "Assistant Software Engineer",
      image: "/avatar/rex.png",
    },
    {
      name: "Kade",
      role: "Software Engineer",
      image: "/avatar/kade.png",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center ml-[300px] mt-[20px]" style={{ gap: 'var(--space-8)' }}>
      {/* Left Column - Team Info */}
      <div className="text-left max-w-xl">
        <h2 className="text-2xl md:text-3xl font-semibold h2-underline mb-2" style={{ color: '#002157' }}>Meet Sentra AI Team!</h2>
        <p className="text-[17px] leading-[1.8] font-medium text-gray-600 mt-4">Dibangun oleh tim AI berstandar industri.</p>

        <div className="mt-6">
          {/* Top Row - 4 Avatars */}
          <div className="mb-1">
            <AvatarSmartGroup
              users={sentraTeam.slice(0, 4)}
              variant="uniform"
              size={96}
              overlap={-24}
              ringColor="ring-white"
              hoverScale={1.1}
              tooltipBg="bg-yellow-400 text-black"
            />
          </div>

          {/* Bottom Row - 4 Avatars */}
          <div>
            <AvatarSmartGroup
              users={sentraTeam.slice(4, 8)}
              variant="uniform"
              size={96}
              overlap={-24}
              ringColor="ring-white"
              hoverScale={1.1}
              tooltipBg="bg-yellow-400 text-black"
            />
          </div>
        </div>
      </div>

      {/* Right Column - Terminal Demo */}
      <div className="flex-1 max-w-2xl ml-[120px] mt-[60px]">
        <SentraTerminal />
      </div>
    </div>
  );
}
