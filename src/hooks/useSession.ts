import { useEffect, useState } from "react";

type Session = { userId: string; token: string } | null;

export function useSession() {
  const [session, setSession] = useState<Session>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    load().then((s) => {
      if (active) {
        setSession(s);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return { session, loading };
}

async function load(): Promise<Session> {
  return null;
}
