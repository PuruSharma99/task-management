export async function getServerSideProps() {
  return [
    {
      id: 1,
      title: "Sample Task One",
      description: "Sample task one with high priority",
      priority: "high",
      completed: false,
    },
    {
      id: 2,
      title: "Sample Task Two",
      description: "Sample task two with medium priority",
      priority: "medium",
      completed: false,
    },
    {
      id: 3,
      title: "Sample Task Three",
      description: "Sample task three with low priority",
      priority: "low",
      completed: true,
    },
  ];
}
