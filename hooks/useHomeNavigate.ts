"use client";
import { useAppSelector } from "@app/redux/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useDefaultNavigate = (): void => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user?.username) {
      router.push(`${user.username}`);
    } else {
      router.push("/login");
    }
  }, [router, user?.username]);
};

export default useDefaultNavigate;
