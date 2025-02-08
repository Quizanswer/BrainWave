import { useMutation, useQueryClient } from "@tanstack/react-query";
import AxiosSecure from "./AxiosSecure";
import toast from "react-hot-toast";

const deletedQuestionFun = () => {
  const axiosSecure = AxiosSecure();
  // DELETE QUESTION PAPERS
  const queryClient = useQueryClient();
  const deletQuestions = async (id) => {
    console.log("delted hooks 9 no line", id);
    const res = await axiosSecure.delete(`/q-paper/delete`, { data: { id } });
    console.log(res.data, "11 no line");
    return res.data;
  };
  const { mutate: deletedQuestionPaper } = useMutation({
    mutationKey: ["delete-question"],
    mutationFn: (id) => deletQuestions(id),
    onSuccess: () => {
      queryClient.invalidateQueries("delete-question");
      toast.success("deleted successfully");
    },
  });

  return { deletedQuestionPaper };
};
export default deletedQuestionFun;
