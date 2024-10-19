import TaskManager from "./taskManagerClient";
import { getServerSideProps } from "./serverTasks";

export default async function Page() {
  const initialTasks = await getServerSideProps();

  return (
    <div>
      <TaskManager initialTasks={initialTasks} />
    </div>
  );
}
