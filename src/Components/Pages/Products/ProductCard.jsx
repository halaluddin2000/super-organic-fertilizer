import "./Cards/card.css";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

function ProductCard({ cards }) {
  return (
    <Card className="w-full bg-slate-200 max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img src={cards.img} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {cards.title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {cards.body}
        </Typography>
        <a href="#" className="inline-block">
          <Button
            variant="text"
            className="flex hover:bg-primary p-2 items-center gap-2"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>

    // <Card className="bg-white w-96 mt-6 px-1 shadow-lg">
    //   <CardHeader className="card" floated={false} color="blue-gray">
    //     <img className="p-1" src={cards.img} alt="ui/ux review check" />
    //   </CardHeader>
    //   <CardBody>
    //     <div className="flex items-center justify-between">
    //       <Typography
    //         variant="h5"
    //         color="blue-gray"
    //         className="font-semibold text-2xl"
    //       >
    //         {cards.title}
    //       </Typography>
    //       <Typography
    //         color="blue-gray"
    //         className="flex items-center gap-1.5 font-normal"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="currentColor"
    //           className="-mt-0.5 h-5 w-5 text-yellow-700"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //         5.0
    //       </Typography>
    //     </div>
    //     <Typography className="text-gray-500 mt-3" color="gray">
    //       {cards.body}
    //     </Typography>
    //   </CardBody>
    //   <a href="#" className="inline-block px-2 pb-3">
    //     <Button
    //       variant="text"
    //       className="flex hover:bg-primary  mt-6 items-center gap-2"
    //     >
    //       Learn More
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         strokeWidth={2}
    //         className="h-4 w-4"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    //         />
    //       </svg>
    //     </Button>
    //   </a>
    // </Card>
  );
}

export default ProductCard;
