import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const NewTasks = () => {
  const { handleSubmit, register } = useForm();
    //  
    const onSubmit = async (data) => {
      const Tasks = {
        title: data.title,
        description: data.description,
        deadline: data.deadline,
        priority: data.priority,
      };
  
      console.log(Tasks);
  
      try {
        // send data to the server using Axios
        const response = await axios.post(`http://localhost:5000/Tasks`, Tasks, {
          withCredentials: true,
        });
        console.log(response.data);
  
        if (response.data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Successfully added',
            icon: 'success',
            confirmButtonText: 'Done',
          });
        } else {
          // Handle error case
          Swal.fire({
            title: 'Error!',
            text: 'Failed to add task',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle other error cases
        Swal.fire({
          title: 'Error!',
          text: 'An unexpected error occurred',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    };
  
    // 
  


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-300 max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        <label htmlFor="title" name="title" className="block text-sm font-medium text-gray-600">
          Title:
        </label>
        <input
          type="text"
          {...register('title', { required: true })}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" name="description" className="block text-sm font-medium text-gray-600">
          Description:
        </label>
        <textarea {...register('description')} className="mt-1 p-2 w-full border rounded-md"></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="deadline" name="deadline" className="block text-sm font-medium text-gray-600">
          Deadline:
        </label>
        <input type="date" {...register('deadline')} className="mt-1 p-2 w-full border rounded-md" />
      </div>

      <div className="mb-4">
        <label htmlFor="priority" name="priority" className="block text-sm font-medium text-gray-600">
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
