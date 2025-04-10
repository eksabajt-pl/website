"use client";
import { useForm, useFormState } from "react-hook-form";
import { projectForm } from "@/lib/user-actions";
import { zodResolver } from "@hookform/resolvers/zod";
import ProjectFormSchema from "@/schemas/projectFormSchema";
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
const UserProjectForm = () => {
  const form = useForm({
    resolver: zodResolver(ProjectFormSchema),
    defaultValues: {
      email: "",
      type: "Landing",
      price: 1000,
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
          await projectForm(data);
          form.reset({ email: "" });
        })}
        className="space-y-8  "
      >
        <div className="grid gap-4 ">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
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
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="input-focus"
                      placeholder={"250"}
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
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="block w-full p-2 border border-gray-300 bg-primary-foreground text-foreground rounded-md shadow-sm"
                    >
                      <option value="">Wybierz opcję</option>
                      <option value="cheap">Cheap</option>
                      <option value="landing">Landing</option>
                    </select>
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
export default UserProjectForm;
