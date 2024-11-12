import Img from "../../assets/image.jpg";
const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-purple-600 my-8">
        This is Home
      </h1>
      <img
        className="rounded-2xl ml-[300px] border-4 border-purple-500 "
        src={Img}
        alt="Image"
      />
    </div>
  );
};

export default Home;
