interface UnlockRowProps {
  name: string;
  nextUnlock: string;
  icon: string;
}

export function UnlockRow({ name, nextUnlock, icon }: UnlockRowProps) {
  return (
    <div className="grid grid-cols-3 gap-4 py-2 text-sm hover:bg-muted/50 rounded-md px-2 -mx-2 transition-colors">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs">
          {icon}
        </div>
        <span className="font-medium text-foreground">{name}</span>
      </div>
      <span className="text-foreground font-mono">{nextUnlock}</span>
      <span></span>
    </div>
  );
}
