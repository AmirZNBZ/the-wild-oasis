import { HiArrowRightOnRectangle } from "react-icons/hi2";

import { useLogout } from "./useLogout";
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLogoutLoading } = useLogout();
  return (
    <ButtonIcon disabled={isLogoutLoading} onClick={logout}>
      {!isLogoutLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
