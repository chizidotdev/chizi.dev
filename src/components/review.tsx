import { z } from "astro/zod";

import { Star } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { logoutMutation, reviewMutation, useLoggedInUser } from "@/lib/data";
import { ReviewsRatingOptions } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";

import { Login } from "./login";
import { Paragraph } from "./ui/text";

const queryClient = new QueryClient();

export function Review() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReviewForm />
    </QueryClientProvider>
  );
}

const formSchema = z.object({
  message: z.string().min(10, "Message must be at least 10 characters long"),
  rating: z.nativeEnum(ReviewsRatingOptions, { required_error: "Please select a rating" }),
});

function ReviewForm() {
  const { data: user, isPending } = useLoggedInUser();
  const { mutate: logout } = useMutation(logoutMutation);
  const {
    mutate: submitReview,
    isPending: isSubmitting,
    isSuccess,
    reset,
  } = useMutation(reviewMutation);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { message: "" },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    if (!user || isPending || isSubmitting) return;
    submitReview({ user: user.id, ...data });
  }

  if (!user) return <Login />;

  if (isSuccess) {
    return (
      <div className="animate-in fade-in slide-in-from-right-4 space-y-4 duration-500">
        <Paragraph className="text-muted-foreground">
          Your review has been submitted. Thank you for taking the time to share your feedback.
        </Paragraph>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => {
              form.reset();
              reset();
            }}
          >
            Leave another review
          </Button>
          <Button asChild>
            <a href="/">Back to home</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How was your experience?</FormLabel>
                <FormControl>
                  <StarRating value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Leave a feedback for others..."
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isPending || isSubmitting} type="submit">
            Submit Review
          </Button>
        </form>
      </Form>

      <Paragraph>
        <span>
          Signed in as <span className="text-muted-foreground">{user.email}</span>.&nbsp;
        </span>
        <button onClick={() => logout()} className="link">
          Log out?
        </button>
      </Paragraph>
    </>
  );
}

function StarRating({ value, onChange }: { value?: string; onChange: (value: string) => void }) {
  const [hovered, setHovered] = useState(0);
  const selected = value ? parseInt(value) : 0;

  return (
    <div className="flex gap-1" onMouseLeave={() => setHovered(0)}>
      {Object.values(ReviewsRatingOptions).map((val) => {
        const num = parseInt(val);
        const filled = num <= (hovered || selected);

        return (
          <button
            key={val}
            type="button"
            className="text-muted-foreground/40 transition-transform hover:scale-110"
            onMouseEnter={() => setHovered(num)}
            onClick={() => onChange(val)}
          >
            <Star className={`size-5 ${filled ? "fill-yellow-400 text-yellow-400" : ""}`} />
          </button>
        );
      })}
    </div>
  );
}
