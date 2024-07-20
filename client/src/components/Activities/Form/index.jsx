import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import Button from "@/ui/Button";

import { ACT_TYPES } from "@/constants";
import styles from "./Form.module.scss";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = useCallback(
    (data) => {
      console.log(data);
      reset();
      toast.success("Posted successfull");
    },
    [reset],
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className={styles.addActivityForm}
    >
      <div className={styles.selectBlock}>
        <p className={styles.label}>Type:</p>

        <select
          id="type"
          {...register("type", { required: true })}
          className={styles.select}
        >
          {ACT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        {errors.type && (
          <p className={styles.errorText}>Please select a type.</p>
        )}
      </div>
      {errors?.type && (
        <p className={styles.errorText}>Please select a type.</p>
      )}
      <div className={styles.textareaBlock}>
        <textarea
          placeholder="Type..."
          className={styles.textarea}
          {...register("activity", { required: true })}
          name="activity"
        />
        {errors.activity && (
          <p className={styles.errorText}>Please enter an activity.</p>
        )}
      </div>
      <Button className={styles.submitButton} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
