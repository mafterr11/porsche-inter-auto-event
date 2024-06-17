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
  surname: string;
  email: string;
  phone: string;
  message: string;
  marca: "Audi" | "Volkswagen" | "Skoda" | "Seat" | "Cupra" | "";
  selectedLocation?: number;
  carCondition?: string;
  carModel?: string;
  acceptTerms: boolean; // Added acceptTerms field
  contactMethod: string; // Add this line
};

const initialValues: FormItems = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  message: "",
  marca: "",
  selectedLocation: 1,
  carCondition: "",
  carModel: "",
  acceptTerms: false, // Initial value for acceptTerms
  contactMethod: "", // Initial value for contactMethod
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
    const { name, surname, email, phone, message, acceptTerms, contactMethod  } = fieldToUpdate;

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

    if (surname && surname.trim().length < 3) {
      setErrors((prevState) => ({
        ...prevState,
        surname: "Numele să fie minim 3 caractere",
      }));
    } else if (surname && surname.trim().length > 30) {
      setErrors((prevState) => ({
        ...prevState,
        surname: "Numele să fie maxim 30 de caractere",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        surname: "",
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

    if (message && message.trim().length > 150) {
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
        }));
      }
    }

    if (contactMethod !== undefined) {
      setFormData((prev) => ({ ...prev, contactMethod }));
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
        description: "Vă rugăm să acceptați prelucrarea datelor GDPR",
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
    <div className="flex h-full flex-col items-center justify-center gap-y-8 pt-6 xl:mt-0 xl:flex-col xl:pb-20">
      {/* Header */}
      <Header />
      {/* Main content */}
      <div
        className={`relative m-1 mx-auto flex w-[40%] max-w-4xl md:h-[700px] md:max-xl:w-[80%] ${currentStepIndex === 4 ? "h-full md:h-[800px]" : currentStepIndex === 0 || currentStepIndex === 1 || currentStepIndex === 2 || currentStepIndex === 5  ? "h-[65vh]" : currentStepIndex === 3 ? "h-[87vh] xs:max-md:h-[85vh]" : "h-[60vh]"} justify-between rounded-lg border border-neutral-700 bg-background p-4 max-md:w-full`}
      >
        {!showSuccessMsg ? (
          <SideBar
            currentStepIndex={currentStepIndex}
            goTo={goTo}
            isLastStep={isLastStep}
          />
        ) : (
          ""
        )}
        <main
          className={`${showSuccessMsg ? "w-full" : "mt-12 w-full md:mt-5 md:w-[65%]"} xl:pr-6`}
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
                  <FinalStep key="step6" {...formData} goTo={goTo} />
                )}
              </AnimatePresence>
              <div className={`${currentStepIndex === 4 ? "mt-8" : ""} flex w-full items-center justify-between px-1`}>
                <div>
                  <Button
                    onClick={previousStep}
                    type="button"
                    variant="ghost"
                    className={`${
                      isFirstStep
                        ? "invisible"
                        : "visible p-0 text-neutral-800 hover:scale-[1.1] hover:text-neutral-700"
                    } font-bold`}
                  >
                    Înapoi
                  </Button>
                </div>
                <div className="flex items-center">
                  <div
                    className={`${
                      isFormStep || isLastStep ? "visible" : "invisible"
                    } relative transition-all duration-300 ease-in-out after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 after:transition active:scale-[0.95]`}
                  >
                    <Button
                      type="submit"
                      className="relative rounded-xl border border-black/20 bg-[#384967] font-bold text-white shadow-input shadow-black/10 hover:bg-[#384967]/80 hover:text-white"
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
