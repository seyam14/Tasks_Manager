/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, Controller } from 'react-hook-form';
import Swal from 'sweetalert2';
import {  useParams } from 'react-router-dom';


const updateTasks = () => {
    const { id } = useParams();
    const { control, handleSubmit, setValue, register, formState: { errors } } = useForm();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/Tasks/${id}`);
          const taskData = await response.json();
          // Set the task data to the form fields
          setValue('title', taskData.title);
          setValue('description', taskData.description);
          setValue('priority', taskData.priority); // Set priority field
          // Set other fields similarly
        } catch (error) {
          console.error('Error fetching task data:', error);
        }
      };
  
      fetchData();
    }, [id, setValue]);
  
    const handleUpdateTask = async (data) => {
      data.deadline = data.deadline || null;
  
      const response = await fetch(`http://localhost:5000/Tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const responseData = await response.json();
      console.log(responseData);
  
      if (responseData.modifiedCount > 0) {
        Swal.fire({
          title: 'Success!',
          text: 'Task updated successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      }
    };
  
    return (
      <div className="w-full p-10">
        <div className="bg-gray-300 p-14 rounded-md">
          <h2 className="text-3xl font-extrabold text-center mb-5">Update Task</h2>
          <form onSubmit={handleSubmit(handleUpdateTask)}>
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Task Title</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Task Title"
                    {...register('title', { required: 'Task Title is required' })}
                    className={`input input-bordered w-full ${errors.title ? 'border-red-500' : ''}`}
                  />
                </label>
                {errors.title && (
                  <span className="text-red-500 text-xs mt-1">{errors.title.message}</span>
                )}
              </div>
            </div>
  
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Description"
                    {...register('description', { required: 'Description is required' })}
                    className={`input input-bordered w-full ${errors.description ? 'border-red-500' : ''}`}
                  />
                </label>
                {errors.description && (
                  <span className="text-red-500 text-xs mt-1">{errors.description.message}</span>
                )}
              </div>
            </div>
  
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Priority Level</span>
                </label>
                <label className="select">
                  <Controller
                    control={control}
                    name="priority"
                    render={({ field }) => (
                      <select
                        {...field}
                        className={`select w-full ${errors.priority ? 'border-red-500' : ''}`}
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    )}
                    rules={{ required: 'Priority is required' }}
                  />
                </label>
                {errors.priority && (
                  <span className="text-red-500 text-xs mt-1">{errors.priority.message}</span>
                )}
              </div>
            </div>
  
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">deadline</span>
                </label>
                <label className="input-group w-full">
                  <Controller
                    control={control}
                    name="deadline"
                    render={({ field }) => (
                      <DatePicker
                        selected={field.value}
                        onChange={(date) => setValue('deadline', date)}
                        placeholderText="deadline"
                        className={`input input-bordered w-full ${errors.deadline ? 'border-red-500' : ''}`}
                      />
                    )}
                  />
                </label>
                {errors.datelines && (
                  <span className="text-red-500 text-xs mt-1">{errors.deadline.message}</span>
                )}
              </div>
            </div>
  
            <input
              type="submit"
              value="Update Task"
              className="bg-slate-800 text-white hover:bg-slate-600 btn btn-block"
            />
          </form>
        </div>
      </div>
    );
  };

export default updateTasks;