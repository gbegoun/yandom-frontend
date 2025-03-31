import { GroupHeader } from "./GroupHeader";
import { TaskList } from "./TaskList";
import {GroupFooter} from "./GroupFooter";

export const GroupPrivew = ({ columns, group }) => {

    return (
        <div key={group._id}>
            <GroupHeader title={group.title} color={group.color} />
            <TaskList group={group} columns={columns} />
            <GroupFooter group={group} columns={columns} />
        </div>
    );
};
