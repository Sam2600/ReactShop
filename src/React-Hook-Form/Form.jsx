import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

export const Form = () => {
  renderCount++;

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      social: {
        facebook: "",
        twitter: "",
      },
      phone: ["", ""],
    },
  });

  const handleClick = (e) => {
    e.preventDefault()
    getValues();
  };

  return (
    <section className="mt-10 w-full">
      <h1 className="text-3xl mb-10 text-center">
        Register Form {renderCount / 2}
      </h1>
      <hr />

      <form className="flex flex-wrap items-center my-5 w-6/12 m-auto">
        <div className="flex flex-col my-3 w-6/12 gap-1 px-5 me-10">
          <label htmlFor="user">Username:</label>

          <input
            required
            type="text"
            id="user"
            className="bg-slate-300 rounded-md px-3 py-1"
            {...register("username", {
              required: {
                value: true,
                message: "Username field is required",
              },
              minLength: {
                value: 5,
                message: "Username must be minimal length of 5",
              },
              validate: {
                badName: (fieldsInput) => {
                  return (
                    !fieldsInput.includes("fuck") || "Invalid uername setting!"
                  );
                },
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name can only contain letters and spaces",
              },
            })}
          />

          <p className="text-red-700">{errors.username?.message}</p>
        </div>

        <div className="flex flex-col my-3 w-6/12 gap-1 px-5">
          <label htmlFor="email">Email:</label>

          <input
            required
            type="email"
            id="email"
            className="bg-slate-300 border rounded-md px-3 py-1"
            {...register("email", {
              required: "Email field is required",
            })}
          />

          <p className="text-red-700">{errors.email?.message}</p>
        </div>

        <div className="flex flex-col my-3 w-6/12 gap-1 px-5">
          <label htmlFor="channel">Channel:</label>

          <input
            required
            type="text"
            className="bg-slate-300 border rounded-md px-3 py-1"
            id="channel"
            {...register("channel", {
              required: "Channel field is required",
            })}
          />

          <p className="text-red-700">{errors.channel?.message}</p>
        </div>

        <div className="flex flex-col my-3 w-6/12 gap-1 px-5">
          <label htmlFor="channel">FaceBook:</label>

          <input
            required
            type="text"
            className="bg-slate-300 border rounded-md px-3 py-1"
            id="channel"
            {...register("social.facebook", {
              required: "Facebook field is required",
            })}
          />
          <p className="text-red-700">{errors.social?.facebook?.message}</p>
        </div>

        <div className="flex flex-col my-3 w-6/12 gap-1 px-5">
          <label htmlFor="channel">Twitter:</label>

          <input
            required
            type="text"
            className="bg-slate-300 border rounded-md px-3 py-1"
            id="channel"
            {...register("social.twitter", {
              required: "Twitter field is required",
            })}
          />
          <p className="text-red-700">{errors.social?.twitter?.message}</p>
        </div>

        <div className="flex flex-col my-3 w-6/12 gap-1 px-5">
          <label htmlFor="primary-phone">Primary Phone Number:</label>

          <input
            required
            type="text"
            className="bg-slate-300 border rounded-md px-3 py-1"
            id="primary-phone"
            {...register("phone.0", {
              required: "Primary phone number is required",
            })}
          />
          <p className="text-red-700">{errors.phone?.[0]?.message}</p>
        </div>

        <div className="flex flex-col my-3 w-6/12 gap-1 px-5">
          <label htmlFor="secondary-phone">Secondary Phone Number:</label>

          <input
            required
            type="text"
            className="bg-slate-300 border rounded-md px-3 py-1"
            id="secondary-phone"
            {...register("phone.1", {
              required: "Secondary phone number is required",
            })}
          />
          <p className="text-red-700">{errors.phone?.[1]?.message}</p>
        </div>

        <div className="flex flex-col my-3 w-6/12 gap-1 px-5">
          <label htmlFor="age">Age</label>

          <input
            required
            type="number"
            className="bg-slate-300 border rounded-md px-3 py-1"
            id="age"
            {...register("age", {
              valueAsNumber: true,

              required: {
                value: true,
                message: "Age is required field",
              },

              min: {
                value: 18,
                message: "Age must be 18 years minimum to register.",
              },
            })}
          />
          <p className="text-red-700">{errors.age?.message}</p>
        </div>

        <div className="flex flex-col my-3 w-6/12 gap-1 px-5">
          <label htmlFor="dob">Date of Birth</label>

          <input
            required
            type="date"
            className="bg-slate-300 border rounded-md px-3 py-1"
            id="dob"
            {...register("date", {
              valueAsDate: true,
              required: {
                value: true,
                message: "Date of birth field is required",
              },
            })}
          />
          <p className="text-red-700">{errors.date?.message}</p>
        </div>

        <div className="flex flex-col w-full mt-4 gap-1 px-5">
          <button
            onClick={handleSubmit}
            className="p-1 mt-4 w-full m-auto bg-blue-300 rounded-md border transition-all duration-300 hover:shadow-xl hover:bg-white hover:border-blue-500 hover:text-blue-500 hover:-translate-y-2"
          >
            Register
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </section>
  );
};
