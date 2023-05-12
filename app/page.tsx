import LogIn from "./LogIn";
import { pb } from "./db";
export default async function Home() {
  
  if (!pb.authStore.isValid)
    return (
      <div>
        <p>You are not logged in</p>
        <LogIn />
      </div>
    );

  return <div>You are logged in</div>;
}
