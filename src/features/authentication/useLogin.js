import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Login as loginApi } from "../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoginLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user", user.user]);
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Email or Password incorrect");
    },
  });

  return { login, isLoginLoading };
}
