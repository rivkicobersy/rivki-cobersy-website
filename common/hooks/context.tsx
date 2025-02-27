import { createContext, useCallback, useState, ReactNode } from "react";

export interface InlineAlert {
  title: string;
  message: string;
  type: "success" | "error" | "info";
}

export interface NotificationsContextType {
  inlineAlert: InlineAlert | null;
  addInlineAlert: (type: "success" | "error" | "info", title: string, message: string) => void;
  addNotification: (type: "success" | "error" | "info", title: string, message: string) => void;
}

const NotificationsContext = createContext<NotificationsContextType>({
  inlineAlert: null,
  addInlineAlert: () => {},
  addNotification: () => {},
});

interface NotificationsProviderProps {
  children: ReactNode;
}

const NotificationsProvider = ({ children }: NotificationsProviderProps) => {
  const [inlineAlert, setInlineAlert] = useState<InlineAlert | null>(null);

  const closeAlert = useCallback(() => {
    setInlineAlert(null);
  }, [setInlineAlert]);

  const addInlineAlert = useCallback(
    (type: "success" | "error" | "info", title: string, message: string) => {
      setInlineAlert({
        title,
        message,
        type,
      });
      setTimeout(() => {
        closeAlert();
      }, 5000);
    },
    [setInlineAlert, closeAlert]
  );

  return (
    <NotificationsContext.Provider value={{ inlineAlert, addInlineAlert, addNotification: addInlineAlert }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export { NotificationsContext, NotificationsProvider };
