import { Group } from "./Group";

export type GroupContextType = {
    groups: Group[];
    setGroup: (groups: Group[]) => void;
};
