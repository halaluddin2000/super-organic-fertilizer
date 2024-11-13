import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import "./BenefitCard.css";

function BenefitCard({ cards }) {
  return (
    <Card className="benefitsCard mt-6 rounded-lg w-90">
      <CardHeader
        color="blue-gray"
        className="bg-primary mt-2 relative h-62 rounded-lg"
      >
        <img className="justify-center" src={cards.img} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 text-2xl text-center font-bold"
        >
          {cards.title}
        </Typography>
        <Typography className="text-center text-gray-500">
          {cards.body}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default BenefitCard;
