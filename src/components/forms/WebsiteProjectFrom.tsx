"use client";
import { useForm, useFormState } from "react-hook-form";
import { WebsiteprojectForm } from "@/lib/admin-actions";
import { zodResolver } from "@hookform/resolvers/zod";
import WebsiteProjectSchema from "@/schemas/WebsiteProjectSchema";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const WebsiteProjectForm = () => {
  const form = useForm({
    resolver: zodResolver(WebsiteProjectSchema),
    defaultValues: {
      Title: "",
      Description: "",
      Link: "",
    },
  });
  const [mount, setMount] = useState(true);
  const formState = useFormState({
    control: form.control,
  });
  useEffect(() => {
    if (mount) {
      console.log("boom");
      setMount(!mount);
    }
  }, [mount]);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(async (data) => {
          await WebsiteprojectForm(data);
          form.reset({ Title: "" });
        })}
        className="space-y-8  "
      >
        <div className="grid gap-4 ">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="Title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="input-focus"
                      placeholder={"example@gmail.com"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="Description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="input-focus"
                      placeholder={"Description"}
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
              name="Link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Link</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="input-focus"
                      placeholder={"Link"}
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
};
export default WebsiteProjectForm;
