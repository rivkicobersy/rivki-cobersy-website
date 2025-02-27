import { useCallback, useContext } from "react";
import { NotificationsContext, NotificationsContextType } from "./context";

const useNotifications = (): NotificationsContextType => useContext(NotificationsContext);

const useAlerts = () => {
  const { addInlineAlert } = useNotifications();

  const alertSuccess = useCallback((message = "") => addInlineAlert("success", "Success", message), [addInlineAlert]);
  const alertError = useCallback((message = "") => addInlineAlert("error", "Error", message), [addInlineAlert]);
  const alertInfo = useCallback((message = "") => addInlineAlert("info", "Info", message), [addInlineAlert]);
  const onError = useCallback((error: { message: string }) => error && alertError(error.message), [alertError]);

  return { alertSuccess, alertError, onError, alertInfo };
};

export { useAlerts, useNotifications };
