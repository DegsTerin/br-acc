import { useCallback, useEffect, useState } from "react";

import { type GraphData, getGraphData } from "@/api/client";

interface UseGraphDataResult {
  data: GraphData | null;
  loading: boolean;
  error: string | null;
  refetch: (depth?: number, types?: string[]) => void;
}

export function useGraphData(
  entityId: string | undefined,
  initialDepth = 2,
): UseGraphDataResult {
  const [data, setData] = useState<GraphData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(
    (depth = initialDepth, types?: string[]) => {
      if (!entityId) return;
      setLoading(true);
      setError(null);
      getGraphData(entityId, depth, types)
        .then(setData)
        .catch((err: Error) => setError(err.message))
        .finally(() => setLoading(false));
    },
    [entityId, initialDepth],
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, error, refetch };
}
