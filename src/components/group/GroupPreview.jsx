import { GroupHeader } from "./header/GroupHeader";
import { TaskList } from "../task/TaskList";
import {GroupFooter} from "./GroupFooter";

export const GroupPreview = ({ columns, group }) => {

    return (
        <div key={group._id}>
            <GroupHeader title={group.title} color={group.color} columns={columns} />
            <TaskList group={group} columns={columns} />
            <GroupFooter group={group}/>
        </div>
    );
};
