"use client";
import { useState, useCallback } from "react";
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
import Header from "@/components/Header";
import { useToast } from "@/components/ui/use-toast";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Footer from "@/components/Footer";

export type FormItems = {
  name: string;
  email: string;
  phone: string;
  message: string;
  marca: "Audi" | "Volkswagen" | "Skoda" | "Seat" | "Cupra";
  selectedLocation?: number;
  carCondition?: string;
  carModel?: string;
  acceptTerms: boolean; // Added acceptTerms field
};

const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
  message: "",
  marca: "Audi",
  selectedLocation: 1,
  carCondition: "",
  carModel: "",
  acceptTerms: false, // Initial value for acceptTerms
};

export default function Home() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { toast } = useToast();
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const {
    previousStep,
    nextStep,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    isFormStep,
    steps,
    goTo,
    showSuccessMsg,
  } = useMultiplestepForm(6); // Updated step count

  const updateForm = useCallback((fieldToUpdate: Partial<FormItems>) => {
    const { name, email, phone, message, acceptTerms } = fieldToUpdate;

    if (name && name.trim().length < 3) {
      setErrors((prevState) => ({
        ...prevState,
        name: "Numele să fie minim 3 caractere",
      }));
    } else if (name && name.trim().length > 30) {
      setErrors((prevState) => ({
        ...prevState,
        name: "Numele să fie maxim 30 de caractere",
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
        email: "Introduceți un email valid",
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
        phone: "Introduceți un număr de telefon valid de 10 cifre",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        phone: "",
      }));
    }

    if (message && message.trim().length < 0) {
      setErrors((prevState) => ({
        ...prevState,
      }));
    } else if (message && message.trim().length > 150) {
      setErrors((prevState) => ({
        ...prevState,
        message: "Mesajul nu trebuie să depășească 150 de caractere",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        message: "",
      }));
    }

    if (acceptTerms !== undefined) {
      if (!acceptTerms) {
        setErrors((prevState) => ({
          ...prevState,
        }));
      } else {
        setErrors((prevState) => ({
          ...prevState,
          acceptTerms: "",
        }));
      }
    }

    setFormData((prev) => ({ ...prev, ...fieldToUpdate }));
  }, []);

  const handleReCaptchaSubmit = async () => {
    if (!executeRecaptcha) {
      console.log("not available to execute recaptcha");
      return;
    }

    const gRecaptchaToken = await executeRecaptcha("inquirySubmit");

    const response = await axios({
      method: "post",
      url: "/api/recaptchaSubmit",
      data: {
        gRecaptchaToken,
      },
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    if (response?.data?.success === true) {
      console.log(`Success with score: ${response?.data?.score}`);
    } else {
      console.log(`Failure with score: ${response?.data?.score}`);
    }
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error)) {
      return;
    }

    if (currentStepIndex === 3 && !formData.carModel) {
      toast({
        title: "Nu ați selectat nici o mașină!",
        description: "Vă rugăm să alegeți un model",
        variant: "destructive",
      });
      setErrors((prevState) => ({
        ...prevState,
      }));
      return;
    }

    if (currentStepIndex === 4 && !formData.acceptTerms) {
      toast({
        title: "Acceptați termenii și condițiile!",
        description: "Trebuie să acceptați prelucrarea datelor GDPR.",
        variant: "destructive",
      });
      setErrors((prevState) => ({
        ...prevState,
      }));
      return;
    }

    if (isLastStep) {
      try {
        await handleReCaptchaSubmit();
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
    <div className="flex h-full flex-col-reverse items-center justify-center gap-y-8 pt-8 xl:mt-0 xl:flex-col xl:pb-20">
      {/* Header */}
      <Header />
      {/* Main content */}
      <div
        className={`relative m-1 mx-auto flex w-[40%] max-w-4xl md:h-[640px] ${currentStepIndex === 3 || currentStepIndex === 4 ? "h-screen xs:max-md:h-[90vh]" : currentStepIndex === 0 || 1 || 2 ? "h-[80vh]" : ""} justify-between rounded-lg border border-neutral-700 bg-background p-4 max-md:w-full`}
      >
        {!showSuccessMsg ? (
          <SideBar currentStepIndex={currentStepIndex} goTo={goTo} />
        ) : (
          ""
        )}
        <main
          className={`${showSuccessMsg ? "w-full" : "mt-16 w-full md:mt-5 md:w-[65%]"} xl:pr-6`}
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
                  <PlanForm
                    key="step1"
                    {...formData}
                    updateForm={updateForm}
                    nextStep={nextStep}
                  />
                )}
                {currentStepIndex === 1 && (
                  <LocationForm
                    key="step2"
                    {...formData}
                    updateForm={updateForm}
                    selectedLocation={formData.selectedLocation}
                    nextStep={nextStep}
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
                    nextStep={nextStep}
                    errors={errors}
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
              <div className="flex w-full items-center justify-between px-1">
                <div>
                  <Button
                    onClick={previousStep}
                    type="button"
                    variant="ghost"
                    className={`${
                      isFirstStep
                        ? "invisible"
                        : "visible p-0 text-neutral-200 hover:text-white"
                    } font-bold`}
                  >
                    Înapoi
                  </Button>
                </div>
                <div className="flex items-center">
                  <div
                    className={`${
                      isFormStep || isLastStep
                        ? "visible"
                        : "invisible"
                    } relative transition-all duration-300 ease-in-out after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 after:transition hover:scale-[1.05] active:scale-[0.95]`}
                  >
                    <Button
                      type="submit"
                      className="relative rounded-xl border border-black/20 bg-background-accent font-bold text-neutral-200 shadow-input shadow-black/10 hover:text-white"
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
    </div>
  );
}
