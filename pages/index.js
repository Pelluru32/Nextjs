
//import { useEffect, useState } from "react"
import { MongoClient } from "mongodb"
import MeetupList from "../components/meetups/MeetupList"
import Head from "next/head";

/* const Dummy_Meetups=[{
    id:"m1",
    title:"A first meetup",
    image:"https://wallsdesk.com/wp-content/uploads/2016/05/Waterfalls-Photos.jpg",
    address:"some address 5, 1234 city",
    description:"this is first meetup"
},{
    id:"m2",
    title:"A second meetup",
    image:"https://wonderfulengineering.com/wp-content/uploads/2014/01/beautiful-wallpaper-39.jpg",
    address:"some address 9, dg city",
    description:"this is second meetup"
}] */

const Homepage = (props) => {

  return <>
  <Head>
    <title>React meetups</title>
    <meta name="description"
    content="Added the react meetup for the geeting all meetups"/>
  </Head>
  <MeetupList meetups={props.meetups}/>
  </> 
  
}

export async function getStaticProps(){
    const client = await MongoClient.connect(
        'mongodb+srv://gowtham:ISKiEd26F9jnQYlK@cluster0.cmkfkuw.mongodb.net/MeetUpDB?retryWrites=true&w=majority'
      );
      const db = client.db();
  
      const meetupsCollection = db.collection('meetups');

     const  meetups=await meetupsCollection.find().toArray()
      client.close()

    return {
        props:{
            meetups:meetups.map(meetup=>({
                title:meetup.title,
                address:meetup.address,
                description:meetup.description,
                image:meetup.image,
                id:meetup._id.toString()
            }))
        },
        revalidate:1
    }
}

/* export async function getServerSideProps(context){
    const req=context.req;
    const res=context.res  //if auth useful
    return {
        props:{
            meetups:Dummy_Meetups
        }
    }
} 
 */
export default Homepage
