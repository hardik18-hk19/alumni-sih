"use client";

import InputComponents from "@/components/FormElements/InputComponent";
import SelectComponent from "@/components/FormElements/SelectComponent";
import { registerNewUser } from "@/services/register";
import { regestratinFormControls } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
const initialFormData = {
  name: "",
  email: "",
  password: "",
  role: "User",
  course: "BTech",
  profession: "Engineer",
  batch: "2020",
  location: "",
};

const isRegistered = false;
export default function Register() {
  const [formData, setFormData] = useState(initialFormData);
  console.log(formData);
  function isFormValid() {
    return formData &&
      formData.name &&
      formData.name.trim() !== "" &&
      formData &&
      formData.email &&
      formData.email.trim() !== "" &&
      formData &&
      formData.password &&
      formData.password.trim() !== "" &&
      formData &&
      formData.location &&
      formData.location.trim() !== "" &&
      formData &&
      formData.name &&
      formData.profession.trim() !== "" &&
      formData &&
      formData.name &&
      formData.course.trim() !== ""
      ? true
      : false;
  }
  async function handelRegisterOnSubmit() {
    const data = await registerNewUser(formData);
    console.log(data);
  }
  const router = useRouter();
  return (
    <div className="bg-white relative">
      <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto mac-w-7xl xl:px-5 lg:flex-row ">
        <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
          <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="flex flex-col items-center justify-center pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10">
              <p className="w-full text-4xl font-medium text-center font-serif">
                {isRegistered
                  ? "Registered Successfull !"
                  : "SignUp for an account"}{" "}
              </p>
              {isRegistered ? (
                <button className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide">
                  Login
                </button>
              ) : (
                <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                  {regestratinFormControls.map((controlItem) =>
                    controlItem.componentType === "input" ? (
                      <InputComponents
                        type={controlItem.type}
                        placeholder={controlItem.palceholder}
                        label={controlItem.label}
                        onChange={(event) => {
                          setFormData({
                            ...formData,
                            [controlItem.id]: event.target.value,
                          });
                        }}
                        value={formData[controlItem.id]}
                      />
                    ) : controlItem.componentType === "select" ? (
                      <SelectComponent
                        options={controlItem.options}
                        label={controlItem.label}
                        onChange={(event) => {
                          setFormData({
                            ...formData,
                            [controlItem.id]: event.target.value,
                          });
                        }}
                        value={formData[controlItem.id]}
                      />
                    ) : null
                  )}
                  <button
                    className="disabled:opacity-50 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide"
                    disabled={!isFormValid}
                    onClick={handelRegisterOnSubmit}
                  >
                    Register
                  </button>
                  <div className="flex flex-col gap-2">
                    <p> Already a user !</p>
                    <button
                      className="inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide"
                      onClick={() => router.push("/login")}
                    >
                      Login{" "}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
