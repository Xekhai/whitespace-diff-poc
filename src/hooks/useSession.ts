import { useEffect, useState } from "react";

type Session = { userId: string; token: string } | null;

export function useSession() {
  const [session, setSession] = useState<Session>(null);

  useEffect(() => {
    let active = true;
    load().then((s) => {
      if (active) setSession(s);
    });
    return () => {
      active = false;
    };
  }, []);

  return session;
}

async function load(): Promise<Session> {
  return null;
}
