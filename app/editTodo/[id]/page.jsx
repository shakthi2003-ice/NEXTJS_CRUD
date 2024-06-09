import EditTodoForm from "@/components/EditTodoForm";

const getById = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/todo/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export default async function EditTodo({ params }) {
  const { id } = params;
  const { todo } = await getById(id);
  const { title, description } = todo;
  return <EditTodoForm id={id} title={title} description={description} />;
}
