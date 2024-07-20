import useActions from "@/hooks/useActions";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const useLogin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const { logIn } = useActions();

  const onSubmit = useCallback(
    (data) => {
      reset();
      logIn(data);
      toast.success("You've logged in successfully");
    },
    [logIn, reset],
  );

  useEffect(() => {
    const onEnterHandler = (e) => {
      if (e.key === "Enter" && document.activeElement.tagName === "INPUT") {
        handleSubmit(onSubmit)();
      }
    };
    document.addEventListener("keydown", onEnterHandler);
    return () => document.removeEventListener("keydown", onEnterHandler);
  }, [handleSubmit, onSubmit]);
  return { handleSubmit, onSubmit, register, errors };
};

export default useLogin;
