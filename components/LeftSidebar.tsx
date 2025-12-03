import React from "react";

interface LeftSidebarProps {
    energies: number[];
}

const CHAKRAS = [
    { name: "Root", color: "#FF0000", label: "Muladhara" },
    { name: "Sacral", color: "#FF8C00", label: "Svadhishthana" },
    { name: "Solar", color: "#FFFF00", label: "Manipura" },
    { name: "Heart", color: "#00FF00", label: "Anahata" },
    { name: "Throat", color: "#0000FF", label: "Vishuddha" },
    { name: "Third", color: "#4B0082", label: "Ajna" },
    { name: "Crown", color: "#8B00FF", label: "Sahasrara" },
];

export default function LeftSidebar({ energies }: LeftSidebarProps) {
    return (
        <div className="absolute top-24 bottom-24 left-6 w-[100px] flex flex-col justify-between gap-4 pointer-events-none z-20">
            {CHAKRAS.map((c, i) => {
                const energy = energies[i] ?? 0.0;
                const height = Math.max(5, energy * 100); // Min height 5%
                const isActive = energy > 0.1;

                return (
                    <div key={c.name} className="flex-1 flex flex-row items-center gap-3 group">
                        {/* Energy Bar Container */}
                        <div className="h-full w-3 bg-gray-800/50 rounded-full relative overflow-hidden backdrop-blur-sm border border-white/5 shadow-inner">
                            {/* Glowing Fill */}
                            <div
                                className="absolute bottom-0 w-full rounded-full transition-all duration-700 ease-out"
                                style={{
                                    height: `${height}%`,
                                    backgroundColor: c.color,
                                    boxShadow: isActive ? `0 0 15px ${c.color}, 0 0 30px ${c.color}` : 'none'
                                }}
                            />
                        </div>

                        {/* Label */}
                        <div className="flex flex-col">
                            <span className="text-[10px] text-white/60 uppercase tracking-wider font-semibold">{c.name}</span>
                            <span className="text-[8px] text-white/40 font-light hidden group-hover:block transition-all">{c.label}</span>
                            <span className="text-[10px] font-mono text-white/90" style={{ color: isActive ? c.color : 'rgba(255,255,255,0.5)' }}>
                                {Math.round(energy * 100)}%
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
