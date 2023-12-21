import { useForm } from 'react-hook-form';

const NewTasks = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle submitting the task data (e.g., send it to a server or store it in state)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-600">
          Title:
        </label>
        <input
          type="text"
          {...register('title', { required: true })}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-600">
          Description:
        </label>
        <textarea {...register('description')} className="mt-1 p-2 w-full border rounded-md"></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="deadline" className="block text-sm font-medium text-gray-600">
          Deadline:
        </label>
        <input type="date" {...register('deadline')} className="mt-1 p-2 w-full border rounded-md" />
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block text-sm font-medium text-gray-600">
          Priority:
        </label>
        <select {...register('priority')} className="mt-1 p-2 w-full border rounded-md">
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Create Task
      </button>
    </form>
  );
};

export default NewTasks;
