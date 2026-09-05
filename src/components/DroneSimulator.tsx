import React, { useState } from 'react';
import { Plane, Wind, Gauge, Compass, RotateCcw, ShieldCheck, Zap } from 'lucide-react';

export const DroneSimulator: React.FC = () => {
  const [throttle, setThrottle] = useState<number>(68); // 0-100%
  const [pitch, setPitch] = useState<number>(8); // degrees -20 to 20
  const [airspeed, setAirspeed] = useState<number>(14.5); // m/s
  const [mode, setMode] = useState<'drone' | 'fixed-wing'>('drone');

  // Aerodynamic and motor physics calculations
  const weightKg = mode === 'drone' ? 0.42 : 0.65; // 420g drone vs 650g RC plane
  const maxThrustKg = mode === 'drone' ? 0.95 : 1.35;
  const currentThrustKg = (throttle / 100) * maxThrustKg;
  const twr = (currentThrustKg / weightKg).toFixed(2);
  const liftKg = mode === 'fixed-wing' 
    ? (0.5 * 1.225 * Math.pow(airspeed, 2) * 0.18 * (0.3 + pitch * 0.04)).toFixed(2)
    : currentThrustKg.toFixed(2);
  const stallSpeed = mode === 'fixed-wing' ? 7.2 : 0;
  const isStalling = mode === 'fixed-wing' && airspeed < stallSpeed;

  const resetTelemetry = () => {
    setThrottle(65);
    setPitch(6);
    setAirspeed(14);
  };

  return (
    <div id="drone-telemetry-widget" className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-7 shadow-md">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center">
            <Plane className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-950 tracking-wide flex items-center gap-2">
              Interactive UAV Avionics & Aerodynamics Sandbox
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                LIVE TELEMETRY
              </span>
            </h4>
            <p className="text-xs text-slate-500">
              Fabrication testing model based on JNTUK Drone & RC Plane Trainer Curriculum
            </p>
          </div>
        </div>

        {/* Vehicle Mode Toggle in Sleek Interface pill style */}
        <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200 text-xs">
          <button
            onClick={() => setMode('drone')}
            className={`px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
              mode === 'drone'
                ? 'bg-sky-600 text-white font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            Micro Quadcopter
          </button>
          <button
            onClick={() => setMode('fixed-wing')}
            className={`px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
              mode === 'fixed-wing'
                ? 'bg-sky-600 text-white font-semibold shadow-xs'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            Fixed-Wing RC Plane
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5">
        {/* Visual Stage & Flight Graphic */}
        <div className="lg:col-span-7 bg-slate-950/70 rounded-xl p-5 border border-slate-800/80 relative flex flex-col justify-between overflow-hidden min-h-[260px]">
          {/* Grid lines background (CAD coordinate style) */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Top telemetry HUD */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-3">
              <span className="text-slate-400">STATUS:</span>
              <span className={`font-semibold ${isStalling ? 'text-rose-400 animate-pulse' : 'text-emerald-400'}`}>
                {isStalling ? 'WARNING: STALL CONDITION' : 'STABLE FLIGHT REGIME'}
              </span>
            </div>
            <div className="flex items-center gap-1 text-cyan-400">
              <Compass className="w-3.5 h-3.5" />
              <span>PITCH: {pitch > 0 ? `+${pitch}` : pitch}°</span>
            </div>
          </div>

          {/* Central Animated Model */}
          <div className="relative z-10 flex items-center justify-center my-6">
            <div
              className="relative transition-transform duration-300 ease-out"
              style={{
                transform: `rotate(${pitch * -1}deg) translateY(${((throttle - 50) * -0.6)}px)`,
              }}
            >
              {mode === 'drone' ? (
                /* Quadcopter Visual */
                <div className="relative w-48 h-32 flex items-center justify-center">
                  {/* Central Hub */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-600 to-slate-800 border border-cyan-400/40 shadow-lg shadow-cyan-500/20 flex flex-col items-center justify-center text-center p-1">
                    <span className="text-[9px] font-mono text-cyan-300 font-bold">UAV-01</span>
                    <span className="text-[8px] text-slate-300">ESP32 / ESC</span>
                  </div>
                  {/* Carbon Fiber Arms */}
                  <div className="absolute w-44 h-1.5 bg-slate-700/80 rounded rotate-45 -z-10" />
                  <div className="absolute w-44 h-1.5 bg-slate-700/80 rounded -rotate-45 -z-10" />
                  {/* 4 Rotors with spinning blades animation */}
                  {[-1, 1].map((x) =>
                    [-1, 1].map((y) => (
                      <div
                        key={`${x}-${y}`}
                        className="absolute w-12 h-12 flex items-center justify-center"
                        style={{
                          left: x === -1 ? '4px' : 'auto',
                          right: x === 1 ? '4px' : 'auto',
                          top: y === -1 ? '-2px' : 'auto',
                          bottom: y === 1 ? '-2px' : 'auto',
                        }}
                      >
                        <div
                          className="w-12 h-12 rounded-full border border-cyan-400/40 bg-cyan-400/5 animate-spin"
                          style={{
                            animationDuration: `${Math.max(0.12, 1.2 - throttle * 0.011)}s`,
                          }}
                        >
                          <div className="w-full h-0.5 bg-cyan-300/80 my-5" />
                        </div>
                        <div className="absolute w-3 h-3 rounded-full bg-slate-400 border border-slate-900" />
                      </div>
                    ))
                  )}
                  {/* Downward Thrust Visual vector */}
                  <div
                    className="absolute -bottom-8 w-24 bg-gradient-to-b from-cyan-400/40 to-transparent blur-xs transition-all"
                    style={{ height: `${(throttle / 100) * 45}px` }}
                  />
                </div>
              ) : (
                /* Fixed Wing RC Plane Visual */
                <div className="relative w-52 h-24 flex items-center justify-center">
                  <div className="w-44 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full relative shadow-md">
                    {/* Fuselage nose */}
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-slate-300 border border-slate-700" />
                    {/* Airfoil Wings */}
                    <div className="absolute left-10 -top-8 w-16 h-20 bg-slate-800 border-t-2 border-cyan-400 rounded-sm -skew-x-12 opacity-90 shadow-sm" />
                    <div className="absolute left-10 -bottom-8 w-16 h-20 bg-slate-800 border-b-2 border-cyan-400 rounded-sm skew-x-12 opacity-90 shadow-sm" />
                    {/* Vertical Stabilizer & Rudder */}
                    <div className="absolute right-2 -top-7 w-8 h-8 bg-cyan-600 rounded-tr-xl -skew-x-12" />
                    {/* Horizontal Elevator */}
                    <div className="absolute right-0 -top-2 w-10 h-8 bg-slate-700 rounded-sm opacity-80" />
                  </div>
                  {/* Front Propeller Spin */}
                  <div
                    className="absolute -left-4 w-1.5 h-16 bg-cyan-300/60 rounded animate-spin origin-center"
                    style={{
                      animationDuration: `${Math.max(0.08, 0.9 - throttle * 0.008)}s`,
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Bottom HUD metrics */}
          <div className="relative z-10 grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/80 text-center font-mono text-xs">
            <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800">
              <span className="text-slate-400 text-[10px] block">T/W RATIO</span>
              <span className={`text-sm font-bold ${Number(twr) >= 1.0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {twr} : 1
              </span>
            </div>
            <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800">
              <span className="text-slate-400 text-[10px] block">CALC LIFT</span>
              <span className="text-sm font-bold text-cyan-400">{liftKg} kg</span>
            </div>
            <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800">
              <span className="text-slate-400 text-[10px] block">AIRSPEED</span>
              <span className="text-sm font-bold text-blue-400">{airspeed.toFixed(1)} m/s</span>
            </div>
          </div>
        </div>

        {/* Flight Avionics Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            {/* Throttle slider */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  Brushless Throttle (ESC Output)
                </span>
                <span className="font-mono text-sky-600 font-bold">{throttle}%</span>
              </div>
              <input
                id="throttle-slider"
                type="range"
                min="0"
                max="100"
                value={throttle}
                onChange={(e) => setThrottle(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>0% (Idle)</span>
                <span>50% (Hover)</span>
                <span>100% (Max Thrust)</span>
              </div>
            </div>

            {/* Pitch Angle slider */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-blue-500" />
                  Elevator Pitch / Angle of Attack (AoA)
                </span>
                <span className="font-mono text-sky-600 font-bold">{pitch}°</span>
              </div>
              <input
                id="pitch-slider"
                type="range"
                min="-15"
                max="20"
                value={pitch}
                onChange={(e) => setPitch(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>-15° (Dive)</span>
                <span>0° (Level)</span>
                <span>+20° (Climb)</span>
              </div>
            </div>

            {/* Airspeed slider */}
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5 text-teal-600" />
                  Airspeed Velocity (Pitot Tube)
                </span>
                <span className="font-mono text-sky-600 font-bold">{airspeed.toFixed(1)} m/s</span>
              </div>
              <input
                id="airspeed-slider"
                type="range"
                min="4"
                max="26"
                step="0.5"
                value={airspeed}
                onChange={(e) => setAirspeed(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>4.0 m/s</span>
                <span>15.0 m/s (Cruise)</span>
                <span>26.0 m/s (Sprint)</span>
              </div>
            </div>
          </div>

          {/* Quick Trainer info & Reset */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-[11px] text-slate-600">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>JNTUK Certified Trainer Protocol</span>
            </div>
            <button
              id="reset-telemetry-btn"
              onClick={resetTelemetry}
              className="flex items-center gap-1 text-xs text-slate-700 hover:text-slate-950 px-2.5 py-1 rounded-md bg-white hover:bg-slate-100 border border-slate-200 shadow-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
