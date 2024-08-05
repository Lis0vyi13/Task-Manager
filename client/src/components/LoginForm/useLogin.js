import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

import { useLoginMutation, useRegisterMutation } from "@/redux/features/auth/AuthSlice";
import useActions from "@/hooks/useActions";
import { setCookie } from "@/utils/setCookie";

import { toast } from "sonner";

const actions = {
  login: useLoginMutation,
  register: useRegisterMutation,
};

const useLogin = ({ isSignUp }) => {
  const userAction = isSignUp ? "register" : "login";

  const [action, { isLoading }] = actions[userAction]();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { logIn, setUser } = useActions();

  const onSubmit = useCallback(
    async (data) => {
      if (isSignUp) {
        try {
          const result = await action(data).unwrap();
          setCookie("__u", JSON.stringify(result));
          logIn();
          setUser(result);
          reset();

          toast.success("You've registered successfully");
        } catch (error) {
          console.log(error);
          toast.error(error?.data?.message || error.message);
        }
      } else {
        try {
          const result = await action(data).unwrap();
          setCookie("__u", JSON.stringify(result));
          logIn();
          setUser(result);
          reset();

          toast.success("You've logged in successfully");
        } catch (error) {
          console.log(error);
          toast.error(error?.data?.message || error.message);
        }
      }
    },
    [action, isSignUp, logIn, reset, setUser],
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
  return { handleSubmit, onSubmit, control, errors, isLoading };
};

export default useLogin;
