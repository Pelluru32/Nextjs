import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../components/meetups/MeetupDetails";
import Head from "next/head";

function MeetupDetail(props) {
  return <> 
  <Head>
    <title>{props.meetups.title}</title>
    <meta name="description"
    content={props.meetups.description}/>
  </Head>
  <MeetupDetails meetup={props.meetups}/> </>;
}

export default MeetupDetail;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://gowtham:ISKiEd26F9jnQYlK@cluster0.cmkfkuw.mongodb.net/MeetUpDB?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupid = context.params.meetupid;
  const client = await MongoClient.connect(
    "mongodb+srv://gowtham:ISKiEd26F9jnQYlK@cluster0.cmkfkuw.mongodb.net/MeetUpDB?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const selectedmeetup = await meetupsCollection.findOne({ _id:new ObjectId(meetupid)});
  client.close();
  return {
    props: {
      meetups:  {
        id: selectedmeetup._id.toString(),
        title: selectedmeetup.title,
        address: selectedmeetup.address,
        image: selectedmeetup.image,
        description: selectedmeetup.description,
      },
    },
    // revalidate: 1,
  };
}
