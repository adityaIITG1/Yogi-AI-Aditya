import React from "react";
import MudraIcon from "./MudraIcon";

interface RightSidebarProps {
    activeGesture: string | null;
}

const MUDRAS = [
    { name: "Gyan", desc: "Wisdom & Focus" },
    { name: "Prana", desc: "Vitality & Life" },
    { name: "Apana", desc: "Detox & Grounding" },
    { name: "Surya", desc: "Metabolism & Heat" },
    { name: "Varun", desc: "Hydration & Clarity" },
    { name: "Anjali", desc: "Balance & Prayer" },
];

export default function RightSidebar({ activeGesture }: RightSidebarProps) {
    return (
        <div className="absolute top-24 bottom-24 right-6 w-[260px] flex flex-col gap-4 z-20 pointer-events-none">

            {/* Header */}
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-lg">
                <h2 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Mudra Detection
                </h2>
            </div>

            {/* Mudra List */}
            <div className="flex-1 flex flex-col gap-3 overflow-y-auto min-h-0 pr-1">
                {MUDRAS.map((m) => {
                    const isActive = activeGesture && activeGesture.includes(m.name);

                    return (
                        <div
                            key={m.name}
                            className={`
                                relative flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-300
                                ${isActive
                                    ? "bg-green-500/20 border-green-400/50 shadow-[0_0_20px_rgba(74,222,128,0.2)] scale-105"
                                    : "bg-black/30 border-white/5 opacity-70"
                                }
                            `}
                        >
                            <div className="flex flex-col">
                                <span className={`text-sm font-bold ${isActive ? "text-white" : "text-gray-400"}`}>
                                    {m.name}
                                </span>
                                <span className="text-[10px] text-gray-400 uppercase tracking-wide">
                                    {m.desc}
                                </span>
                            </div>

                            <div className={`
                                p-1 rounded-lg transition-colors
                                ${isActive ? "bg-green-400/20" : "bg-transparent"}
                            `}>
                                <MudraIcon name={m.name} className={`w-8 h-8 ${isActive ? "text-green-400" : "text-gray-600"}`} />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Info Panel (HUD Style) */}
            <div className="bg-black/60 backdrop-blur-xl border-t-2 border-green-500 rounded-b-xl p-5 shadow-2xl">
                <h3 className="text-green-400 font-bold text-xs uppercase tracking-widest mb-3 flex justify-between">
                    AI Coach
                    <span className="text-[10px] bg-green-900/50 px-2 py-0.5 rounded text-green-300">ONLINE</span>
                </h3>
                <div className="text-xs text-gray-300 space-y-2 font-light">
                    <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">›</span>
                        <span>Sit in <span className="text-white font-medium">Lotus Pose</span> (Padmasana)</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">›</span>
                        <span>Form <span className="text-white font-medium">Mudras</span> clearly</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">›</span>
                        <span>Close eyes for <span className="text-white font-medium">Meditation</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
