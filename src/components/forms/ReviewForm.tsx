"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { reviewFormSchema } from "@/schemas/reviewFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import reviewForm from "@/lib/user-actions";

export function ReviewForm() {
  const form = useForm({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      stars: 5,
      content: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(reviewForm)} className="space-y-8">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="stars"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stars</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="input-focus"
                      placeholder={"5"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Input
                      className="input-focus"
                      placeholder="Your review content"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            Review
          </Button>
        </div>
      </form>
    </Form>
  );
}
