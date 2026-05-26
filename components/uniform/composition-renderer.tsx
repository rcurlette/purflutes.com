"use client";

import { UniformSlot } from "@uniformdev/canvas-next-rsc";
import { UniformCompositionPageResponse } from "@uniformdev/canvas";
import { getComponent } from "@/lib/uniform-components";

interface UniformPageProps {
  composition: UniformCompositionPageResponse | null;
  fallback?: React.ReactNode;
}

/**
 * Render a Uniform composition with proper component resolution
 */
export function UniformComposition({ composition, fallback }: UniformPageProps) {
  if (!composition) {
    return <div>{fallback || "Composition not found"}</div>;
  }

  return (
    <div className="w-full">
      <UniformSlot
        data={composition.component}
        resolveComponent={(component) => {
          return getComponent(component.type);
        }}
      />
    </div>
  );
}

/**
 * Render a single Uniform component with parameters
 */
export function UniformComponent({ type, parameters }: any) {
  const Component = getComponent(type);

  if (!Component) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded">
        Component not found: {type}
      </div>
    );
  }

  return <Component {...parameters} />;
}
