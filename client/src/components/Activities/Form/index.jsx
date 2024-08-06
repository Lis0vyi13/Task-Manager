import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { usePostCommentMutation } from "@/redux/features/tasks/TaskSlice";
import useUser from "@/hooks/useUser";

import Button from "@/ui/Button";

import { ACT_TYPES } from "@/constants";
import styles from "./Form.module.scss";
import { isTeamMember } from "@/utils/isTeamMember";

const Form = ({ task }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const user = useUser();
  const isMember = isTeamMember(task, user);
  const [postComment] = usePostCommentMutation();

  const onSubmitHandler = useCallback(
    async (data) => {
      try {
        await postComment({ data, id }).unwrap();
        reset();
        toast.success("Posted successfull");
      } catch (error) {
        toast.error(error.data.message);
      }
    },
    [id, postComment, reset],
  );
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.addActivityForm}>
      <div className={styles.selectBlock}>
        <p className={styles.label}>Type:</p>

        <select id="type" {...register("type", { required: true })} className={styles.select}>
          {ACT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        {errors.type && <p className={styles.errorText}>Please select a type.</p>}
      </div>
      {errors?.type && <p className={styles.errorText}>Please select a type.</p>}
      <div className={styles.textareaBlock}>
        <textarea
          placeholder="Type..."
          className={styles.textarea}
          {...register("activity", { required: true })}
          name="activity"
        />
        {errors.activity && <p className={styles.errorText}>Please enter an activity.</p>}
      </div>
      <div>
        <Button
          disabled={!user?.isAdmin && !isMember}
          title={!user?.isAdmin && !isMember ? "You need to be admin or member of task" : undefined}
          className={styles.submitButton}
          type="submit"
        >
          Leave a comment
        </Button>
      </div>
    </form>
  );
};

export default Form;
