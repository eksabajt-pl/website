"use client";

import { useForm, useFormState } from "react-hook-form";
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
import { reviewForm } from "@/lib/user-actions";
import { Loader2 } from "lucide-react";

export function ReviewForm() {
  const form = useForm({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      stars: 5,
      content: "",
    },
  });

  const formState = useFormState({
    control: form.control,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(async (data) => {
          await reviewForm(data);
          form.reset({ stars: 5 });
        })}
        className="space-y-8  "
      >
        <div className="grid gap-4 ">
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
            {formState.isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
