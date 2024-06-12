"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMultiplestepForm } from "hooks/useMultiplestepForm";
import { AnimatePresence } from "framer-motion";
import UserInfoForm from "@/components/UserInfoForm";
import PlanForm from "@/components/PlanForm";
import LocationForm from "@/components/LocationForm";
import ConditionSelectionForm from "@/components/ConditionSelectionForm";
import CarSelectionForm from "@/components/CarSelectionForm";
import FinalStep from "@/components/FinalStep";
import SuccessMessage from "@/components/SuccessMessage";
import SideBar from "@/components/SideBar";
import axios from "axios";

export type FormItems = {
  name: string;
  email: string;
  phone: string;
  message: string;
  marca: "Audi" | "Volkswagen" | "Skoda" | "Seat" | "Cupra";
  selectedLocation?: number;
  carCondition?: string;
  carModel?: string;
};

const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
  message: "",
  marca: "Audi",
  selectedLocation: 1,
  carCondition: "noua",
  carModel: "",
};

export default function Home() {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const {
    previousStep,
    nextStep,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    steps,
    goTo,
    showSuccessMsg,
  } = useMultiplestepForm(6); // Updated step count

  function updateForm(fieldToUpdate: Partial<FormItems>) {
    const { name, email, phone, message } = fieldToUpdate;

    if (name && name.trim().length < 3) {
      setErrors((prevState) => ({
        ...prevState,
        name: "Name should be at least 3 characters long",
      }));
    } else if (name && name.trim().length > 15) {
      setErrors((prevState) => ({
        ...prevState,
        name: "Name should be no longer than 15 characters",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        name: "",
      }));
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Please enter a valid email address",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: "",
      }));
    }

    if (phone && !/^[0-9]{10}$/.test(phone)) {
      setErrors((prevState) => ({
        ...prevState,
        phone: "Please enter a valid 10-digit phone number",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        phone: "",
      }));
    }

    if (message && message.trim().length < 3) {
      setErrors((prevState) => ({
        ...prevState,
        message: "Message should be at least 3 characters long",
      }));
    } else if (message && message.trim().length > 15) {
      setErrors((prevState) => ({
        ...prevState,
        message: "Message should be no longer than 15 characters",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        message: "",
      }));
    }
    setFormData({ ...formData, ...fieldToUpdate });
  }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error)) {
      return;
    }
    if (isLastStep) {
      try {
        await axios.post("/api/send", formData); // Adjust the API endpoint as necessary
        nextStep();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      nextStep();
    }
  };

  return (
    <div
      className={`relative m-1 flex h-[570px] w-11/12 max-w-4xl justify-between rounded-lg border border-neutral-700 bg-[#262626] p-4 max-md:h-[90vh] max-md:w-full`}
    >
      {!showSuccessMsg ? (
        <SideBar currentStepIndex={currentStepIndex} goTo={goTo} />
      ) : (
        ""
      )}
      <main
        className={`${showSuccessMsg ? "w-full" : "mt-12 w-full md:mt-5 md:w-[65%]"}`}
      >
        {showSuccessMsg ? (
          <AnimatePresence mode="wait">
            <SuccessMessage />
          </AnimatePresence>
        ) : (
          <form
            onSubmit={handleOnSubmit}
            className="flex h-full w-full flex-col justify-between"
          >
            <AnimatePresence mode="wait">
              {currentStepIndex === 0 && (
                <PlanForm key="step1" {...formData} updateForm={updateForm} />
              )}
              {currentStepIndex === 1 && (
                <LocationForm
                  key="step2"
                  {...formData}
                  updateForm={updateForm}
                  selectedLocation={formData.selectedLocation}
                />
              )}
              {currentStepIndex === 2 && (
                <ConditionSelectionForm
                  key="step3"
                  {...formData}
                  updateForm={updateForm}
                  nextStep={nextStep} // Pass nextStep here
                />
              )}
              {currentStepIndex === 3 && (
                <CarSelectionForm
                  key="step4"
                  {...formData}
                  updateForm={updateForm}
                  nextStep={nextStep} // Pass nextStep here
                />
              )}
              {currentStepIndex === 4 && (
                <UserInfoForm
                  key="step5"
                  {...formData}
                  updateForm={updateForm}
                  errors={errors}
                />
              )}
              {currentStepIndex === 5 && (
                <FinalStep
                  key="step6"
                  {...formData}
                  goTo={goTo}
                  onSubmit={handleOnSubmit} // Ensure no arguments are passed
                />
              )}
            </AnimatePresence>
            <div className="mt-3 flex w-full items-center justify-between px-1">
              <div>
                <Button
                  onClick={previousStep}
                  type="button"
                  variant="ghost"
                  className={`${
                    isFirstStep
                      ? "invisible"
                      : "visible p-0 text-neutral-200 hover:text-white"
                  }`}
                >
                  Înapoi
                </Button>
              </div>
              <div className="flex items-center">
                <div className="relative transition-all duration-300 ease-in-out after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 after:transition hover:scale-[1.05] active:scale-[0.95]">
                  <Button
                    type="submit"
                    className="relative rounded-xl border border-black/20 bg-neutral-900 text-neutral-200 shadow-input shadow-black/10 hover:text-white"
                  >
                    {isLastStep ? "Trimite" : "Următorul pas"}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}
