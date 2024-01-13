import { decrement, increment } from "./redux/feature/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);

  const renderTally = () => {
    if (value > 0) {
      const dotsAndSlashes = Array.from({ length: value }, (_, index) => {
        return (index + 1) % 5 === 0 ? "/" : ".";
      });

      console.log(dotsAndSlashes);

      return dotsAndSlashes;
    }
  };

  return (
    <div className="h-screen width-full flex justify-center items-center">
      <div className=" bg-purple-400 p-10 rounded-lg">
        <div className="flex">
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 text-white p-2 rounded-md"
          >
            Decrement
          </button>
          <h1 className="text-5xl mx-10 text-pink-500">{value}</h1>
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 text-white p-2 rounded-md"
          >
            Increment
          </button>
        </div>
        <h1 className="text-5xl text-white">
          {/* {Array.from({ length: Math.abs(value / 5) }).map((_, index) => {
            const test = value % 5 === 0;
            console.log(test);

            return (
              <span key={index} className="box">
                /
              </span>
            );
          })} */}

          {renderTally()}
        </h1>
      </div>
    </div>
  );
}

export default App;
