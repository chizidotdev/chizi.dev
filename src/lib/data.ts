import { toast } from "sonner";

import { api } from "@/lib/api";
import { mutationOptions, useQuery } from "@tanstack/react-query";

export function useLoggedInUser() {
  return useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      if (!api.authStore.isValid) return null;
      const result = await api.collection("clients").authRefresh();
      return result.record;
    },
  });
}

export const loginMutation = mutationOptions({
  mutationFn: () => api.collection("clients").authWithOAuth2({ provider: "google" }),
  onSuccess: () => {
    toast.success("Success", { description: "Logged in successfully" });
    window.location.reload();
  },
  onError: (error) => toast.error("Error", { description: error.message || "An error occurred" }),
});

export const logoutMutation = mutationOptions({
  mutationFn: async () => api.authStore.clear(),
  onSuccess: () => {
    toast.success("Success", { description: "Logged out successfully" });
    window.location.reload();
  },
  onError: (error) => toast.error("Error", { description: error.message || "An error occurred" }),
});

export const reviewMutation = mutationOptions({
  mutationFn: (data: { user: string; message: string; rating: string }) =>
    api.collection("reviews").create(data),
  onSuccess: () => toast.success("Thank you!", { description: "Your review has been submitted." }),
  onError: (error) => toast.error("Error", { description: error.message || "An error occurred" }),
});
