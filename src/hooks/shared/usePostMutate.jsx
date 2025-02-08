import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import useAxiosSecure from "../useAxios";
import toast from "react-hot-toast";

const usePostMutate = (route, onSuccess = () => {}, onError = () => {}) => {
  const Axios = useAxiosSecure();
  const token = Cookies.get("token");
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({

    mutationFn: (obj) =>
      Axios.post(route, obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    onSuccess: (mutatedData) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["test"] });
      queryClient.invalidateQueries({ queryKey: ["banners"] });
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      onSuccess();
      
    },
    onError: (err) => {
      // console.log(err);
      onError(err);
    },
  });

  return { mutate, isPending };
};

export default usePostMutate;
