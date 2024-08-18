import { ComposeProvider } from "./ComposeProvider";
import { UserProvider } from "./users";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return <ComposeProvider with={[UserProvider]}>{children}</ComposeProvider>;
};
