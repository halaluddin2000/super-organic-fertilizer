import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import contactUsImg from "../../../assets/organic-gardening.jpg";

export default function ContactUs() {
  return (
    <section className="px-4 bg-[#EFF2F5] py-8 lg:py-16">
      <div className="container pb-8 lg:pb-24 mx-auto text-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl  py-4"
        >
          Contact Us
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <img
            src={contactUsImg}
            alt="img"
            className="w-full mt-5 rounded-lg h-full lg:max-h-[510px]"
          />
          <form action="#" className="flex flex-col gap-4 lg:max-w-sm">
            <Typography
              variant="h5"
              color="blue-gray"
              className="my-2 !text-base lg:!text-2xl"
            >
              Have Questions?
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-4 !text-2xl lg:!text-3xl"
            >
              Send Us a Massage
            </Typography>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Name
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="Name"
                name="name"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Your Email
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="name@email.com"
                  name="email"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Phone Number
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Phone Number"
                  name="number"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>

            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button
              className="w-full bg-green-700 hover:bg-primary"
              color="gray"
            >
              GET IN TOUCH
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
