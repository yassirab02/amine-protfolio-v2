import { Camera } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex items-center justify-center w-48 h-48 relative">
        {/* Outer rotating ring - using CSS animation */}
        <div 
          className="absolute w-40 h-40 rounded-full border-2 border-white"
          style={{ 
            borderStyle: "dashed",
            borderWidth: "2px",
            animation: "spin 2s linear infinite",
          }}
        />
        
        {/* Inner rotating ring - faster counter rotation */}
        <div 
          className="absolute w-32 h-32 rounded-full border-2 border-white"
          style={{ 
            borderStyle: "dashed",
            borderWidth: "3px",
            animation: "spin 1.5s linear infinite reverse",
          }}
        />
        
        {/* Camera icon with pulsing animation */}
        <div className="absolute animate-pulse">
          <div className="bg-black rounded-full p-4 flex items-center justify-center">
            <Camera size={32} color="white" strokeWidth={1.5} />
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-pulse {
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.95);
          }
        }
      `}</style>
    </div>
  );
}