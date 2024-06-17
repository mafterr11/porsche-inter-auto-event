import EmailTemplate from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["mafterr11@gmail.com"],
      subject: "PIA - Solicitare Nouă",
      // to: ["pia.event@entigha.com"],
      // subject: "New Form Submission",
      text: EmailTemplate(formData), 
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}