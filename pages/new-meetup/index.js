import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import Head from "next/head";

const NewMeetup = () => {
    const router=useRouter()
    async function onAddMeetupHandler(data){
        const response=await fetch("/api/new-meetup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        const dat=await response.json()
        router.push("/")
    }
  return<>
  <Head>
    <title>Add New meetups</title>
    <meta name="description"
    content="Add yor own meet up to add as a Item
    "/>
  </Head>
  <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
  
  </> 
}

export default NewMeetup
