import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { Login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoginLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log(user)
      navigate("/dashboard")
    
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Email or Password incorrect");
    },
  });

  return { login, isLoginLoading };
}
