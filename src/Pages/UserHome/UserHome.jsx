import useAuth from "../../layout/Hooks/useAuth";
import LoadTask from "./LoadTask/LoadTask.JSX";




const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
               <h2 className="text-3xl">
                <span>Hi, Welcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <LoadTask></LoadTask>


        </div>
    );
};

export default UserHome;