import { useMutation, useQueryClient } from "@tanstack/react-query";
import AxiosSecure from "./AxiosSecure";

const updateQuestion = () => {
    const axiosSecure = AxiosSecure();

    // DELETE QUESTION PAPERS
    const queryClient = useQueryClient();
    const updateQueries = async ({ id, updateData }) => {
        console.log("delted hooks 9 no line", id, updateData)
        const res = await axiosSecure.patch(`/q-paper/update/${id}`, updateData);
        console.log(res.data, "11 no line")
        return res.data;

    }

    const { mutate: updateQuestionPaper } = useMutation({
        mutationKey: ["update-question"],
        mutationFn: ({ id, updateData }) => updateQueries({ id, updateData }),
        onSuccess: () => {
            8
            queryClient.invalidateQueries("update-question")
            toast.success("Update successfully")
        }
    })
    return { updateQuestionPaper }
}

export default updateQuestion