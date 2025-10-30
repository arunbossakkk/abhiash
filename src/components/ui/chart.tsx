import React from "react";
import {
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  LegendProps as RechartsLegendProps,
} from "recharts";
import { cn } from "@/lib/utils";

// Theme configuration
const THEMES = { light: "", dark: ".dark" } as const;

// Chart configuration type
export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

// Chart context
type ChartContextProps = { config: ChartConfig };
const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within <ChartContainer />");
  return context;
}

// Chart container
export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { config: ChartConfig; children: React.ReactNode }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "ChartContainer";

// Chart style
const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, conf]) => conf.theme || conf.color);
  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, conf]) => {
    const color = conf.theme?.[theme as keyof typeof conf.theme] || conf.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .filter(Boolean)
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
};

// ChartTooltip payload item
type ChartTooltipItem = {
  name?: string;
  value?: number | string;
  color?: string;
  payload?: Record<string, any>;
  dataKey?: string;
};

// ChartTooltipContent
type ChartTooltipContentProps = {
  active?: boolean;
  payload?: ChartTooltipItem[];
  className?: string;
  label?: string;
  formatter?: (value: any, name: string, item: ChartTooltipItem, index: number) => React.ReactNode;
};

export const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  ({ active, payload = [], className, label, formatter }, ref) => {
    if (!active || !payload.length) return null;

    const { config } = useChart();

    return (
      <div
        ref={ref}
        className={cn("bg-white border p-2 rounded shadow", className)}
      >
        {label && <div className="font-medium mb-1">{label}</div>}
        {payload.map((item, index) => {
          const itemConfig = config[item.dataKey || item.name || ""] || {};
          return (
            <div key={index} className="flex justify-between">
              <span>{itemConfig.label || item.name}</span>
              <span>{formatter ? formatter(item.value, item.name || "", item, index) : item.value}</span>
            </div>
          );
        })}
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltipContent";

// ChartLegendContent
type ChartLegendContentProps = {
  payload?: Array<{ value?: string; color?: string; dataKey?: string }>;
  className?: string;
  hideIcon?: boolean;
};

export const ChartLegendContent = React.forwardRef<HTMLDivElement, ChartLegendContentProps>(
  ({ payload = [], className, hideIcon }, ref) => {
    const { config } = useChart();
    if (!payload.length) return null;

    return (
      <div ref={ref} className={cn("flex gap-4", className)}>
        {payload.map((item, idx) => {
          const itemConfig = config[item.dataKey || item.value || ""] || {};
          return (
            <div key={idx} className="flex items-center gap-1">
              {!hideIcon && <div className="w-3 h-3" style={{ backgroundColor: item.color }} />}
              <span>{itemConfig.label || item.value}</span>
            </div>
          );
        })}
      </div>
    );
  }
);
ChartLegendContent.displayName = "ChartLegendContent";

// Exports
export const ChartTooltip = RechartsTooltip;
export const ChartLegend = RechartsLegend;
