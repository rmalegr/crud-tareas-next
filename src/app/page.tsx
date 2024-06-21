//Default home Page   
import TaskCard from "@/components/task-card";
import prisma from "@/lib/prisma"

async function HomePage() {
  const task = await prisma.task.findMany();

  return (
    <div className="grid grid-cols-3 gap-4">
      {
        task.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      }
    </div>
  )
}



export default HomePage
